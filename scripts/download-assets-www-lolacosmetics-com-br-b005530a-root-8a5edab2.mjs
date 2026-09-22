import fs from 'node:fs/promises';
import crypto from 'node:crypto';
import path from 'node:path';
const site='www-lolacosmetics-com-br-b005530a/root-8a5edab2';
const root=`public/sites/${site}`;
// The whole site shares one theme, so every captured page resolves into a single asset
// store and manifest — the home page's namespace, which already holds them. Discovery
// walks all of the pages' extractions; storage stays put.
const research=`docs/research/${site}`;
// `site` carries the home page's key because that namespace holds the shared store.
const researchRoot=`docs/research/${site.split('/')[0]}`;
const pageDirs=(await fs.readdir(researchRoot,{withFileTypes:true})).filter(e=>e.isDirectory()).map(e=>e.name);
const datasetPaths=[];
for(const dir of pageDirs)for(const name of ['desktop-extraction','loaded-extraction','mobile-extraction'])datasetPaths.push(`${researchRoot}/${dir}/${name}.json`);
const datasets=(await Promise.all(datasetPaths.map(async p=>{try{return JSON.parse(await fs.readFile(p,'utf8'))}catch{return null}}))).filter(Boolean);
// Seed from the previous run so a re-run only fills gaps: the origin serves some assets
// intermittently, and starting empty would drop entries that are already on disk.
const manifest=JSON.parse(await fs.readFile(`${research}/asset-manifest.json`,'utf8').catch(()=>'{}')); const errors=[];
const urls=new Set();
function add(s,base='https://www.lolacosmetics.com.br/'){if(!s||s.startsWith('data:')||s.startsWith('#'))return;try{const u=new URL(s.replaceAll('&amp;','&'),base);if(u.protocol.startsWith('http'))urls.add(u.href)}catch{}}
for(const d of datasets){for(const im of [...(d.images||[]),...(d.shadows||[]).flatMap(s=>s.images||[])]){add(im.src);add(im.lazy);add(im.poster)}for(const r of d.resources||[])if(/\.(woff2?|ttf|otf|png|jpe?g|webp|svg|gif|mp4)(\?|$)/i.test(r))add(r);for(const css of d.stylesheets||[])if(css.url&&!css.url.includes('family=#'))add(css.url);for(const bg of d.backgrounds||[])for(const m of bg.matchAll(/url\(["']?([^"')]+)["']?\)/g))add(m[1]);for(const style of d.inlineStyles||[])for(const m of style.matchAll(/url\(\s*["']?([^"')]+)["']?\s*\)/g))add(m[1]);}
const cssFiles=[];
async function download(url){if(manifest[url])return;try{const res=await fetch(url,{signal:AbortSignal.timeout(25000)});if(!res.ok)throw Error(`HTTP ${res.status}`);const contentType=res.headers.get('content-type')||'';let ext=path.extname(new URL(url).pathname);const isCSS=contentType.includes('text/css');if(isCSS)ext='.css';if(!ext||ext.length>7)ext=contentType.includes('font')?'.woff2':'.bin';const basename=path.basename(new URL(url).pathname,path.extname(new URL(url).pathname)).replace(/[^a-zA-Z0-9_-]/g,'-').slice(0,60)||'asset';const name=`${basename}-${crypto.createHash('sha256').update(url).digest('hex').slice(0,10)}${ext}`;const local=`/sites/${site}/${name}`;manifest[url]=local;const buffer=Buffer.from(await res.arrayBuffer());await fs.writeFile(`${root}/${name}`,buffer);if(isCSS){const css=buffer.toString();cssFiles.push({url,name,css});for(const m of css.matchAll(/url\(\s*["']?([^"')]+)["']?\s*\)/g))add(m[1],url)} }catch(e){errors.push({url,error:String(e)})}}
await fs.mkdir(root,{recursive:true});let processed=new Set();for(let pass=0;pass<4;pass++){const queue=[...urls].filter(u=>!processed.has(u));for(let i=0;i<queue.length;i+=4){await Promise.all(queue.slice(i,i+4).map(async u=>{processed.add(u);await download(u)}));}if(![...urls].some(u=>!processed.has(u)))break;}
for(const {url,name,css} of cssFiles){const rewritten=css.replace(/url\(\s*["']?([^"')]+)["']?\s*\)/g,(full,u)=>{try{return manifest[new URL(u,url).href]?`url("${manifest[new URL(u,url).href]}")`:full}catch{return full}});await fs.writeFile(`${root}/${name}`,rewritten);}
await fs.writeFile(`${research}/asset-manifest.json`,JSON.stringify(manifest,null,2));await fs.writeFile(`${research}/download-errors.json`,JSON.stringify(errors,null,2));console.log(JSON.stringify({downloaded:Object.keys(manifest).length,css:cssFiles.length,errors},null,2));

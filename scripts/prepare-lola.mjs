import fs from 'node:fs';
import {load} from 'cheerio';
import {createSanitizer} from './lib/lola-sanitize.mjs';
const site='www-lolacosmetics-com-br-b005530a/root-8a5edab2';
const root=`docs/research/${site}`, out=`src/components/sites/${site}`;
const shared='src/components/sites/www-lolacosmetics-com-br-b005530a/shared';
const raw=JSON.parse(fs.readFileSync(`${root}/desktop-extraction.json`));
const d=JSON.parse(fs.readFileSync(`${root}/loaded-extraction.json`));
const mobile=JSON.parse(fs.readFileSync(`${root}/mobile-extraction.json`));
const manifest=JSON.parse(fs.readFileSync(`${root}/asset-manifest.json`));
const options=JSON.parse(fs.readFileSync(`${root}/slider-options.json`));

// The browser capture recorded 13 named sections but walked past four flow siblings of
// #content-wrapper. None of them carry slider state, so they are recovered from the full
// page HTML and spliced back into document order; `sections` replaces d.sections below.
const recovered={BenefitsBanner:'.banner-beneficios',ReasonsToLove:'#motivos-amar',Benefits:'.nova-secao-bene',SocialLinks:'#redes-home'};
const documentOrder=['Header','Hero','BenefitsBanner','Categories','ReasonsToLove','Favorites','HairTypes','DailyDeals','Benefits','Launches','Collector','BeforeAfter','Affiliate','Blog','SocialLinks','Reviews','Footer'];
const $page=load(d.html);
const sections={};
for(const name of documentOrder){
  if(d.sections[name]){sections[name]=d.sections[name];continue;}
  const node=$page(recovered[name]).first();
  if(!node.length)throw new Error(`Could not recover section ${name} (${recovered[name]})`);
  // Recovered sections have no per-element computed capture; source.css governs them.
  sections[name]={selector:recovered[name],html:node.toString(),tree:{styles:{}}};
}
const {clean,rewrite,local}=createSanitizer(manifest,options);
// source.css is the whole site's stylesheet, so it is assembled from every captured page:
// the interior routes load bundles the home page never requests, and without them their
// grid classes collapse into a single column. Home's sheets come first to keep its cascade.
const siteResearch=`docs/research/${site.split('/')[0]}`;
const captures=fs.readdirSync(siteResearch,{withFileTypes:true}).filter(e=>e.isDirectory())
  .map(e=>`${siteResearch}/${e.name}/loaded-extraction.json`).filter(f=>fs.existsSync(f))
  .map(f=>JSON.parse(fs.readFileSync(f,'utf8')));
let css='';
const seenSheets=new Set();
const addSheet=sheet=>{
  if(!sheet)return;
  if(sheet.url){if(seenSheets.has(sheet.url))return;seenSheets.add(sheet.url);}
  if(sheet.url&&manifest[sheet.url])css+='\n'+fs.readFileSync('public'+manifest[sheet.url],'utf8');
  else if(sheet.css)css+='\n'+sheet.css;
};
for(const sheet of raw.stylesheets)addSheet(sheet);
for(const capture of captures)for(const sheet of capture.stylesheets||[])addSheet(sheet);
const seenInline=new Set();
for(const capture of [d,...captures])for(const style of capture.inlineStyles||[]){
  if(!style||seenInline.has(style))continue;
  seenInline.add(style);
  css+='\n'+style;
}
css=rewrite(css).replace(/@import\s+[^;]+;/g,'').replace(/@charset\s+[^;]+;/g,'');
fs.writeFileSync(`public/sites/${site}/source.css`,css);
// The source bundles slick's stylesheet, whose url() references stay relative to wherever
// that stylesheet sits. source.css is served from this directory, so slick's own runtime
// assets are copied here under the exact names those references use.
fs.copyFileSync('node_modules/slick-carousel/slick/ajax-loader.gif',`public/sites/${site}/ajax-loader.gif`);
fs.mkdirSync(`public/sites/${site}/fonts`,{recursive:true});
for(const font of fs.readdirSync('node_modules/slick-carousel/slick/fonts'))fs.copyFileSync(`node_modules/slick-carousel/slick/fonts/${font}`,`public/sites/${site}/fonts/${font}`);
const fragments={};for(const [name,s] of Object.entries(sections))fragments[name]=clean(s.html);
const $m=load(mobile.html);fragments.HeaderMobile=clean($m('#header').toString());fragments.HeroMobile=clean($m('.fullbanner').toString());
// Mobile slider options come from the same hero instance: one slide and four dots.
fragments.HeroMobile=fragments.HeroMobile.replace(/data-lola-slider="[^"]*"/g,`data-lola-slider="${JSON.stringify(options[0].options).replaceAll('"','&quot;')}"`);
// Shared chrome lives outside the page fragments. The cart uses its own simplified
// captured header, while other interior routes use the home navigation without an h1.
const chromeNames=['Header','HeaderMobile','Footer'];
const chrome=Object.fromEntries(chromeNames.map(n=>[n,fragments[n]]));
// The storefront marks the logo up as the page heading only on the home page; every
// interior route uses a plain container, so a second variant keeps them from shipping a
// stray <h1> that the source does not have.
chrome.HeaderInterior=chrome.Header.replace(/<h1(\s[^>]*)?>/,'<div class="logo-heading">').replace('</h1>','</div>');
if(chrome.HeaderInterior===chrome.Header)throw new Error('logo heading not found in captured header');
const cartCapture=captures.find(c=>c.url&&new URL(c.url).pathname==='/carrinho');
if(!cartCapture?.headerHtml)throw new Error('Cart header missing; recapture /carrinho before preparing shared chrome');
chrome.HeaderCart=createSanitizer(manifest).clean(cartCapture.headerHtml);
const pageFragments=Object.fromEntries(Object.entries(fragments).filter(([n])=>!chromeNames.includes(n)));
fs.mkdirSync(shared,{recursive:true});
fs.writeFileSync(`${shared}/chrome.json`,JSON.stringify(chrome,null,2));
fs.writeFileSync(`${out}/fragments.json`,JSON.stringify(pageFragments,null,2));
const shadows=d.shadows.filter(x=>['WIDDE-PRO-HIGHLIGHTS','WIDDE-PRO-CAROUSEL'].includes(x.tag));
fs.writeFileSync(`${out}/media-data.json`,JSON.stringify(shadows.map(x=>({tag:x.tag,html:rewrite(x.html),images:x.images.map(im=>({...im,src:local(im.src),poster:local(im.poster)}))})),null,2));
// One thin wrapper per section, generated so a new page only has to be captured.
// Mobile variants are alternates of a section already wrapped, not sections of their own.
for(const name of Object.keys(pageFragments).filter(n=>!n.endsWith('Mobile')))
  fs.writeFileSync(`${out}/${name}.tsx`,`import SourceSection from "../shared/SourceSection";\nimport fragments from "./fragments.json";\nexport default function ${name}() { return <SourceSection name="${name}" html={fragments.${name}} />; }\n`);
// The only shared contract left is the demo cart's product shape: SourceSection takes the
// fragment HTML directly, so the per-page section union it used to need is gone.
fs.writeFileSync(`${shared}/types.ts`,'export interface LolaProduct { id: string; name: string; image: string; price: number; quantity: number; }\n');
for(const [name,s] of Object.entries(sections)){const specPath=`${root}/components/${name}.spec.md`;
// Builder agents correct their own spec in place, so only fill in the ones still missing.
if(fs.existsSync(specPath))continue;const text=load(s.html).text().replace(/\s+/g,' ').trim();const st=s.tree.styles;const spec=`# ${name} Specification\n\n## Overview\n- Target: ${out}/${name}.tsx\n- Screenshot: docs/design-references/${site}/desktop-loaded-1440.png and mobile-390.png\n- Interaction: ${['Hero'].includes(name)?'time-driven autoplay 5000ms plus click/swipe, transition 500ms ease': ['Categories','Favorites','DailyDeals','Launches','Collector'].includes(name)?'click/swipe carousel, 500ms ease':'links, hover and local UI controls'}\n\n## DOM Structure\nExact sanitized source markup is provided as fragments.${name} in fragments.json. All source class names and inline SVGs retained. Render as HTML with display:contents wrapper to preserve selectors. Original CSS is loaded globally from local source.css, including all descendant values. Do not approximate or override original styles.\n\n## Computed Styles\n${Object.keys(st).length?Object.entries(st).map(([k,v])=>'- '+k+': '+v).join('\n'):'No computed capture for this section; the original declarations in source.css apply unchanged.'}\n\n## States & Behaviors\nNative scrolling, fixed header remains 212px at 1440 before and after scroll; no Lenis. Desktop navigation hover reveals menus (block/grid/flex); mobile .dropdown-menu toggles .active-menu with left 0px and 0.3s transition. Hero starts at slide 0, auto advance every 5000ms, pauses on hover/focus, dots clickable. Product carousels: 4 desktop, 3 below 1250, 2 below 1024; paired promo/collector 2 throughout.\n\n## Per-State Content\nAll carousel slide contents retained in fragments; source inline icons retained verbatim. No backend or authentication. Non-home destinations link to original site. Local demo purchase/wishlist are handled separately.\n\n## Assets\nAll URLs in fragment are rewritten using asset-manifest.json to /sites/${site}/. Exact source imagery, fonts, SVGs, and videos locally hosted.\n\n## Text Content (verbatim)\n${text}\n\n## Responsive Behavior\n1440: original desktop layout. 768 and 390: source CSS media queries, header switches at 1100px. Matching mobile screenshot and mobile-specific hero/header fragments available. Product rails use breakpoints above.\n`;
fs.writeFileSync(specPath,spec);}
fs.writeFileSync(`${root}/PAGE_TOPOLOGY.md`,'# Page topology\n\nFixed Header \u2192 Hero \u2192 video Stories \u2192 BenefitsBanner \u2192 Categories \u2192 ReasonsToLove \u2192 Favorites \u2192 HairTypes \u2192 video rail \u2192 DailyDeals \u2192 Benefits \u2192 Launches \u2192 Collector \u2192 BeforeAfter \u2192 Affiliate \u2192 Blog \u2192 SocialLinks \u2192 Reviews \u2192 Footer. Cookie banner fixed bottom.\n\nThe two video widgets are custom elements rendered by MediaStories, not fragments. Native scroll, no Lenis or scroll-snap. Header stays fixed at top. Carousels click/swipe driven; hero additionally autoplay.\n');
fs.writeFileSync(`${root}/BEHAVIORS.md`,'# Observed behaviors\n\nDesktop header stays fixed, 212px tall at scroll 0 through 7148px. Mobile header 125.25px. Hover on desktop nav reveals block/grid/flex menus. Hamburger opens .dropdown-menu.active-menu, left:0px; transition:0.3s. Header breakpoint 1100px.\n\nHero uses Slick, autoplay 5000ms, speed 500ms ease, dots, swipe, pause on hover/focus, infinite. Categories four slides desktop, two below1024. Product carousels four desktop/three below1250/two below1024. Promo and collector two. Source options saved in slider-options.json.\n\nVideo thumbnails autoplay muted in circular highlights. Click opens video view. Newsletter form and checkout are demo-only; links to unrequested routes use live source. Cookie consent hides banner and persists locally.\n\nThird-party video and review widgets can change dimensions when asynchronous content loads; clone uses captured loaded states.\n');
console.log('Prepared',Object.keys(fragments).length,'fragments, source CSS and specifications');

import { load } from "cheerio";

const ORIGIN = "https://www.lolacosmetics.com.br";

/**
 * Keeps navigation inside the clone. Anything that resolves to the source origin becomes
 * the bare pathname, so a cloned route renders it and everything else falls through to the
 * catch-all; other hosts, mail and phone links are left exactly as the source had them.
 */
export function localHref(href) {
  if (!href) return href;
  if (/^javascript:/i.test(href)) return "#";
  if (href.startsWith("#") || /^(mailto:|tel:)/i.test(href)) return href;
  let url;
  try { url = new URL(href, ORIGIN); } catch { return href; }
  if (url.protocol !== "http:" && url.protocol !== "https:") return href;
  if (url.hostname !== "www.lolacosmetics.com.br" && url.hostname !== "lolacosmetics.com.br") return url.href;
  return (url.pathname || "/") + url.search + url.hash;
}

/**
 * Builds the sanitizer both prepare scripts use to turn captured markup into a fragment
 * that can be replayed locally: scripts and handlers stripped, asset URLs pointed at the
 * downloaded copies, and slick sliders returned to plain markup carrying the options the
 * page will re-initialize them with.
 *
 * `sliderOptions` is consumed in document order, the way the capture recorded it; pages
 * captured without it fall back to the slider's own data-slick attribute.
 */
export function createSanitizer(manifest, sliderOptions = []) {
  // Longest URL first: one asset URL can be a prefix of another (a .woff next to the same
  // face's .woff2), and substituting the short one first would corrupt the longer path.
  const mappings = Object.entries(manifest).sort((a, b) => b[0].length - a[0].length);
  const rewrite = value => {
    for (const [remote, local] of mappings) value = value.split(remote).join(local);
    return value;
  };
  const local = value => manifest[value] || value;
  let sliderIndex = 0;

  const clean = html => {
    const $ = load(html, {}, false);
    $("script,iframe,style,noscript").remove();
    $("*").each((i, el) => {
      for (const attr of Object.keys(el.attribs || {})) {
        if (/^on/i.test(attr) || ["data-bind", "data-widget-js", "data-messages"].includes(attr)) $(el).removeAttr(attr);
      }
      if (el.tagName === "a") $(el).attr("href", localHref($(el).attr("href")));
      if (el.tagName === "form") $(el).removeAttr("action").removeAttr("method");
    });
    $(".slick-slider").each((i, el) => {
      const slider = $(el);
      const contents = slider.find("> .slick-list > .slick-track > :not(.slick-cloned)").toArray()
        .map(c => $(c).children().children().toString()).join("");
      const captured = sliderOptions[sliderIndex++]?.options;
      let options = captured;
      if (!options) {
        try { options = JSON.parse(slider.attr("data-slick") || "{}"); } catch { options = {}; }
      }
      slider.html(contents)
        .removeClass("slick-initialized slick-slider slick-dotted")
        .attr("data-lola-slider", JSON.stringify(options));
      slider.find("[tabindex]").removeAttr("tabindex");
    });
    $("img").each((i, el) => {
      const image = $(el);
      const src = image.attr("data-src") || image.attr("src");
      if (src) image.attr("src", local(src));
      image.removeAttr("data-src").removeClass("lazyload fade animated");
      if (!image.attr("alt")) image.attr("alt", "Lola Cosmetics");
    });
    $("[style]").each((i, el) => $(el).attr("style", rewrite($(el).attr("style"))));
    return rewrite($.html()).replace(/<!--[^]*?-->/g, "");
  };

  return { clean, rewrite, local };
}

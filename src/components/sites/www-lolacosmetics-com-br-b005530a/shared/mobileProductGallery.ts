import options from "./mobile-gallery-options.json";
import { isMobileBrowser } from "./mobileDevice";

/** The origin chooses a different PDP template by device, not viewport width. */
export function mountMobileProductGalleries(root: HTMLElement): () => void {
  if (!isMobileBrowser()) return () => {};

  const replacements: Array<{ desktop: Element; gallery: HTMLElement }> = [];
  root.querySelectorAll("figure.wd-product-medias").forEach(desktop => {
    const photos = desktop.querySelectorAll<HTMLImageElement>(".wd-product-media-selector li.image img");
    if (!photos.length) return;
    const gallery = document.createElement("div");
    gallery.className = "wd-product-media-selector2 wd-widget wd-widget-js";
    gallery.setAttribute("data-lola-slider", JSON.stringify(options));
    photos.forEach((photo, index) => {
      const slide = document.createElement("div");
      slide.className = index === 0 ? "image selected" : "image";
      const image = photo.cloneNode(false) as HTMLImageElement;
      // Some captured zoom attributes are empty/truncated on the origin. The local
      // 450px photo remains a valid fallback; never request those malformed URLs.
      image.src = [photo.dataset.imageBig, photo.dataset.small]
        .find(src => src?.startsWith("/sites/")) || photo.src;
      image.width = 645;
      image.height = 645;
      slide.append(image);
      gallery.append(slide);
    });
    desktop.replaceWith(gallery);
    replacements.push({ desktop, gallery });
  });
  return () => replacements.forEach(({ desktop, gallery }) => gallery.replaceWith(desktop));
}

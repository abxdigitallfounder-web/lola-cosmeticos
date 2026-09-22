// @types/slick-carousel is a global script that augments the jQuery namespace, so it
// offers nothing to resolve for the side-effect `import("slick-carousel")` that loads
// the plugin in the browser. Declaring the module keeps that import typed.
declare module "slick-carousel";

// @types/slick-carousel is a global script that augments the jQuery namespace: it types
// $.fn.slick but leaves the module specifier unresolvable. Under a bundler the package
// exports a registration factory rather than registering itself on import, so declare the
// shape SourceSection actually calls.
declare module "slick-carousel" {
  const registerSlick: (root: Window, jQuery: JQueryStatic) => JQueryStatic;
  export default registerSlick;
}

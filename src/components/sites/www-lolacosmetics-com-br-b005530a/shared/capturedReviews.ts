/** Replay the captured phone review controls without loading the remote widget runtime. */
export function mountCapturedReviews(root: HTMLElement): () => void {
  const track = root.querySelector<HTMLElement>("#reviews-carousel-items");
  const viewport = root.querySelector<HTMLElement>("#reviews-carousel-container");
  const buttons = [...root.querySelectorAll<HTMLButtonElement>('button[id^="bullet-"]')];
  const card = track?.querySelector<HTMLElement>(".carousel-item");
  if (!track || !viewport || !card || !buttons.length) return () => {};
  const activeClass = [...buttons[0].classList].find(c => c.startsWith("_active_"));
  let index = 0;
  const render = () => {
    track.style.transform = `translateX(${-index * card.getBoundingClientRect().width}px)`;
    buttons.forEach((button, i) => {
      button.setAttribute("aria-current", String(i === index));
      if (activeClass) button.classList.toggle(activeClass, i === index);
    });
  };
  const onClick = (event: MouseEvent) => {
    const button = (event.target as Element).closest("button");
    if (!button) return;
    const selected = buttons.indexOf(button);
    if (selected >= 0) index = selected;
    else if (button.id === "navigation-arrow-left") index = (index - 1 + buttons.length) % buttons.length;
    else if (button.id === "navigation-arrow-right") index = (index + 1) % buttons.length;
    else return;
    render();
  };
  root.addEventListener("click", onClick);
  const observer = new ResizeObserver(render);
  observer.observe(viewport);
  return () => { root.removeEventListener("click", onClick); observer.disconnect(); };
}

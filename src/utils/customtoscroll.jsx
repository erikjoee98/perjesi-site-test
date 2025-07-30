// utils/scroll.js
function easeInOutQuad(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

export function customScrollTo(targetId, duration = 800) {
  const target = document.getElementById(targetId);
  if (!target) return;

  const startY = window.scrollY;
  const targetY = target.getBoundingClientRect().top + startY;
  const diff = targetY - startY;
  let start;

  const step = (timestamp) => {
    if (!start) start = timestamp;
    const time = timestamp - start;
    const progress = Math.min(time / duration, 1);
    const eased = easeInOutQuad(progress);

    window.scrollTo(0, startY + diff * eased);

    if (time < duration) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
}

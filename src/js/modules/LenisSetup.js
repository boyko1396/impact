export function LenisSetup() {
  const lenis = new Lenis({
    infinite: true,
    syncTouch: true
  });

  function onRaf(time) {
    lenis.raf(time);
    requestAnimationFrame(onRaf);
  }

  requestAnimationFrame(onRaf);

  document.querySelectorAll('.js-nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const hrefValue = this.getAttribute('href');
      const targetData = document.querySelector(hrefValue)?.getAttribute('data-target');
      if (targetData) {
        lenis.scrollTo(targetData);
      }
    });
  });
}
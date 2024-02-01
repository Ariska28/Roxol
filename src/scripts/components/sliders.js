import Splide from "@splidejs/splide";

export function initProgressBar(slider) {
  const bar = slider.root.querySelector( '[data-slider-bar]' );
      
  slider.on('mounted move', function () {
    const end  = slider.Components.Controller.getEnd() + 1;
    const rate = Math.min( ( slider.index + 1 ) / end, 1 );
    bar.style.width = String( 100 * rate ) + '%';
  });
}

export function mobSplider(sliderAttr) {
  const spleders =  document.querySelectorAll(`${sliderAttr}`);

  if (window.matchMedia("(max-width: 769px)").matches) {
    spleders.forEach((el) => {
      const splide = new Splide(el, {
        pagination: false,
        arrows: false,
        fixedWidth: '81%',
        gap : '0px',
      });
      
      initProgressBar(splide) 
      
      splide.mount();
    })
  }
}

export function desktopSplider(sliderAttr) {
  const spleders =  document.querySelectorAll(`${sliderAttr}`);

  if (window.matchMedia("(min-width: 769px)").matches) {
    spleders.forEach((el) => {
      const splide = new Splide(el, {
        pagination: false,
        arrows: false,
        fixedWidth: '40%',
        gap : '0px',
        wheel       : true,
        perMove: 1,
        wheelSleep: 1000,
        easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
        releaseWheel: true,
      });
      
      initProgressBar(splide) 
      
      splide.mount();
    })
  }
}
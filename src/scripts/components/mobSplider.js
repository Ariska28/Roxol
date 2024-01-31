import Splide from "@splidejs/splide";

export function mobSplider(sliderAttr) {

  if (window.matchMedia("(max-width: 769px)").matches) {
    const splide = new Splide(`${sliderAttr}`, {
      pagination: false,
      arrows: false,
      fixedWidth: '81%',
      gap : '0px',
    });
    const bar = splide.root.querySelector( '[data-mobile-slider-bar]' );
    
    splide.on('mounted move', function () {
      const end  = splide.Components.Controller.getEnd() + 1;
      const rate = Math.min( ( splide.index + 1 ) / end, 1 );
      bar.style.width = String( 100 * rate ) + '%';
    } );
    
    splide.mount();
  }
}
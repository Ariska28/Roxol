import Splide from "@splidejs/splide";

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
      
      const bar = splide.root.querySelector( '[data-mobile-slider-bar]' );
      
      splide.on('mounted move', function () {
        const end  = splide.Components.Controller.getEnd() + 1;
        const rate = Math.min( ( splide.index + 1 ) / end, 1 );
        bar.style.width = String( 100 * rate ) + '%';
      });
      
      splide.mount();
    })

  }
}
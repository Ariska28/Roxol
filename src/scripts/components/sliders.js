import Splide from "@splidejs/splide";
import { Intersection } from '@splidejs/splide-extension-intersection';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


import { EventInterface } from '@splidejs/splide';

export function MyTransition( Splide, Components ) {
  const { bind } = EventInterface( Splide );
  const { Move } = Components;
  const { list } = Components.Elements;

  let endCallback;

  function mount() {
    bind( list, 'transitionend', e => {
      if ( e.target === list && endCallback ) {
        cancel();
        endCallback();
      }
    } );
  }

  function start( index, done ) {
    // Converts the index to the position
    const destination = Move.toPosition( index, true );

    // Applies the CSS transition
    list.style.transition = 'all 800ms ease-in-out';

    // Moves the carousel to the destination.
    Move.translate( destination );

    // Keeps the callback to invoke later.
    endCallback = done;
  }

  function cancel() {
    list.style.transition = '';
  }

  return {
    mount,
    start,
    cancel,
  };
}

export function heroSplider(sliderAttr) {
  const spliders =  document.querySelectorAll(`${sliderAttr}`);

  spliders.forEach((splider) => {
    const progressLine = document.querySelector('[data-slider-line-progress]');
    const title = splider.querySelectorAll('[data-slider-title]');
    const text = splider.querySelectorAll('[data-slider-text]');
    const btn = splider.querySelectorAll('[data-slider-btn]');
    const line = document.querySelector('[data-slider-line]');

    const splide = new Splide(splider, {
      type: 'loop',
      interval: 4000,
      perPage : 1,
      arrows: false,
      pagination: false,
      pauseOnHover: false,
      autoplay: 'pause',
      intersection: {
        inView: {
          autoplay: "play",
        },
        outView: {
          autoplay: 'pause',
        },
      },
    });

    splide.on('mounted', function () {
      const tl = gsap.timeline({});

      tl.from(title[0], {
        opacity: 0,
        delay: 1,
        duration: 0.4,
      })
      
      tl.from(text[0], {
        opacity: 0,
        duration: 0.4,
      })
      
      tl.from(btn[0], {
        translateY: 50,
        opacity: 0,
        duration: 0.3,
      })
      
      tl.from(line, {
        opacity: 0,
        duration: 0.2,
      })
    });

    splide.on('autoplay:playing', function ( rate ) {
      progressLine.style.width = `${rate*100}%`
    });

    splide.mount({Intersection}, MyTransition);

    splide.on('move', function (index) {
      const tl = gsap.timeline({});

      tl.from(title[index], {
        opacity: 0,
        delay: 0.7,
        duration: 0.4,
      })

      tl.from(text[index], {
        opacity: 0,
        duration: 0.4,
      })

      tl.from(btn[index], {
        translateY: 50,
        opacity: 0,
        duration: 0.3,
      })
    });
  })
}

export function mobSplider(sliderAttr) {
  const spleders =  document.querySelectorAll(`${sliderAttr}`);

  if (window.matchMedia("(max-width: 769px)").matches) {
    spleders.forEach((el) => {
      const splide = new Splide(el, {
        pagination: false,
        arrows: false,
        fixedWidth: '85%',
        gap : '0px',
      });
      
      initProgressBar(splide) 
      
      splide.mount();
    })
  }
}

export function productSplider(sliderAttr) {
  const spleders =  document.querySelectorAll(`${sliderAttr}`);

    spleders.forEach((el) => {
      const splide = new Splide(el, {
        perPage: 1,
        pagination: true,
      });
      
      splide.mount();
    })
}

export function desktopSplider(sliderAttr) {
  const spleders =  document.querySelectorAll(`${sliderAttr}`);

  if (window.matchMedia("(min-width: 769px)").matches) {
    spleders.forEach((el) => {
      const splide = new Splide(el, {
        pagination: false,
        arrows: false,
        fixedWidth: '39%',
        gap : '0px',
        wheel       : true,
        perMove: 1,
        wheelSleep: 1000,
        easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
        releaseWheel: true,
      });
      
      initProgressBar(splide) 
      gsap.registerPlugin(ScrollTrigger);
      
      splide.mount({}, MyTransition);
    })
  }
}

export function spliderWithArrows(sliderAttr) {
  const spleders =  document.querySelectorAll(`${sliderAttr}`);

    spleders.forEach((el) => {
      const splide = new Splide(el, {
        pagination: false,
        fixedWidth: '39.2%',
        gap : '0px',
        perMove: 2,
        breakpoints: {
          767: {
            fixedWidth: '85%',
            arrows:false
          },
        }
      });
      
      initProgressBar(splide) 
      
      splide.mount();
    })
}

export function spliderVertical(sliderAttr) {
  const spleders =  document.querySelectorAll(`${sliderAttr}`);

    spleders.forEach((el) => {
      const splide = new Splide(el, {
        direction: 'ttb',
        heightRatio: 1,
        perPage: 2,
        pagination: false,
        gap : 'calc(24 *var(--fz))',
        arrows: false,
        wheel       : true,
        releaseWheel: true,
        perMove: 1,
      });
      
      initProgressBar(splide) 
      
      splide.mount();

      if (window.matchMedia("(max-width: 767px)").matches) {
        splide.destroy();
      }
    })
}

export function spliderWithArrowsDesktop(sliderAttr) {
  const spleders =  document.querySelectorAll(`${sliderAttr}`);

  spleders.forEach((el) => {
    const splide = new Splide(el, {
      pagination: false,
      gap : 'calc(24 * var(--fz))',
      perMove: 1,
      perPage: 5,
    });
    
    initProgressBar(splide) 
    
    splide.mount();

    if (window.matchMedia("(max-width: 767px)").matches) {
      splide.destroy();
    }
  })


}

export function historySplider(sliderAttr) {
  const spleders =  document.querySelectorAll(`${sliderAttr}`);
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.normalizeScroll(true);

  spleders.forEach((el) => {
    const splide = new Splide(el, {
      pagination: false,
      fixedWidth: '100%',
      gap : '0px',
      perMove: 1,
    });

    splide.on('move', function (index) {
      const slide = splide.Components.Slides.get()[index].slide;
      const elements = slide.querySelectorAll('[history-appear-element]');
  
      gsap.from(elements, {
        opacity: 0,
        delay: 0.7,
        duration: 0.4,
        stagger: 0.2
      })
    })
    
    progressBarWithYears(splide) 
    
    splide.mount({}, MyTransition);
  })
}

function progressBarWithYears(slider) {
  const bar = slider.root.querySelector( '[data-slider-bar]' );
  const line = slider.root.querySelector( '[data-slider-line]' );
  const numbersContainer = slider.root.querySelector( '[data-slider-numbers]');
  const dates = ['2018', '2017', '2016', '2015', '2014', '2012', '2010'];

  if(bar) {
    slider.on('mounted',() => { 
      let sliderEnd = slider.Components.Controller.getEnd();

      for(i=0; i <= sliderEnd; i++) {
        let span = document.createElement('span');
        span.innerHTML = dates[i];
        numbersContainer.prepend(span);
        span.style.right =  `${((100 / (sliderEnd)) * i)}%`;
      }
    })

    slider.on('mounted move', (prevIndex, newIndex) => {
      let numbersOnLine = Array.from(numbersContainer.querySelectorAll('span'));
      let sliderEnd  = slider.Components.Controller.getEnd();
      const rate = (100 / sliderEnd) * (slider.index);
      bar.style.width = String(rate) + '%';

      if(prevIndex >= newIndex) {
        numbersOnLine[slider.index].style.color =  '#0E0E0E';
      }  else {
        numbersOnLine[slider.index+1].style.color =  '#9D9D9D';
      }
    });

    if (window.matchMedia("(max-width: 767px)").matches) {
      slider.on('mounted',() => {
        let sliderEnd  = slider.Components.Controller.getEnd();
        line.style.width = `${(sliderEnd + 1)*38}vw` 
      });

      slider.on('mounted move', function (prevIndex, newIndex) { 
        if(prevIndex > newIndex && newIndex % 2) {
          line.style.transform = `translateX(-${slider.index*43.5}vw)` 
        }  else if (prevIndex < newIndex) {
          line.style.transform = `translateX(-${slider.index*43.5}vw)` 
        }  
      });
    }
  }
}

function initProgressBar(slider) {
  const bar = slider.root.querySelector( '[data-slider-bar]' );

  if(bar) {
    slider.on('mounted move', function () {
      const end  = slider.Components.Controller.getEnd();
      const rate = (100 / end) * (slider.index);
      bar.style.width = String(rate) + '%';

      console.log(rate)
    });
  }
}
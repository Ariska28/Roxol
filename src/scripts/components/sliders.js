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

export function spliderWithArrows(sliderAttr) {
  const spleders =  document.querySelectorAll(`${sliderAttr}`);

    spleders.forEach((el) => {
      const splide = new Splide(el, {
        pagination: false,
        fixedWidth: '38.5%',
        gap : '0px',
        perMove: 2,
        breakpoints: {
          767: {
            fixedWidth: '81%',
            arrows:false
          },
        }
      });
      
      initProgressBar(splide) 
      
      splide.mount();
    })
}

export function historySplider(sliderAttr) {
  const spleders =  document.querySelectorAll(`${sliderAttr}`);

  spleders.forEach((el) => {
    const splide = new Splide(el, {
      pagination: false,
      fixedWidth: '100%',
      gap : '0px',
      perMove: 1,
    });
    
    progressBarWithYears(splide) 
    
    splide.mount();
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
        line.style.width = `${(sliderEnd + 1)*50}vw` 
      });

      slider.on('mounted move', function (prevIndex, newIndex) {        
        line.style.transform = `translateX(-${slider.index*50}vw)` 
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
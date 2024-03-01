import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



export function appearAnimations() {
  const splider = document.querySelector('[data-hero-slider]');
  const header = document.querySelector('[data-header]');
  const headerElements = header.querySelectorAll('[data-header-appear]');
  const changingBgContainers = document.querySelectorAll('[data-changing-bg]');
  const changingBgContainersSmall = document.querySelectorAll('[data-changing-bg-small]');

  gsap.registerPlugin(ScrollTrigger);
  // ScrollTrigger.normalizeScroll(true);

  //ticker
  const ticker = document.querySelector('[data-ticker]');
  if(ticker) {
    gsap.from('[data-ticker-left]', {
      scrollTrigger: {
        trigger: ticker,
        start: "top bottom",
        end: "bottom top",
        toggleActions: "play reset play reset",
        scrub: true,
      },
      x: -500,
    })
  
    gsap.to('[data-ticker-right]', {
      scrollTrigger: {
        trigger: ticker,
        start: "top bottom",
        end: "bottom top",
        toggleActions: "play reset play reset",
        scrub: true,
      },
      x: -500,
    })
  
    ScrollTrigger.matchMedia({
      "(min-width: 767px)": function() {
        gsap.to('[data-ticker-media]', {
          scrollTrigger: {
            trigger: ticker,
            start: "50% 50%",
            toggleActions: "play reset play reset",
            scrub: true,
            pin: true,
            end: "+=140%"
          },
          ease: "power1.inOut",
          width: '100%',
          height: '100%',
        })
      }
    })
  }

 //pinSlider
 const dataSliders = document.querySelectorAll('[data-pin-slider]');
 dataSliders?.forEach((dataSlider) => {
   const pointerSliderList = dataSlider.querySelector('[data-pin-slider-list]');
   const pointerSliderBar = dataSlider.querySelector('[data-pin-slider-bar]');
   const pointerSliderChildren = pointerSliderList.querySelectorAll('li');
   ScrollTrigger.matchMedia({
     "(min-width: 767px)": function() {
       const realSliderWidth = (pointerSliderChildren.length)*720*.0521;
       pointerSliderList.style.width = `${realSliderWidth}vw`;

       gsap.to(pointerSliderList, {
         scrollTrigger: {
           trigger: dataSlider,
           start: "50% 50%",
           toggleActions: "play reset play reset",
           scrub: true,
           pin: true,
           end: `+=400%`
         },
         x: `-${(realSliderWidth+(60*.0521)) - 100}vw`,
         ease: "power1.inOut",
       })
     
       gsap.to(pointerSliderBar, {
         scrollTrigger: {
           trigger: dataSlider,
           start: "50% 50%",
           toggleActions: "play reset play reset",
           scrub: true,
           end: `+=400%`
         },
         width: '100%',
         ease: "power1.inOut",
       })
     },
   });
 })

 //cardAnimation
 const cardContainers = document.querySelectorAll('[data-appear-card-container]');
 cardContainers?.forEach(cardContainer => {
   const dataCards = cardContainer.querySelectorAll('[data-appear-card]');
   gsap.from(dataCards, {
     scrollTrigger: {
       trigger: cardContainer,
       start: "top 90%",
     }, 
     y: 200,
     opacity: 0,
     duration: 0.6,
     ease: "power1.inOut",
   });
 })

 //titleAnimation
 const titleContainers = document.querySelectorAll('[data-title]');
 titleContainers?.forEach(titleContainer => {
   const title = titleContainer.querySelectorAll('[data-title-line]');
   const descriptor = titleContainer.querySelector('[data-title-descriptor]');

   if(title) {
     gsap.from(title, {
       scrollTrigger: {
         trigger: titleContainer,
         start: "top 90%",
       }, 
       delay: 0.6,
       duration: 0.3,
       y: 30,
       opacity: 0,
       stagger: 0.2,
       ease: "power1.inOut",
     })
   }

   if(descriptor) {
     gsap.from(descriptor, {
       scrollTrigger: {
         trigger: titleContainer,
         start: "top 90%",
       }, 
       delay: 0.6,
       duration: 0.2,
       opacity:0,
       ease: "power1.inOut",
     })
   }
 })

 //movingCards
 const dataMovingCards = document.querySelector('[data-moving-cards-container]');
 gsap.to('[data-moving-card-left]', {
   scrollTrigger: {
     trigger: dataMovingCards,
     start: "45% 90%",
   }, 
   y: '-100%',
   duration: 5,
   ease: "power1.inOut",
 });

 gsap.to('[data-moving-card-right]', {
  scrollTrigger: {
    trigger: dataMovingCards,
    start: "45% 90%",
  }, 
  y: '-160%',
  duration: 7,
  ease: "power1.inOut",
});

 //buttonAnimation
 const btns = document.querySelectorAll('[data-btn-appear]');
 btns?.forEach(btn => {
   gsap.from(btn, {
     scrollTrigger: {
       trigger: btn,
       start: "top 95%",
       end: "+=500",
     }, 
     delay: 0.6,
     duration: 0.2,
     opacity: 0,
     y:20,
     ease: "power1.inOut",
   })
 })

 //textanimation
 const text = document.querySelectorAll('[data-text-appear]');

 if(text.length) {
   gsap.from(text, {
     scrollTrigger: {
       trigger: text,
       start: "top 95%",
     }, 
     delay: 0.4,
     duration: 0.6,
     opacity: 0,
     stagger: 0.1,
     ease: "power1.inOut",
   })
 }


 //slider
  const sliderContainers = document.querySelectorAll('[data-appear-slider]');
  sliderContainers?.forEach(sliderContainer => {
    const elemets = sliderContainer.querySelectorAll('.splide__slide')[0].querySelectorAll('[history-appear-element]');

    gsap.from(sliderContainer, {
      scrollTrigger: {
        trigger: sliderContainer,
        start: "top 80%",
      }, 
      opacity: 0,
      duration: 0.4,
      delay: 0.2
    });

    gsap.from(elemets, {
      scrollTrigger: {
        trigger: sliderContainer,
      }, 
      opacity: 0,
      duration: 0.4,
      delay: 0.8,
      stagger: 0.2
    });
  })

  //footer
  const footerAppearItemWrappers = document.querySelectorAll('[data-footer-appear-wr]');

  footerAppearItemWrappers.forEach((footerAppearItemWrapper) => {
    const footerAppearItem = footerAppearItemWrapper.querySelector('[data-footer-appear]');

    gsap.from(footerAppearItem, {
      scrollTrigger: {
        trigger: footerAppearItemWrapper,
        start: "30% bottom",
      }, 
      delay: 0.1,
      duration: 0.2,
      y: 100,
      opacity: 0,
      ease: "power1.inOut",
    })
  })

  ScrollTrigger.matchMedia({
    "(min-width: 767px)": function() {
      
      const tl1 = gsap.timeline({});

      const fixCards = document.querySelector('[data-fix-cards]');
      const growImage = document.querySelector('[data-media-fix]');

      if(growImage) {
        tl1.to(growImage, {
          scrollTrigger: {
            trigger: growImage,
            start: "top 70%",
            end: "+=90%",
            scrub: true
          },
          height: `${1100*.0521}vw`,
          width: '100%'
        })
      }

      //pinSlider for industry-solutions page
      const dataSlider = document.querySelector('[data-pin-slider-industry-solutions]');
      if(dataSlider) {
        const pointerSliderList = dataSlider.querySelector('[data-pin-slider-list]');
        const pointerSliderBar = dataSlider.querySelector('[data-pin-slider-bar]');
        const pointerSliderChildren = pointerSliderList.querySelectorAll('li');
  
        const realSliderWidth = (pointerSliderChildren.length)*720*.0521;
        pointerSliderList.style.width = `${realSliderWidth}vw`;
  
        tl1.to(pointerSliderList, {
          scrollTrigger: {
            trigger: dataSlider,
            start: "50% 50%",
            toggleActions: "play reset play reset",
            scrub: true,
            pin: true,
            delay: 0.2,
            end: `+=400%`
          },
          y:0,
          x: `-${(realSliderWidth+(60*.0521)) - 100}vw`,
          ease: "power1.inOut",
        })
      
        gsap.to(pointerSliderBar, {
          scrollTrigger: {
            trigger: dataSlider,
            start: "50% 50%",
            scrub: true,
            toggleActions: "play reset play reset",
            end: `+=400%`
          },
          width: '100%',
          ease: "power1.inOut",
        })
      }

      changingBgContainers?.forEach(changingBgContainer => {
        //changing-bg
        gsap.to('body', {
          scrollTrigger: {
            trigger: changingBgContainer,
            start: "18% 90%",
            end: "bottom 20%",
            toggleActions: "play reset play reset"
          }, 
          delay: 0.1,
          duration: 0.5,
          background: '#FFDF00',
          ease: "power1.inOut",
        })
      })
    
      if(fixCards) {
        gsap.to(fixCards, {
          scrollTrigger: {
            trigger: fixCards,
            start: "top bottom",
            end: "bottom bottom",
            toggleActions: "play reset play reset",
            toggleClass: 'is-active'
          },
        })
      }

      changingBgContainersSmall?.forEach(changingBgContainer => {
        //changing-bg-small-block
        gsap.to('body', {
          scrollTrigger: {
            trigger: changingBgContainer,
            start: "0% center",
            end: "bottom 50%",
            toggleActions: "play reset play reset"
          }, 
          delay: 0.1,
          duration: 0.5,
          background: '#FFDF00',
          ease: "power1.inOut",
        })
      }) 
    }
  })

  const cardContainersBig = document.querySelectorAll('[data-appear-card-container-big]');

  cardContainersBig?.forEach(cardContainer => {
    const dataCards = cardContainer?.querySelectorAll('[data-appear-card]');
    gsap.from(dataCards, {
      scrollTrigger: {
        trigger: cardContainer,
        start: "top 90%",
      }, 
      y: 200,
      opacity: 0,
      duration: 0.3,
      ease: "power1.inOut",
    });
  })

  //timeline
  const tl = gsap.timeline({});

  tl.from(header, {
    opacity: 0,
    delay: 0.2,
    duration: 0.3,
  })

  if(splider) {
    tl.from(splider, {
      opacity: 0,
      delay: 0.05,
      duration: 0.2,
    })
  }

  //header
  headerElements.forEach((headerElement) => {
    gsap.from(headerElement, {
      opacity: 0,
      y: 10,
      delay: 0.2,
      ease: "power1.inOut",
      duration: 0.3,
    })
  })
}




import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export function appearAnimations() {
  const splider = document.querySelector('[data-hero-slider]');
  const header = document.querySelector('[data-header]');
  const headerElements = header.querySelectorAll('[data-header-appear]');

  gsap.registerPlugin(ScrollTrigger);
 

  buttonAnimation();
  cardsAnimation();
  titleAnimation();

  gsap.to('[data-ticker-media]', {
    scrollTrigger: {
      trigger: "[data-ticker]",
      start: "90% bottom",
      end: "bottom bottom",
      toggleActions: "play reset play reset",
      scrub: true,
    },
    width: '100%',
    height: '100%',
  })

  //cards under the text
  gsap.from('[data-ticker-left]', {
    scrollTrigger: {
      trigger: "[data-ticker]",
      start: "top bottom",
      end: "bottom top",
      toggleActions: "play reset play reset",
      scrub: true,
    },
    x: -500,
  })

    //cards under the text
    gsap.to('[data-ticker-right]', {
      scrollTrigger: {
        trigger: "[data-ticker]",
        start: "top bottom",
        end: "bottom top",
        toggleActions: "play reset play reset",
        scrub: true,
      },
      x: -500,
    })

  //cards under the text
  gsap.to('[data-fix-cards]', {
    scrollTrigger: {
      trigger: "[data-fix-cards]",
      start: "top bottom",
      end: "bottom bottom",
      toggleActions: "play reset play reset",
      toggleClass: 'is-active'
    },
  })

  //changing-bg
  gsap.to('body', {
    scrollTrigger: {
      trigger: "[data-changing-bg]",
      start: "18% 90%",
      end: "bottom 20%",
      toggleActions: "play reset play reset"
    }, 
    delay: 0.1,
    duration: 0.5,
    background: '#FFDF00',
    ease: "power1.inOut",
  })

  //timeline
  const tl = gsap.timeline({});

  tl.from(header, {
    opacity: 0,
    delay: 0.2,
    duration: 0.3,
  })

  tl.from(splider, {
    opacity: 0,
    delay: 0.05,
    duration: 0.2,
  })

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

function titleAnimation() {
  const titleContainers = document.querySelectorAll('[data-title]');
  titleContainers?.forEach(titleContainer => {
    const title = titleContainer.querySelectorAll('[data-title-line]');
    const descriptor = titleContainer.querySelector('[data-title-descriptor]');
    gsap.from(title, {
      scrollTrigger: {
        trigger: titleContainer,
        start: "top 95%",
      }, 
      delay: 0.1,
      duration: 0.3,
      y: 100,
      stagger: 0.2,
      ease: "power1.inOut",
    })
  
    gsap.from(descriptor, {
      scrollTrigger: {
        trigger: titleContainer,
        start: "top 95%",
      }, 
      delay: 0.1,
      duration: 0.2,
      opacity:0,
      ease: "power1.inOut",
    })
  })
}

function buttonAnimation() {
  const btns= document.querySelectorAll('[data-btn-appear]');
  btns?.forEach(btn => {
    gsap.from(btn, {
      scrollTrigger: {
        trigger: btn,
        start: "top 95%",
        end: "+=500",
      }, 
      delay: 0.1,
      duration: 0.2,
      y:100,
      ease: "power1.inOut",
    })
  })
}

function cardsAnimation() {
  const cardContainers = document.querySelectorAll('[data-appear-card-container]');
  cardContainers?.forEach(cardContainer => {
    const dataCards = cardContainer.querySelectorAll('[data-appear-card]');
    gsap.from(dataCards, {
      scrollTrigger: {
        trigger: cardContainer,
        start: "top 90%",
      }, 
      y: 30,
      opacity: 0,
      duration: 0.4,
      ease: "power1.inOut",
    });
  })
}
import { header } from "./components/header";
import { gsap } from "gsap";
import { mobSplider, desktopSplider } from "./components/sliders";

document.addEventListener("DOMContentLoaded", () => {
  header();
  mobSplider('[data-mobile-slider]');
  desktopSplider('[data-slider-desktop]')

  // gsap.from("[data-hero-slider]", {
  //   x: 2000,
  //   duration: 3,
  //   stagger: 3,
  //   repeat:Infinity
  // })
});


import { header } from "./components/header";
import { gsap } from "gsap";
import { mobSplider, desktopSplider, spliderWithArrows } from "./components/sliders";

document.addEventListener("DOMContentLoaded", () => {
  header();
  mobSplider('[data-mobile-slider]');
  desktopSplider('[data-slider-desktop]');
  spliderWithArrows('[data-slider]');

  // gsap.from("[data-hero-slider]", {
  //   x: 2000,
  //   duration: 3,
  //   stagger: 3,
  //   repeat:Infinity
  // })
});


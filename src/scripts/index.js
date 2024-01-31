import { header } from "./components/header";
import { gsap } from "gsap";
import { mobSplider } from "./components/mobSplider";

document.addEventListener("DOMContentLoaded", () => {
  header();
  mobSplider('[data-mobile-slider]');

  // gsap.from("[data-hero-slider]", {
  //   x: 2000,
  //   duration: 3,
  //   stagger: 3,
  //   repeat:Infinity
  // })
});


import { header } from "./components/header";
import { gsap } from "gsap";
import { mobSplider, desktopSplider, spliderWithArrows, historySplider } from "./components/sliders";
import { initRangeFunctional, initDropdown } from "./components/controls";
import { toggleFilters, toggleLists } from "./components/catalog";

document.addEventListener("DOMContentLoaded", () => {
  header();
  mobSplider('[data-mobile-slider]');
  desktopSplider('[data-slider-desktop]');
  spliderWithArrows('[data-slider]');
  historySplider('[data-slider-history]');
  
  initRangeFunctional('[data-range]');
  toggleFilters('[data-catalog-header]'); 
  toggleLists('[data-open-list]'); 
  initDropdown('[data-dropdown]'); 

  // gsap.from("[data-hero-slider]", {
  //   x: 2000,
  //   duration: 3,
  //   stagger: 3,
  //   repeat:Infinity
  // })

});
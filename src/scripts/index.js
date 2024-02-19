import { header } from "./components/header";
import { gsap } from "gsap";
import { mobSplider, desktopSplider, spliderWithArrows, historySplider, productSplider } from "./components/sliders";
import { initRangeFunctional, initDropdown } from "./components/controls";
import { toggleFilters, toggleLists } from "./components/catalog";
import { initTabs } from "./components/tabs";
import { initSideBar } from "./components/sidebar";
import { toggleCardList } from "./components/toggleCardsList";
import { matchImagesWithLinks } from "./components/matchImagesWithLinks";

document.addEventListener("DOMContentLoaded", () => {
  header();
  mobSplider('[data-mobile-slider]');
  desktopSplider('[data-slider-desktop]');
  spliderWithArrows('[data-slider]');
  historySplider('[data-slider-history]');
  productSplider('[data-slider-product]')
  
  initRangeFunctional('[data-range]');
  toggleFilters('[data-catalog-header]'); 
  toggleLists('[data-open-list]'); 
  initDropdown('[data-dropdown]'); 
  initTabs('[data-tabs]'); 
  initSideBar('[data-sidebar]');
  toggleCardList('[data-card]');
  matchImagesWithLinks('[data-matches]');

  // gsap.from("[data-hero-slider]", {
  //   x: 2000,
  //   duration: 3,
  //   stagger: 3,
  //   repeat:Infinity
  // })

});
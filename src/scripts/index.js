import { header } from "./components/header";
import { heroSplider, mobSplider, desktopSplider, spliderWithArrows, historySplider, productSplider, spliderWithArrowsDesktop, spliderVertical } from "./components/sliders";
import { initRangeFunctional, initDropdown } from "./components/controls";
import { toggleFilters, toggleLists } from "./components/catalog";
import { initTabs } from "./components/tabs";
import { initSideBar } from "./components/sidebar";
import { toggleCardList } from "./components/toggleCardsList";
import { matchImagesWithLinks } from "./components/matchImagesWithLinks";
import { switchPrice } from "./components/switchPrice";
import { appearAnimations } from "./components/appeareAnimations";

document.addEventListener("DOMContentLoaded", () => {
  header();
  heroSplider('[data-hero-slider]');
  mobSplider('[data-mobile-slider]');
  desktopSplider('[data-slider-desktop]');
  spliderWithArrows('[data-slider]');
  historySplider('[data-slider-history]');
  productSplider('[data-slider-product]');
  
  initRangeFunctional('[data-range]');
  toggleFilters('[data-catalog-header]'); 
  toggleLists('[data-open-list]'); 
  initDropdown('[data-dropdown]'); 
  initTabs('[data-tabs]'); 
  initSideBar('[data-sidebar]');
  toggleCardList('[data-card]');
  matchImagesWithLinks('[data-matches]');
  spliderWithArrowsDesktop('[data-slider-cards]')
  spliderVertical('[data-slider-vertical]');
  switchPrice('[data-product]'); 

  appearAnimations();
});


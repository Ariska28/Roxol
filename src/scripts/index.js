import { header } from "./components/header";
import { gsap } from "gsap";
import { mobSplider, desktopSplider, spliderWithArrows, historySplider, productSplider } from "./components/sliders";
import { initRangeFunctional, initDropdown } from "./components/controls";
import { toggleFilters, toggleLists } from "./components/catalog";
import { initTabs } from "./components/tabs";

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

  initSideBar()

  // gsap.from("[data-hero-slider]", {
  //   x: 2000,
  //   duration: 3,
  //   stagger: 3,
  //   repeat:Infinity
  // })

});

export function initSideBar() {
  const sidebars = document.querySelectorAll('[data-sidebar]');
  const openSidebarBtns = document.querySelectorAll('[data-sidebar-open]');

  sidebars.forEach((sidebar) => {
    openSidebarBtns.forEach((openSidebarBtn) => {
      const closeBtns = sidebar.querySelectorAll('[data-sidebar-close]');

      openSidebarBtn.addEventListener('click', () => {
        console.log("click")
        if(openSidebarBtn.getAttribute('data-sidebar-open') === sidebar.getAttribute('data-sidebar')) {
          sidebar.classList.add('is-open');
          document.body.classList.add('no-scroll');
        }
      })

      closeBtns.forEach((closeBtn) => {
        closeBtn.addEventListener("click", () => {
          sidebar.classList.remove('is-open');
          document.body.classList.remove('no-scroll');
        })
      })
    }) 
  })

}
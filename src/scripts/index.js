import { header } from "./components/header";
import { gsap } from "gsap";
import { mobSplider, desktopSplider, spliderWithArrows, historySplider, productSplider } from "./components/sliders";
import { initRangeFunctional, initDropdown } from "./components/controls";
import { toggleFilters, toggleLists } from "./components/catalog";
import { initTabs } from "./components/tabs";
import { initSideBar } from "./components/sidebar";

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

  // gsap.from("[data-hero-slider]", {
  //   x: 2000,
  //   duration: 3,
  //   stagger: 3,
  //   repeat:Infinity
  // })

});

export function toggleCardList(attr) {
  const cards = document.querySelectorAll(attr);

  cards.forEach((card) => {
    const openBtn = card.querySelector('[data-card-open]');
    const list = card.querySelector('[data-card-list]');
    const listLength = Array.from(list.querySelectorAll('li')).length;

    openBtn.querySelector('span').textContent = `${listLength}`;

    openBtn.addEventListener('mouseover', () => {
      setTimeout(() => {
        card.classList.add('is-open');
      }, 10)
    })

    list.addEventListener('mouseleave', () => {
      card.classList.remove('is-open');
    })

    window.addEventListener('click', function (e) {
      if (!list.contains(e.target)) {
          card.classList.remove('is-open');
      }
  });
  })
}
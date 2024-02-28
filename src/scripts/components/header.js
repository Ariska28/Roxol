export function header() {
  const headerDesktop = document.querySelector('[data-header]');
  const headerMob = document.querySelector('[data-header-mobile]');
  const burgerMob = headerMob?.querySelector('[data-header-mobile-burger]');
  const sublistsMob = headerMob?.querySelectorAll('[data-header-mobile-sublist]');
  const elementsForHiding = document?.querySelectorAll('[data-header-hide-mobile]');
  
  addStylesForHeadrScroll(headerDesktop);

  burgerMob?.addEventListener("click", ()=> {
    toggleMobileMenu(headerMob);

    document.body.classList.add("no-scroll");
    hideElementsOnMobile(elementsForHiding);

    if(!headerMob?.classList.contains("is-open")) {
      document.body.classList.remove("no-scroll");
      showHideElementsOnMobile(elementsForHiding);

      closeAllSubMenus(sublistsMob);
    }
  })

  sublistsMob?.forEach((subList) => {
    openSubMenu(subList);
    closeSubMenu(subList);
  })

  toggleDesktopSubMenus(headerDesktop);
}

function closeAllSubMenus(subMenusList) {
  subMenusList?.forEach((subList) => {
    subList?.classList.remove("is-open")
  })
}

function hideElementsOnMobile(elementsForHiding) {
  elementsForHiding?.forEach((elementForHiding) => {
    elementForHiding?.classList.add("is-hide")
  })
}

function showHideElementsOnMobile(elementsForHiding) {
  elementsForHiding?.forEach((elementForHiding) => {
    elementForHiding?.classList.remove("is-hide")
  })
}


function toggleMobileMenu(mobMenu) {
  mobMenu?.classList.toggle("is-open");
}

function openSubMenu(subMenu) {
  const subListOpenBtn = subMenu?.querySelector('[data-header-mobile-sublist-open]');
  
  subListOpenBtn.addEventListener("click", () => {
    subMenu?.classList.add("is-open")
  })
}

function closeSubMenu(subMenu) {
  const subListCloseBtn = subMenu?.querySelector('[data-header-mobile-sublist-close]');
  
  subListCloseBtn.addEventListener("click", () => {
    subMenu?.classList.remove("is-open")
  })
}

function toggleDesktopSubMenus(header) {
  const headerOpenContainers = header?.querySelectorAll('[data-header-open]');

  headerOpenContainers.forEach((container)=> {
    const headerOpenBtn = container?.querySelector('[data-header-open-btn]');
    const headerCloseBtn = container?.querySelectorAll('[data-header-close-btn]');

    headerOpenBtn?.addEventListener("click", () => {
      container.classList.toggle("is-open");
      document.body.classList.add("no-scroll");
    })

    headerCloseBtn?.forEach((closeBtn) => {
      closeBtn.addEventListener("click", () => {
        container.classList.remove("is-open");
        document.body.classList.remove("no-scroll");
      })
    })
  })
}

function addStylesForHeadrScroll(header) {
  let lastScrollTop = 0;
  window.onscroll = onScroll;

  function onScroll (e) {
    let top = window.pageYOffset;

    if(lastScrollTop > 1000) {
      header.classList.add('is-fixed');
    } else if (lastScrollTop < 900) {
      header.classList.remove('is-fixed');
    }

    if (lastScrollTop > top ) {
      header.style.transform = 'translateY(0)';

      if(lastScrollTop < 1000  && lastScrollTop > 900) {
        header.style.transform = 'translateY(-100%)';
      }
    } else {
      header.style.transform = 'translateY(-100%)';
    }
    lastScrollTop = top;
  }
}
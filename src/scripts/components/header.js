export function header() {
  const headerMob = document.querySelector('[data-header-mobile]');
  const burgerMob = headerMob?.querySelector('[data-header-mobile-burger]');
  const sublistsMob = headerMob?.querySelectorAll('[data-header-mobile-sublist]');
  
  burgerMob?.addEventListener("click", ()=> {
    toggleMobileMenu(headerMob);

    document.body.classList.add("no-scroll")

    if(!headerMob?.classList.contains("is-open")) {
      document.body.classList.remove("no-scroll");

      closeAllSubMenus(sublistsMob);
    }
  })

  sublistsMob?.forEach((subList) => {
    openSubMenu(subList);
    closeSubMenu(subList);
  })

  toggleDesktopSubMenus();
}

function closeAllSubMenus(subMenusList) {
  subMenusList?.forEach((subList) => {
    subList?.classList.remove("is-open")
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

function toggleDesktopSubMenus() {
  const header = document.querySelector('[data-header]');
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
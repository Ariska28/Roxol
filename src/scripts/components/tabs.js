export function initTabs(attr) {
  const tabsConainers = document.querySelectorAll(attr);

  tabsConainers.forEach((tabsConainer) => {
    const tabBtns = tabsConainer.querySelectorAll('[data-tabs-btn]');
    const tabContainers = tabsConainer.querySelectorAll('[data-tabs-container]');
  
    tabBtns.forEach((tabBtn) => {
      tabBtn.addEventListener("click", () => {
        tabBtns.forEach((tabBtn) => {
          tabBtn.classList.remove("is-active");
        });
  
        tabBtn.classList.add("is-active");
  
        tabContainers.forEach((tabContainer) => {
          console.log(tabContainer.getAttribute('data-tabs-container'))
          if (tabBtn.getAttribute('data-tabs-btn') === tabContainer.getAttribute('data-tabs-container')) {
            tabContainer.classList.add('is-active')
          } else {
            tabContainer.classList.remove('is-active')
          }
        }) 
      })
    })
  })
}
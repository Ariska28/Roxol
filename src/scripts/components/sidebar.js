export function initSideBar(attr) {
  const sidebars = document.querySelectorAll(attr);
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
export function toggleFilters(attr) {
  const catalogContainer = document.querySelectorAll(attr);
  catalogContainer.forEach((catalogContainerEl) => {
    const toggleFiltersBtn = catalogContainerEl.querySelector('[data-catalog-header-filters-btn]');

    toggleFiltersBtn.addEventListener("click", () => {
      toggleElememts(catalogContainerEl);
    })
  })
}

export function toggleLists(attr) {
  const openListContainer = document.querySelectorAll(attr);
  openListContainer.forEach((openListContainerEl) => {
    const openListBtn = openListContainerEl.querySelector('[data-open-list-btn]');
    const toggleListContainer = openListContainerEl.querySelector('[data-open-list-container]');
    const closeBtn = toggleListContainer.querySelector('[data-open-list-container-close]');

    openListBtn.addEventListener("click", () => {
      openListContainerEl.classList.toggle("is-open");
    })

    document.addEventListener("click", (e) => {
      const target = e.target;
      const its_menu = target == toggleListContainer || toggleListContainer.contains(target);
      const its_menu_btn = target == openListBtn; 

      if (!its_menu && openListContainerEl.classList.contains('is-open') && !its_menu_btn) {
        closeElememts(openListContainerEl);
      }
    });

    closeBtn.addEventListener("click", (e) => {
      closeElememts(openListContainerEl);
    })
  })
}

function openElememts(container) {
  container.classList.add("is-open");
}

function closeElememts(container) {
  container.classList.remove("is-open");
}

function toggleElememts(container) {
  container.classList.toggle("is-toggle");
}


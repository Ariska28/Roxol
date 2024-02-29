export function initRangeFunctional(attr) {
  let rangeMin = 1;
  const rangeContainers = document.querySelectorAll(attr);
  
  rangeContainers.forEach((rangeContainer) => {
    const range = rangeContainer.querySelector("[data-selected]");
    const rangeInput = rangeContainer.querySelectorAll("[data-range-inputs] input");
    const rangePrice = rangeContainer.querySelectorAll("[data-range-prices] input");
    
    rangeInput.forEach((input) => {
      input.addEventListener("input", (e) => {
        let minRange = parseInt(rangeInput[0].value);
        let maxRange = parseInt(rangeInput[1].value);
        console.log(maxRange, 'max')
        console.log(minRange, 'min')
        console.log(maxRange - minRange < rangeMin) 
        if (maxRange - minRange < rangeMin) {    
          if (e.target.className === "min") {
            rangeInput[0].value = maxRange - rangeMin;        
          } else {
            rangeInput[1].value = minRange + rangeMin;        
          }
        } else {
          rangePrice[0].value = minRange;
          rangePrice[1].value = maxRange;
          range.style.left = (minRange / rangeInput[0].max) * 100 + "%";
          range.style.right = 100 - (maxRange / rangeInput[1].max) * 100 + "%";
        }
      });
    });
    
    rangePrice.forEach((input) => {
      input.addEventListener("input", (e) => {
        let minPrice = rangePrice[0].value;
        let maxPrice = rangePrice[1].value;
        if (maxPrice - minPrice >= rangeMin && maxPrice <= rangeInput[1].max) {
          if (e.target.className === "min") {
            rangeInput[0].value = minPrice;
            range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
          } else {
            rangeInput[1].value = maxPrice;
            range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
          }
        }
      });
    });
  })
}

export function initDropdown(attr) {
  const dropdowns = document.querySelectorAll(attr);

  dropdowns.forEach((dropdown) => {
    const input = dropdown.querySelector('input');
    const listOfOptions = dropdown.querySelectorAll('[data-dropdown-option]');
    const body = document.body;
    
    const toggleDropdown = (event) => {
      event.stopPropagation();
      dropdown.classList.toggle('is-open');
    };
    
    const selectOption = (event) => {
      input.value = event.currentTarget.textContent;
    };
    
    const closeDropdownFromOutside = () => {
      if (dropdown.classList.contains('is-open')) {
        dropdown.classList.remove('is-open');
      }
    };
    
    body.addEventListener('click', closeDropdownFromOutside);
    
    listOfOptions.forEach((option) => {
      option.addEventListener('click', selectOption);
    });
    
    dropdown.addEventListener('click', toggleDropdown);
  })

}

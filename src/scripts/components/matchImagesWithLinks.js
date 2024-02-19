export function matchImagesWithLinks(attr) {
  const matchesContainers = document.querySelectorAll(attr);

  matchesContainers?.forEach((matchesContainer) => {
    const imagesForMatching = matchesContainer.querySelectorAll('[data-matches-img]');
    const itemsFormMatching = matchesContainer.querySelectorAll('[data-matches-item]');

    itemsFormMatching.forEach((item) => {
      imagesForMatching.forEach((image) => {
        item.addEventListener('mouseover', () => {
          if(item.getAttribute('data-matches-item') === image.getAttribute('data-matches-img')) {
            image.classList.add('is-visible');
          } else {
            image.classList.remove('is-visible');
          }
        })
      })
    })
  })
}
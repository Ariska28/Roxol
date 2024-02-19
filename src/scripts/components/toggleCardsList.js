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
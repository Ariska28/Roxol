export function switchPrice(attr) {
  const cards = document.querySelectorAll(attr);

  cards?.forEach((card) => {
    const btns = card.querySelectorAll('[data-product-price]');
    const price = card.querySelector('[data-product-text]');

    btns[0].classList.add('is-active');
    price.innerText = `${btns[0].getAttribute('data-product-price')}`;

    btns.forEach((btn) => {

      btn.addEventListener("click", (e) => {
        e.preventDefault();

        btns.forEach((btn) => {
          btn.classList.remove('is-active');
        })
        
        btn.classList.add('is-active');
        price.innerText = `${btn.getAttribute('data-product-price')}`;     
      })
    })
  })
}
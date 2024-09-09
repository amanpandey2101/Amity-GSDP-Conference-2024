

var swiper = new Swiper(".slide-content", {
slidesPerView: 3,
spaceBetween: 25,
loop: true,
centerSlide: true,
fade: true,
grabCursor: true,
pagination: {
  el: ".swiper-pagination",
  clickable: true,
  dynamicBullets: true,
},
navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
},
breakpoints: {
  0: {
    slidesPerView: 1,
  },
  678: {
    slidesPerView: 2,
  },
  1170: {
    slidesPerView: 3,
  },
},
});

// Event listeners for buttons
document.querySelectorAll('.button').forEach(button => {
button.addEventListener('pointerdown', (event) => {
  event.stopPropagation();
});
button.addEventListener('click', (event) => {
  event.preventDefault();
  var targetModal = event.currentTarget.getAttribute('data-bs-target');
  $(targetModal).modal('show');
});
});

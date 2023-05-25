const swiper = new Swiper("#mySwiper", {
  slidesPerView: 4,
  centeredSlides: false,
  slidesPerGroupSkip: 1,
  grabCursor: true,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    769: {
      slidesPerView: 4,
      slidesPerGroup: 2,
    },
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

$(document).ready(function () {
  var slider = $("#swipeProduct");

  slider.slick({
    slidesToShow: 4, // Jumlah kartu yang ditampilkan sekaligus
    slidesToScroll: 1, // Pergeseran awal (tidak digunakan)
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: null,
    nextArrow: null,
    variableWidth: true,
    swipe: true, // Aktifkan swipe
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesPerRow: 2, // Jumlah kartu yang digeser saat lebar layar kurang dari 768px
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesPerRow: 1, // Jumlah kartu yang digeser saat lebar layar kurang dari 480px
        },
      },
    ],
  });
});

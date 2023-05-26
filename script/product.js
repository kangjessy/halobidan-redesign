$(document).ready(function () {
  $("#swipeProduct").slick({
    slidesToShow: 3, // Jumlah card yang ditampilkan sekaligus
    slidesToScroll: 1, // Jumlah card yang digeser saat navigasi
    autoplay: true, // Otomatis memutar slider
    autoplaySpeed: 2000, // Kecepatan autoplay dalam milidetik
    responsive: [
      {
        breakpoint: 768, // Ubah tampilan saat lebar layar kurang dari 768px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // Ubah tampilan saat lebar layar kurang dari 480px
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

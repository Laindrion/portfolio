$(document).ready(function () {
  $(".portfolio__gallery").magnificPopup({
    delegate: "a",
    type: "image",
    tLoading: "Loading image #%curr%...",
    mainClass: "mfp-img-mobile",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
    },
  });

  // $(".portfolio__slider-inner").slick({
  //   infinite: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   prevArrow: $(".portfolio__slider-arrow__left"),
  //   nextArrow: $(".portfolio__slider-arrow__right"),
  // });

  let sidebar_btn = document.getElementsByClassName("burger__img");
  let nav_btn = document.getElementsByClassName("threedot__img");
  let sidebar = document.getElementsByClassName("sidebar");
  let navbar = document.getElementsByClassName("navbar");
  let close__sidebar = document.getElementsByClassName("close__sidebar");
  let close__navbar = document.getElementsByClassName("close__navbar");

  $(sidebar_btn).click(function () {
    $(sidebar).addClass("active");
  });

  $(close__sidebar).click(function () {
    $(sidebar).removeClass("active");
  });

  $(nav_btn).click(function () {
    $(navbar).addClass("active");
  });

  $(close__navbar).click(function () {
    $(navbar).removeClass("active");
  });
});

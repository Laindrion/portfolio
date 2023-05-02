fetch("./js/gallery.json")
  .then((response) => response.json())
  .then((data) => {
    var sliderHtml = '<div class="portfolio__slider-inner">';
    data.forEach((image) => {
      sliderHtml += `
                <div class="portfolio__slider-item">
                    <img src="${image.src}" alt="${image.alt}" data-src="${image.src}">
                </div>
        `;
    });
    sliderHtml += "</div>";

    document.querySelector(".portfolio__slider").innerHTML = sliderHtml;

    $(".portfolio__slider-inner").slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $(".portfolio__slider-arrow__left"),
      nextArrow: $(".portfolio__slider-arrow__right")
    });
  });

fetch("./js/gallery.json")
  .then((response) => response.json())
  .then((data) => {
    var galleryHtml = '<div class="portfolio__gallery-inner">';
    data.forEach((image) => {
      galleryHtml += `
                <a class="portfolio__gallery-item" href="${image.link}">
                    <img src="${image.src}" alt="${image.alt}" data-src="${image.src}">
                </a>
        `;
    });
    galleryHtml += "</div>";

    document.querySelector(".portfolio__gallery").innerHTML = galleryHtml;
  });

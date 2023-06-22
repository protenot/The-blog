import "./slider.scss";
import "./style.scss";

export function carouselPlugin(selector) {
  //this.element = selector;
  //this.element.classList.add('carousel');

  function moveOnClick(n) {
    //const activePhoto = document.querySelector(" #myCarousel [data-active]");
    //  const photos = [...document.querySelectorAll("#myCarousel .carousel__li")];
    const activePhoto = document.querySelector("[data-active]");
    const photos = [...document.querySelectorAll(".carusel__li")];

    const indexPhoto = photos.indexOf(activePhoto);
    let newIndex = indexPhoto + n;
    console.log(selector);
    console.log(photos);
    console.log(activePhoto);
    console.log(newIndex);
    if (newIndex < 0) {
      newIndex = photos.length - 1;
    }

    if (newIndex >= photos.length) {
      newIndex = 0;
    }

    if (activePhoto) {
      delete activePhoto.dataset.active;
    }

    if (photos[newIndex]) {
      photos[newIndex].dataset.active = true;
    }
  }

  const moveRight = function () {
    moveOnClick(1);
  };

  const moveLeft = function () {
    moveOnClick(-1);
  };

  // Public API
  return {
    moveRight: moveRight,
    moveLeft: moveLeft,
  };
}

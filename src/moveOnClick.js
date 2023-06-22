/*export function moveOnClick(n, selector) {
    const activePhoto = document.querySelector("[data-active]");
    const photos = [...document.querySelectorAll(".carusel__li")];
    console.log(photos)
    const indexPhoto = photos.indexOf(activePhoto);
    let newIndex = indexPhoto + n;
    if (newIndex < 0) {
      newIndex = photos.length - 1;
    }
    if (newIndex >= photos.length) {
      newIndex = 0;
    }
    photos[newIndex].dataset.active = true;
    delete activePhoto.dataset.active;
  }
  
  const moveRight = () => {
    moveOnClick(1);
  };
  const moveLeft = () => {
    moveOnClick(-1);
  };
  
  const nextButton = document.querySelector(".button-right");
  nextButton.addEventListener("click", function () {
    moveRight();
  });
  
  const prevButton = document.querySelector(".button-left");
  prevButton.addEventListener("click", function () {
    moveLeft();
  });
*/

/*
 export function carouselPlugin(selector) {
    const moveOnClick = function(n, selector) {
      const activePhoto = document.querySelector(`${selector} [data-active]`);
      const photos = [...document.querySelectorAll(`${selector} .carousel__li`)];
      const indexPhoto = photos.indexOf(activePhoto);
      let newIndex = indexPhoto + n;
      if (newIndex < 0) {
        newIndex = photos.length - 1;
      }
      if (newIndex >= photos.length) {
        newIndex = 0;
      }
      photos[newIndex].dataset.active = true;
      delete activePhoto.dataset.active;
    };
  
    const moveRight = function() {
      moveOnClick(1);
    };
  
    const moveLeft = function() {
      moveOnClick(-1);
    };
  
    const nextButton = document.querySelector(`${selector} .button-right`);
    nextButton.addEventListener("click", moveRight);
  
    const prevButton = document.querySelector(`${selector} .button-left`);
    prevButton.addEventListener("click", moveLeft);
  
    // Public API
    return {
      moveRight: moveRight,
      moveLeft: moveLeft
    };
  }
  
  // Usage of the plugin
  const myCarousel = carouselPlugin("#myCarousel");
  
  // Call the moveRight method
  myCarousel.moveRight();
  



*/

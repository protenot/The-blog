export function moveOnClick(n) {
  const activePhoto = document.querySelector("[data-active]");
  const photos = [...document.querySelectorAll(".carusel__li")];
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

const nextButton = document.getElementById("button-right");
nextButton.addEventListener("click", function () {
  moveRight();
});

const prevButton = document.getElementById("button-left");
prevButton.addEventListener("click", function () {
  moveLeft();
});

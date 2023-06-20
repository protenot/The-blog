import "./style.scss";

const moveOnClick = function (n) {
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
};

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

/*let slideIndex = 1;
let prev = document.querySelector(".prev");
prev.addEventListener("click", plusSlides(-1));
function plusSlides(n) {
  showSlides((slideIndex += n));
}
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.querySelectorAll("carusel__li");
  console.log(slides);
  let dots = document.querySelectorAll("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += "active";
}*/

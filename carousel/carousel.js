document.querySelector(".prev-btn").addEventListener("click", moveToPrevSlide);
document.querySelector(".next-btn").addEventListener("click", moveToNextSlide);
const slides = document.querySelectorAll(".carousel-item");

function hideAll() {
  for (let slide of slides) {
    slide.classList.remove("visible");
  }
}

const totalSlides = slides.length;
let cellNumber = 0;

function moveToPrevSlide() {
  hideAll();

  if (cellNumber === 0) {
    cellNumber = totalSlides-1;
  } else {
    cellNumber--;
  }
  console.log(cellNumber);
  slides[cellNumber].classList.add("visible");
}
function moveToNextSlide() {
  if (cellNumber === totalSlides-1) {
    cellNumber = 0;
  } else {
    cellNumber++;
  }
  hideAll();
  // console.log(cellNumber);
  slides[cellNumber].classList.add("visible");
}

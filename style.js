//  Hero Section Image Slider
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slider img");
  let currentIndex = 0;

  const changeSlide = () => {
    slides[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add("active");
  };

  // Change slide every 2 seconds
  setInterval(changeSlide, 2000);
});

const Logo = "./assets/svg/Logo.svg";
const AriseHealth = "./assets/svg/AriseHealth.svg";
const Ephicient = "./assets/svg/Ephicient.svg";
const INC = "./assets/svg/2020INC.svg";
const ThePaak = "./assets/svg/ThePaak.svg";
const Pipelinx = "./assets/svg/Pipelinx.svg";
const Together = "./assets/svg/Together.svg";

document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.getElementById("burgerMenu");
  const navbar = document.getElementById("navbar");

  burgerMenu.addEventListener("click", function () {
    navbar.classList.toggle("active");
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      navbar.classList.remove("active");
    }
  });
});

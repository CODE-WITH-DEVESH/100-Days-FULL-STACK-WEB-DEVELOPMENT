// Wait until DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const heroImg = document.querySelector("main img");
  const navLinks = document.querySelectorAll("header ul li a");

  // Add animation class when hero image is loaded
  if (heroImg) {
    if (heroImg.complete) {
      heroImg.classList.add("image-loaded");
    } else {
      heroImg.addEventListener("load", () => {
        heroImg.classList.add("image-loaded");
      });
    }
  }

  // Header shrink and shadow on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Small interaction: click animation on nav links
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      link.classList.add("nav-clicked");
      setTimeout(() => link.classList.remove("nav-clicked"), 200);
    });
  });
});

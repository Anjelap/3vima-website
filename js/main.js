/* =========================
   MOBILE NAV MENU
========================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
}

/* =========================
   HOME HERO CAROUSEL
========================= */

const slides = document.querySelectorAll(".carousel-slide");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.getElementById("carouselPrev");
const nextBtn = document.getElementById("carouselNext");

let currentSlide = 0;
let carouselTimer;

function showSlide(index) {
  if (!slides.length) return;

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  slides[index].classList.add("active");

  if (dots[index]) {
    dots[index].classList.add("active");
  }

  currentSlide = index;
}

function nextSlide() {
  let next = currentSlide + 1;

  if (next >= slides.length) {
    next = 0;
  }

  showSlide(next);
}

function prevSlide() {
  let prev = currentSlide - 1;

  if (prev < 0) {
    prev = slides.length - 1;
  }

  showSlide(prev);
}

function startCarousel() {
  carouselTimer = setInterval(nextSlide, 6000);
}

function resetCarouselTimer() {
  clearInterval(carouselTimer);
  startCarousel();
}

if (slides.length > 0) {
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      nextSlide();
      resetCarouselTimer();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      prevSlide();
      resetCarouselTimer();
    });
  }

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const slideIndex = Number(dot.dataset.slide);
      showSlide(slideIndex);
      resetCarouselTimer();
    });
  });

  startCarousel();
}

/* =========================
   SCROLL REVEAL / SLIDE-IN
========================= */

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 90) {
      element.classList.add("show");
    }
  });
}

if (revealElements.length > 0) {
  window.addEventListener("scroll", revealOnScroll);
  window.addEventListener("load", revealOnScroll);
  revealOnScroll();
}

/* =========================
   WHY 3VIMA TABS
   Only works if old tab layout exists
========================= */

const whyTabs = document.querySelectorAll(".why-tab");
const whyContents = document.querySelectorAll(".why-content");

if (whyTabs.length > 0 && whyContents.length > 0) {
  whyTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const targetId = tab.dataset.tab;

      whyTabs.forEach((item) => {
        item.classList.remove("active");
      });

      whyContents.forEach((content) => {
        content.classList.remove("active");
      });

      tab.classList.add("active");

      const targetContent = document.getElementById(targetId);

      if (targetContent) {
        targetContent.classList.add("active");
      }
    });
  });
}
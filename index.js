// Intersection Observer for .Website_Solution
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate"); // animation class add
      observer.unobserve(entry.target); // ek hi bar run karna hai
    }
  });
});

// sab .Website_Solution elements observe karo
document.querySelectorAll(".Website_Solution").forEach(el => {
  observer.observe(el);
});
// Intersection Observer for .Website_SolutionF


//  Slider ==============



// FAQ accordion toggle
// FAQ accordion toggle (single open)
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".faq-item");

  items.forEach(item => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      // sabse pehle dusre open items band karo
      items.forEach(i => {
        if (i !== item) {

          i.classList.remove("active");
        }
      });

      // current item toggle karo
      item.classList.toggle("active");
    });
  });
});


// REVIEW

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1024: { slidesPerView: 4 },
    768: { slidesPerView: 2 },
    480: { slidesPerView: 1 },
    425: { slidesPerView: 1 }
  },
});



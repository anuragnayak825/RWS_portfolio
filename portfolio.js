// script.js
import { portfolioItems } from "./data.js";

// Container
const container = document.getElementById("portfolio-container");

// Render Function
function renderPortfolio(items) {

  if (items.category == "All") {
    const items = items.filter(it => it.category == "All")
    container.innerHTML = "";
    items.forEach(item => {
      // console.log(item)
      container.innerHTML += `
      <div class="portfolio-item" data-category="${item.category}">
        <img src="${item.img}" alt="${item.title}">
        <div class="overlay">
          <a href="${item.link}" target="_blank">🔗</a>
        </div>
      </div>
    `;
    });
  }
  container.innerHTML = "";
  items.forEach(item => {
    // console.log(item)
    container.innerHTML += `
      <div class="portfolio-item" data-category="${item.category}">
        <img src="${item.img}" alt="${item.title}">
        <div class="overlay">
          <a href="${item.link}" target="_blank">🔗</a>
        </div>
      </div>
    `;
  });
}


renderPortfolio(portfolioItems.filter(it => it.category == "All"));

// Filter Function
function filterPortfolio(category, event) {
  const buttons = document.querySelectorAll('.filter-btns button');

  // Active Button
  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  // Filter Data
  if (category === 'all') {
    const filtered = portfolioItems.filter(item => item.category === "All");
    console.log(filtered)
    renderPortfolio(filtered);
  } else {
    const filtered = portfolioItems.filter(item => item.category === category);
    renderPortfolio(filtered);
  }
}

// 👇 Make filter function global for onclick buttons
window.filterPortfolio = filterPortfolio;

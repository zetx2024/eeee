  async function loadReviewsAndFlags() {
    const [reviews, flags] = await Promise.all([
      fetch('https://yrjournal.org/reviews.json').then(res => res.json()),
      fetch('https://yrjournal.org/flags.json').then(res => res.json())
    ]);

    const container = document.getElementById("reviews-container");

    reviews.forEach(review => {
      const stars = "★".repeat(review.rating) + "☆".repeat(5 - review.rating);
      const flagSVG = flags[review.country] || "";

      const slide = document.createElement("div");
      slide.className = "swiper-slide";
      slide.innerHTML = `
        <div class="review-card">
          <img src="${review.image}" alt="${review.name}" class="reviewer-img" />
          <h5>${review.name}</h5>
          <p class="review-meta">
            ${review.institution}<br>
            ${review.grade} – ${review.year}<br>
            <span class="review-result">${review.cohort}</span>
          </p>
          <div class="review-stars">${stars}</div>
          <div class="review-country">${review.country} ${flagSVG}</div>
          <div class="review-content">"${review.review}"</div>
        </div>
      `;
      container.appendChild(slide);
    });

    new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }
    });
  }

  document.addEventListener("DOMContentLoaded", loadReviewsAndFlags);

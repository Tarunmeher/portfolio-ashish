// GALLERY FILTER
function filterGallery(category) {
  const items = document.querySelectorAll(".gallery-item");
  items.forEach(item => {
    if (category === "all" || item.classList.contains(category)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

// TESTIMONIAL SLIDER
let testimonials = document.querySelectorAll(".testimonial");
let index = 0;

function showTestimonial() {
  testimonials.forEach(t => t.classList.remove("active"));
  testimonials[index].classList.add("active");
  index = (index + 1) % testimonials.length;
}

setInterval(showTestimonial, 3000);



const toggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

toggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

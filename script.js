// Mobile menu toggle

document.querySelector(".hamburger").addEventListener("click", () => {

  document.querySelector(".nav-links").classList.toggle("active");

});

// Dark mode toggle

document.querySelector(".theme-toggle").addEventListener("click", () => {

  document.body.classList.toggle("dark-mode");

});

// Contact form validation

document.getElementById("contactForm").addEventListener("submit", function(e){

  e.preventDefault();

  let email = document.getElementById("email").value;

  let regex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

  if (!regex.test(email)) {

    alert("Enter a valid email!");

    return;

  }

  alert("Thank you! Your message has been sent.");

});

// Scroll animations

const animated = document.querySelectorAll(".animate");

const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.classList.add("visible");

    }

  });

}, { threshold: 0.2 });

animated.forEach(section => observer.observe(section));
// Hamburger menu toggle for mobile
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});


// ======= COURSE FILTERING =======
const filterBtns = document.querySelectorAll('.filter-btn');
const courseCards = document.querySelectorAll('.course-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove 'active' class from all
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const category = btn.getAttribute('data-category');

    courseCards.forEach(card => {
      const cardCat = card.getAttribute('data-category');
      if (category === 'all' || category === cardCat) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});


// ==== Student Review Slider ====
const reviews = document.querySelectorAll('.review');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentReview = 0;

function showReview(index) {
  reviews.forEach((rev, i) => {
    rev.classList.remove('active');
    if (i === index) {
      rev.classList.add('active');
    }
  });
}

nextBtn.addEventListener('click', () => {
  currentReview = (currentReview + 1) % reviews.length;
  showReview(currentReview);
});

prevBtn.addEventListener('click', () => {
  currentReview = (currentReview - 1 + reviews.length) % reviews.length;
  showReview(currentReview);
});


// === Live Class Countdown ===
const targetDate = new Date("2025-07-15T18:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const gap = targetDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const d = Math.floor(gap / day);
  const h = Math.floor((gap % day) / hour);
  const m = Math.floor((gap % hour) / minute);
  const s = Math.floor((gap % minute) / second);

  document.getElementById("days").innerText = d < 10 ? `0${d}` : d;
  document.getElementById("hours").innerText = h < 10 ? `0${h}` : h;
  document.getElementById("minutes").innerText = m < 10 ? `0${m}` : m;
  document.getElementById("seconds").innerText = s < 10 ? `0${s}` : s;
}

setInterval(updateCountdown, 1000);


// === Modal Popup Logic ===
const enrollBtn = document.getElementById("enrollBtn");
const enrollModal = document.getElementById("enrollModal");
const closeModal = document.querySelector(".close");

// Show Modal
enrollBtn.addEventListener("click", () => {
  enrollModal.style.display = "flex";
});

// Close Modal by (X) button
closeModal.addEventListener("click", () => {
  enrollModal.style.display = "none";
});

// Close Modal if clicked outside
window.addEventListener("click", (e) => {
  if (e.target === enrollModal) {
    enrollModal.style.display = "none";
  }
});

// Optional: Form Submission popup
document.getElementById("enrollForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("✅ Successfully Enrolled!");
  enrollModal.style.display = "none";
});

// Clear form data each time modal opens
document.getElementById("enrollBtn").addEventListener("click", () => {
  const form = document.getElementById("enrollForm");
  form.reset();
});


// FAQ Accordion Logic
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;

    // Close all other open answers
    document.querySelectorAll(".faq-answer").forEach((item) => {
      if (item !== answer) {
        item.style.maxHeight = null;
      }
    });

    // Toggle current
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});


// Contact Form Submission Alert
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("✅ Your message has been sent successfully!");
  this.reset();
});


// Newsletter Form Submission
document.getElementById("newsletterForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("🎉 You’ve successfully subscribed to our newsletter!");
  this.reset();
});


// Navbar Scroll Active State
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links li a');

  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});







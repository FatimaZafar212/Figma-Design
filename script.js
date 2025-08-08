// ====== Hero Slider (Landing Section) ======
const sliderData = [
  {
    title: "Startup3",
    heading: "Forget About Code",
    text: "Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding."
  },
  {
    title: "Startup Tools",
    heading: "Create with Ease",
    text: "Our startup tools help you design modern websites quickly. No coding required, just point-and-click to build your project."
  },
  {
    title: "Build Apps",
    heading: "Stop Writing HTML",
    text: "We provide everything you need for your app. With Startup Framework, you can focus on ideas while we handle the UI/UX."
  },
  {
    title: "Fully Coded",
    heading: "At Your Fingertips",
    text: "The most important part of the Startup Framework is the samples. The samples form a set of usable pages you can use or modify."
  }
];

const slideTitle = document.querySelector('.landingcontent h3');
const slideHeading = document.querySelector('.landingcontent h1');
const slideText = document.querySelector('.landingcontent p');
const dots = document.querySelectorAll('.landingcontent .dot');
const prevArrow = document.querySelector('.landing .arrow-left');
const nextArrow = document.querySelector('.landing .arrow-right');
let currentSlide = 0;

// Function to update slider content and active dot
function showSlide(index) {
  // Wrap around if index is outside range
  if (index < 0) { index = sliderData.length - 1; }
  if (index >= sliderData.length) { index = 0; }
  currentSlide = index;
  // Update text content
  if (slideTitle) slideTitle.textContent = sliderData[index].title;
  if (slideHeading) slideHeading.textContent = sliderData[index].heading;
  if (slideText) slideText.textContent = sliderData[index].text;
  // Update active dot
  dots.forEach(dot => dot.classList.remove('active'));
  if (dots[index]) dots[index].classList.add('active');
}

// Initialize slider
showSlide(currentSlide);

// Arrow button event listeners
if (prevArrow) prevArrow.addEventListener('click', () => {
  showSlide(currentSlide - 1);
});
if (nextArrow) nextArrow.addEventListener('click', () => {
  showSlide(currentSlide + 1);
});

// Dot navigation
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    showSlide(index);
  });
});

// Auto-play with pause on hover
let autoPlay = setInterval(() => showSlide(currentSlide + 1), 6000);
const landingEl = document.querySelector('.landing');
if (landingEl) {
  landingEl.addEventListener('mouseenter', () => clearInterval(autoPlay));
  landingEl.addEventListener('mouseleave', () => {
    clearInterval(autoPlay);
    autoPlay = setInterval(() => showSlide(currentSlide + 1), 6000);
  });
}

// ====== Sign Up / Login Tab Toggle ======
const tabs = document.querySelectorAll('.form-tabs span');
const primaryButton = document.querySelector('.primary-btn');

tabs.forEach(tab => {
  tab.addEventListener('click', function() {
    // Remove 'active' from all tabs, then add to clicked tab
    tabs.forEach(t => t.classList.remove('active'));
    this.classList.add('active');

    // Change the primary button text based on active tab
    if (this.textContent.trim().toLowerCase() === 'login') {
      primaryButton.textContent = 'Login';
    } else {
      primaryButton.textContent = 'Create an Account';
    }
  });
});

// ====== Active Navigation on Scroll ======
const navLinks = document.querySelectorAll('.navbar .nav-link');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  let scrollY = window.pageYOffset;

  sections.forEach(section => {
    if (!section.id) return; // skip if section has no ID
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    // Check if current scroll position is within this section
    if (scrollY >= sectionTop - 60 && scrollY < sectionTop + sectionHeight) {
      // Add 'active' to the corresponding nav link
      const activeLink = document.querySelector(`.navbar .nav-link[href="#${section.id}"]`);
      if (activeLink) {
        navLinks.forEach(link => link.classList.remove('active'));
        activeLink.classList.add('active');
      }
    }
  });
});

// ====== Contact Form Submission ======
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you! Your message has been sent.');
  });
}

// ====== Small resize safety: ensure hero doesn't overflow if fonts change ======
window.addEventListener('resize', () => {
  // nothing destructive — just a safety hook; kept intentionally minimal
});
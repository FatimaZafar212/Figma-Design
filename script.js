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

function showSlide(index) {
  if (index < 0) index = sliderData.length - 1;
  if (index >= sliderData.length) index = 0;
  currentSlide = index;

  slideTitle.textContent = sliderData[index].title;
  slideHeading.textContent = sliderData[index].heading;
  slideText.textContent = sliderData[index].text;

  dots.forEach(dot => dot.classList.remove('active'));
  if (dots[index]) dots[index].classList.add('active');
}

showSlide(currentSlide);

if (prevArrow) prevArrow.addEventListener('click', () => showSlide(currentSlide - 1));
if (nextArrow) nextArrow.addEventListener('click', () => showSlide(currentSlide + 1));

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => showSlide(index));
});
(function() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  const toggleClass = () => {
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  toggleClass();
  window.addEventListener('scroll', toggleClass);
})();

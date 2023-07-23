// VARIABLES
const burgerMenu = document.querySelector('.icon-hamburger');
const mobileMenu = document.querySelector('.menu-overlay');
const closeMenu = document.querySelector('.close');
const navbar = document.querySelector('.navbar');

// EVENTS
burgerMenu.addEventListener('click', mobileShow);
closeMenu.addEventListener('click', mobileHide);
window.addEventListener('scroll', isScrolling);

// FUNCTIONS
function mobileShow() {
  mobileMenu.classList.add('open-menu')
}

function mobileHide() {
  mobileMenu.classList.remove('open-menu')
}

function isScrolling() {
  let scroll = window.scrollY 

  if(scroll >= 50) {
    navbar.classList.add('is-scroll')
  } else {
    navbar.classList.remove('is-scroll')
  }

  console.log(scroll)
}


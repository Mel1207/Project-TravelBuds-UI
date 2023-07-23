const burgerMenu = document.querySelector('.icon-hamburger');
const mobileMenu = document.querySelector('.menu-overlay');
const closeMenu = document.querySelector('.close');


burgerMenu.addEventListener('click', mobileShow);
closeMenu.addEventListener('click', mobileHide);

function mobileShow() {
  mobileMenu.classList.add('open-menu')
}

function mobileHide() {
  mobileMenu.classList.remove('open-menu')
}
'use strict';
const headerFormBlock = document.querySelector('.header-form-block');
const headerForm = document.querySelector('.header-form');
headerFormBlock.addEventListener('click', () => {
  headerForm.classList.toggle('open');
});
$('.slider-container').slick({
  dots: true,
  infinite: true,
  arrows: false,
  speed: 500,
  fade: true,
  cssEase: 'linear',
});
// const activePage = window.location.pathname;
// console.log(activePage);
// const navLink = document.querySelectorAll('.nav-item a');

// navLink.forEach((link) => {
//   if (link.href.includes(`${activePage}`)) {
//     link.classList.add('link-active');
//   }
// });

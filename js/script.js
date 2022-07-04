'use strict';
const headerFormBlock = document.querySelector('.header-form-block');
const headerForm = document.querySelector('.header-form');
const hero__img = document.querySelectorAll('.img-mobile');

const mobile = window.innerWidth;

const heroImages = [
  'https://cdn.pixabay.com/photo/2022/04/18/15/38/poppies-7140807__340.jpg',
  'https://cdn.pixabay.com/photo/2022/06/19/07/12/mount-kilimanjaro-7271184__340.jpg',
];

//check mobile view slider

if (mobile <= 576) {
  hero__img.forEach((img, i) => {
    img.src = `${heroImages[i]}`;
  });
}

// Header form
headerFormBlock.addEventListener('click', () => {
  headerForm.classList.toggle('open');
});

document.querySelector('.close-btn').addEventListener('click', () => {
  headerForm.classList.toggle('open');
});

const tl = gsap.timeline({ defaults: { ease: 'power.out' } });
tl.fromTo(
  '.slider-container',
  { scale: 0, ease: Power2.easeInOut },
  { scale: 1, duration: 2.5, ease: Power2.easeInOut }
);
gsap.from('header', { duration: 2, y: '-100%', ease: Power2.easeInOut });
gsap.from('.nav-custom__logo', {
  duration: 4,
  x: '-170%',
  ease: Power2.easeInOut,
});
gsap.from('.animate-nav-content', {
  duration: 4.5,
  x: '180%',
  ease: Power2.easeInOut,
});

$('.slider-container').slick({
  dots: true,
  infinite: true,
  arrows: false,
  autoplay: true,
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

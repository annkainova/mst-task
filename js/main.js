import { initCarousel } from './carousel.js';
import { initScrollAnimation } from './scroll-animation.js';
import { initHeaderScroll } from './scroll-animation.js';

document.addEventListener('DOMContentLoaded', () => {
  initCarousel();
  initScrollAnimation();
  initHeaderScroll();
});

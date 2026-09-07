(function () {
  'use strict';

  /* Header com sombra ao rolar */
  var header = document.querySelector('.header');
  function onScroll() {
    if (window.scrollY > 8) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Menu mobile */
  var toggle = document.querySelector('.header__toggle');
  var mobileMenu = document.querySelector('.mobile-menu');
  var mobileLinks = document.querySelectorAll('.mobile-menu__link');

  function openMenu() {
    mobileMenu.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    mobileMenu.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
  if (toggle && mobileMenu) {
    toggle.addEventListener('click', function () {
      var isOpen = mobileMenu.classList.contains('is-open');
      if (isOpen) { closeMenu(); } else { openMenu(); }
    });
    mobileLinks.forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { closeMenu(); }
    });
  }

  /* Ano dinâmico no footer */
  var yearEl = document.getElementById('currentYear');
  if (yearEl) { yearEl.textContent = new Date().getFullYear(); }

  /* Reveal on scroll (respeita prefers-reduced-motion via CSS) */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* Navegação ativa por seção (desktop) */
  var sections = document.querySelectorAll('main section[id]');
  var navLinks = document.querySelectorAll('.nav__link');
  if ('IntersectionObserver' in window && sections.length) {
    var navIo = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.getAttribute('id');
          navLinks.forEach(function (link) {
            link.classList.toggle('is-active', link.getAttribute('href') === '#' + id);
          });
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    sections.forEach(function (s) { navIo.observe(s); });
  }
})();

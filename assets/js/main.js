document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle (if not already present)
  var toggles = document.querySelectorAll('.mobile-nav-toggle');
  toggles.forEach(function (t) {
    t.addEventListener('click', function () {
      var nav = document.getElementById('navmenu');
      if (!nav) return;
      nav.classList.toggle('active');
      t.classList.toggle('bi-list');
      t.classList.toggle('bi-x');
    });
  });

  // Safe initialize AOS (if present)
  if (typeof AOS !== 'undefined' && AOS && typeof AOS.init === 'function') {
    try {
      AOS.init();
    } catch (e) {
      console.warn('AOS init failed', e);
    }
  }

  // Safe initialize glightbox (if present)
  if (typeof GLightbox !== 'undefined' && typeof GLightbox === 'function') {
    try {
      GLightbox();
    } catch (e) {
      console.warn('GLightbox init failed', e);
    }
  }

  // Safe initialize Swiper (if present)
  if (typeof Swiper !== 'undefined') {
    try {
      new Swiper('.swiper', {
        loop: true
      });
    } catch (e) {
      console.warn('Swiper init failed', e);
    }
  }
});

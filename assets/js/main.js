(function () {
  var root = document.documentElement;
  var darkQuery = matchMedia('(prefers-color-scheme: dark)');

  // ---- Theme toggle: flips light/dark and remembers the choice ----
  var toggle = document.getElementById('theme-toggle');
  var currentTheme = function () {
    return root.dataset.theme || (darkQuery.matches ? 'dark' : 'light');
  };
  var labelToggle = function () {
    if (!toggle) return;
    var label = currentTheme() === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
    toggle.setAttribute('aria-label', label);
    toggle.title = label;
  };
  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      root.dataset.theme = next;
      try { localStorage.setItem('theme', next); } catch (e) {}
      labelToggle();
    });
    labelToggle();
    if (darkQuery.addEventListener) darkQuery.addEventListener('change', labelToggle);
  }

  // ---- Mobile menu ----
  var menuBtn = document.getElementById('menu-toggle');
  var nav = document.getElementById('site-nav');
  if (menuBtn && nav) {
    var isOpen = function () { return nav.classList.contains('open'); };
    var setOpen = function (open) {
      nav.classList.toggle('open', open);
      menuBtn.setAttribute('aria-expanded', String(open));
      menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    };
    menuBtn.addEventListener('click', function () { setOpen(!isOpen()); });
    nav.addEventListener('click', function (e) { if (e.target.closest('a')) setOpen(false); });
    // Close when tapping anywhere outside the menu
    document.addEventListener('click', function (e) {
      if (isOpen() && !nav.contains(e.target) && !menuBtn.contains(e.target)) setOpen(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && isOpen()) { setOpen(false); menuBtn.focus(); }
    });
    // Reset if the window grows back to desktop size
    matchMedia('(min-width: 761px)').addEventListener('change', function (e) { if (e.matches) setOpen(false); });
  }

  // ---- Header border + back-to-top button once the page scrolls ----
  var header = document.querySelector('.site-header');
  var toTop = document.getElementById('to-top');
  var onScroll = function () {
    var y = window.scrollY;
    header.classList.toggle('scrolled', y > 8);
    if (toTop) toTop.classList.toggle('show', y > window.innerHeight * 1.2);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  if (toTop) {
    toTop.addEventListener('click', function () {
      window.scrollTo({ top: 0 });
      var brand = document.querySelector('.brand');
      if (brand) brand.focus({ preventScroll: true });
    });
  }

  // ---- Copy email button ----
  document.querySelectorAll('[data-copy]').forEach(function (btn) {
    var label = btn.querySelector('span');
    var original = label ? label.textContent : '';
    var timer;
    btn.addEventListener('click', function () {
      var text = btn.getAttribute('data-copy');
      var done = function (ok) {
        if (label) label.textContent = ok ? 'Copied!' : 'Press Ctrl+C';
        btn.classList.toggle('copied', ok);
        clearTimeout(timer);
        timer = setTimeout(function () {
          if (label) label.textContent = original;
          btn.classList.remove('copied');
        }, 2000);
      };
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(function () { done(true); }, function () { done(false); });
      } else {
        // Fallback: select the address so it can be copied by hand
        var addr = document.querySelector('.email-address');
        if (addr) {
          var range = document.createRange();
          range.selectNodeContents(addr);
          var sel = getSelection(); sel.removeAllRanges(); sel.addRange(range);
          done(document.execCommand && document.execCommand('copy'));
        }
      }
    });
  });

  // ---- Highlight the nav link for the section in view (home page) ----
  var spyLinks = document.querySelectorAll('.site-nav [data-spy]');
  var sections = [];
  spyLinks.forEach(function (a) {
    var el = document.getElementById(a.getAttribute('data-spy'));
    if (el) sections.push({ link: a, el: el });
  });
  if (sections.length && 'IntersectionObserver' in window) {
    var visible = new Set();
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) visible.add(en.target); else visible.delete(en.target);
      });
      var current = null;
      sections.forEach(function (s) { if (visible.has(s.el)) current = current || s; });
      sections.forEach(function (s) { s.link.classList.toggle('active', s === current); });
    }, { rootMargin: '-35% 0px -55% 0px' });
    sections.forEach(function (s) { spy.observe(s.el); });
  }
})();

/* Julian Buscher — Motion layer
   Cross-document View Transitions (shared media + title),
   image fade-in, focus handoff. No dependencies. Degrades to no animation. */
(function () {
  var NAME_MEDIA = 'vt-media';
  var NAME_TITLE = 'vt-title';
  var KEY = 'jb:vt-from';
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  var supported = typeof document.startViewTransition === 'function';
  var focusStop = false;
  ['pointerdown', 'keydown'].forEach(function (t) {
    window.addEventListener(t, function () { focusStop = true; }, { once: true, passive: true, capture: true });
  });
  document.addEventListener('focusin', function (e) {
    var h1 = document.querySelector('h1');
    if (e.target && e.target !== h1 && e.target !== document.body) focusStop = true;
  }, true);
  function maybeFocus(h1) {
    if (focusStop || !supported || !h1) return;
    var a = document.activeElement;
    if (a && a !== document.body && a !== document.documentElement) return;
    try { h1.focus({ preventScroll: true }); } catch (e) {}
  }

  function isHome() { return !!document.querySelector('a[href*="Projekt"][href$=".dc.html"] h3'); }
  function fileOf(url) {
    if (!url) return '';
    try { return new URL(url, location.href).pathname.split('/').pop(); }
    catch (e) { return String(url).split('/').pop().split('#')[0]; }
  }
  function tileFor(url) {
    var f = fileOf(url);
    if (!f || f.indexOf('Projekt') !== 0) return null;
    var links = document.querySelectorAll('a[href$=".dc.html"]');
    for (var i = 0; i < links.length; i++) {
      if (fileOf(links[i].getAttribute('href')) === f && links[i].querySelector('h3')) return links[i];
    }
    return null;
  }
  function clearNames() {
    var tagged = document.querySelectorAll('[data-vt-tagged]');
    for (var i = 0; i < tagged.length; i++) {
      tagged[i].style.viewTransitionName = '';
      tagged[i].removeAttribute('data-vt-tagged');
    }
  }
  function tag(el, name) {
    if (!el || reduced.matches) return false;
    if (el.style.viewTransitionName !== name) el.style.viewTransitionName = name;
    el.setAttribute('data-vt-tagged', '');
    return true;
  }
  function tagTile(a) {
    clearNames();
    if (!a) return;
    tag(a.firstElementChild, NAME_MEDIA);
    tag(a.querySelector('h3'), NAME_TITLE);
  }
  function detailMedia() {
    return document.querySelector('img[src*="hero"]') ||
           document.querySelector('[style*="aspect-ratio:16 / 9"]');
  }
  /* Idempotent: safe to call on every mutation, before every snapshot. */
  function applyDetail() {
    var media = detailMedia();
    var h1 = document.querySelector('h1');
    if (!media && !h1) return false;
    tag(media, NAME_MEDIA);
    tag(h1, NAME_TITLE);
    if (h1) {
      if (h1.getAttribute('tabindex') === null) { h1.setAttribute('tabindex', '-1'); h1.style.outline = 'none'; }
      maybeFocus(h1);
    }
    return true;
  }

  /* --- outgoing: tag right before the snapshot, both directions --- */
  function quiet(vt) {
    if (!vt) return;
    if (vt.ready && vt.ready.catch) vt.ready.catch(function () {});
    if (vt.finished && vt.finished.catch) vt.finished.catch(function () {});
    if (vt.updateCallbackDone && vt.updateCallbackDone.catch) vt.updateCallbackDone.catch(function () {});
  }

  window.addEventListener('pageswap', function (e) {
    quiet(e.viewTransition);
    if (!e.viewTransition) return;
    if (isHome()) {
      var to = e.activation && e.activation.entry && e.activation.entry.url;
      try { sessionStorage.setItem(KEY, fileOf(to)); } catch (err) {}
      tagTile(tileFor(to));
    } else {
      applyDetail();
    }
  });

  /* --- incoming --- */
  window.addEventListener('pagereveal', function (e) {
    quiet(e.viewTransition);
    if (!e.viewTransition) return;
    if (isHome()) {
      var from = '';
      try { from = (window.navigation && navigation.activation && navigation.activation.from && navigation.activation.from.url) || ''; } catch (err) {}
      if (!from) { try { from = sessionStorage.getItem(KEY) || ''; } catch (err) {} }
      tagTile(tileFor(from));
    } else {
      applyDetail();
    }
  });

  /* --- keep tags alive across DC renders --- */
  function watch() {
    if (isHome()) return;
    applyDetail();
    if (!('MutationObserver' in window)) return;
    var pending = false;
    var mo = new MutationObserver(function () {
      if (pending) return;
      pending = true;
      setTimeout(function () { pending = false; applyDetail(); }, 32);
    });
    mo.observe(document.body, { childList: true, subtree: true });
    setTimeout(function () { mo.disconnect(); applyDetail(); }, 8000);
  }

  var booted = false;
  function boot() {
    applyDetail();
    fadeImages();
    if (booted) return;
    booted = true;
    watch();
    if (!isHome()) maybeFocus(document.querySelector('h1'));
  }
  boot();
  setTimeout(boot, 0);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  window.addEventListener('load', boot);

  /* --- images: fade in instead of popping --- */
  function fadeImages() {
    var imgs = document.querySelectorAll('img:not([data-jb-fade])');
    for (var i = 0; i < imgs.length; i++) {
      (function (img) {
        img.setAttribute('data-jb-fade', '');
        if (img.complete && img.naturalWidth) return;
        img.style.opacity = '0';
        img.style.transition = 'opacity 400ms cubic-bezier(0.32,0.72,0,1), transform 200ms ease-out';
        var show = function () { img.style.opacity = '1'; };
        img.addEventListener('load', show, { once: true });
        img.addEventListener('error', show, { once: true });
        setTimeout(show, 3000);
      })(imgs[i]);
    }
  }

})();

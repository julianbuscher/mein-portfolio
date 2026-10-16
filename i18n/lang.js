/* Julian Buscher — Sprachschicht DE/EN.
   Eine Implementierung für alle Seiten. Wird im <helmet> jeder Seite geladen,
   läuft vor dem ersten Paint des Bodys, kein Build-Schritt, kein Server.

   Reihenfolge der Quellen: ?lang=  >  localStorage  >  de
   Sichtbarkeit läuft über CSS auf html[lang], nicht über Inline-Styles:
   deshalb flackert nichts und DC-Re-Renders können nichts überschreiben.

   Markup-Vertrag:
   - Textpaare:   <span data-lang="de">…</span><span data-lang="en">…</span>
   - Umschalter:  <button data-lang-switch="de">DE</button> (Styling per CSS unten)
   - Alt-Texte:   <img alt="deutsch" data-alt-en="english">
   - Grafiken:    <img src="plot.png" data-src-en="plot-en.png"> — für Plots mit
     eingebranntem Text. Fehlt die englische Datei, bleibt still die deutsche stehen.
   - Interne Links bekommen automatisch ?lang= angehängt, damit die Sprache auch
     ohne localStorage über Seitenwechsel, neue Tabs und geteilte Links trägt.
   - Kopfdaten:   <meta name="jb-title-de|-en" content="…">
                  <meta name="jb-description-de|-en" content="…">
     Beide Sprachen stehen deklarativ im Markup — kein Runtime-Snapshot, der
     während des Helmet-Streams ins Leere greifen kann.
     OG-/Twitter-Tags bleiben bewusst unangetastet (Crawler lesen sie ohne JS). */
(function () {
  var KEY = 'jb-site-lang';
  var FALLBACK = 'de';

  function norm(v) { return v === 'en' ? 'en' : v === 'de' ? 'de' : null; }

  function fromUrl() {
    try { return norm(new URLSearchParams(location.search).get('lang')); } catch (e) { return null; }
  }
  function fromStore() {
    try { return norm(localStorage.getItem(KEY)); } catch (e) { return null; }
  }
  function meta(name) { return document.querySelector('meta[name="' + name + '"]'); }
  function metaVal(name) { var m = meta(name); return m ? m.getAttribute('content') : null; }

  /* Alt-Texte: <img alt="deutsch" data-alt-en="english"> */
  function applyAlts(lang) {
    var imgs = document.querySelectorAll('[data-alt-en]');
    for (var i = 0; i < imgs.length; i++) {
      var el = imgs[i];
      if (el.getAttribute('data-alt-de') === null) el.setAttribute('data-alt-de', el.getAttribute('alt') || '');
      var next = lang === 'en' ? el.getAttribute('data-alt-en') : el.getAttribute('data-alt-de');
      if (next != null && el.getAttribute('alt') !== next) el.setAttribute('alt', next);
    }
  }

  /* Grafiken mit eingebranntem Text: <img src="de.png" data-src-en="en.png">
     Fehlt die englische Datei, fällt das Bild still auf die deutsche zurück. */
  function applySrcs(lang) {
    var els = document.querySelectorAll('[data-src-en]');
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      if (el.getAttribute('data-src-de') === null) el.setAttribute('data-src-de', el.getAttribute('src') || '');
      if (lang === 'en' && el.getAttribute('data-src-en-missing') === '1') continue;
      var next = lang === 'en' ? el.getAttribute('data-src-en') : el.getAttribute('data-src-de');
      if (next && el.getAttribute('src') !== next) el.setAttribute('src', next);
    }
  }

  document.addEventListener('error', function (e) {
    var el = e.target;
    if (!el || el.tagName !== 'IMG' || !el.hasAttribute('data-src-en')) return;
    if (el.getAttribute('src') !== el.getAttribute('data-src-en')) return;
    el.setAttribute('data-src-en-missing', '1');
    var de = el.getAttribute('data-src-de');
    if (de) el.setAttribute('src', de);
  }, true);

  /* Interne Links tragen die Sprache mit: ?lang= an jedem Verweis auf eine
     lokale Seite. Wirkt auch bei Mittelklick, neuem Tab und kopiertem Link. */
  function applyLinks(lang) {
    var as = document.querySelectorAll('a[href]');
    for (var i = 0; i < as.length; i++) {
      var a = as[i], h = a.getAttribute('href');
      if (!h || /^(mailto:|tel:|https?:|\/\/|#|data:)/i.test(h)) continue;
      if (h.indexOf('.html') === -1) continue;
      var hash = '', query = '', n;
      n = h.indexOf('#'); if (n > -1) { hash = h.slice(n); h = h.slice(0, n); }
      n = h.indexOf('?'); if (n > -1) { query = h.slice(n + 1); h = h.slice(0, n); }
      var params = new URLSearchParams(query);
      params.set('lang', lang);
      var next = h + '?' + params.toString() + hash;
      if (a.getAttribute('href') !== next) a.setAttribute('href', next);
    }
  }

  function injectCss() {
    if (document.getElementById('jb-lang-css')) return;
    var s = document.createElement('style');
    s.id = 'jb-lang-css';
    s.textContent =
      'html[lang="de"] [data-lang="en"],html[lang="en"] [data-lang="de"]{display:none}' +
      'html[lang="de"] [data-lang-switch="de"],html[lang="en"] [data-lang-switch="en"]{background:#262626;color:#FFFFFF}' +
      'html[lang="de"] [data-lang-switch="en"],html[lang="en"] [data-lang-switch="de"]{background:transparent;color:#262626}';
    (document.head || document.documentElement).appendChild(s);
  }

  function applyHead(lang) {
    var sfx = lang === 'en' ? '-en' : '-de';
    var title = metaVal('jb-title' + sfx);
    if (title && document.title !== title) document.title = title;
    var desc = metaVal('jb-description' + sfx);
    if (desc == null) return;
    /* Der Helmet mountet eine zweite description — alle nachziehen. */
    var ms = document.querySelectorAll('meta[name="description"]');
    for (var i = 0; i < ms.length; i++) {
      if (ms[i].getAttribute('content') !== desc) ms[i].setAttribute('content', desc);
    }
  }
  function apply(lang, opts) {
    opts = opts || {};
    lang = norm(lang) || FALLBACK;
    injectCss();
    document.documentElement.lang = lang;
    if (opts.store !== false) { try { localStorage.setItem(KEY, lang); } catch (e) {} }
    applyHead(lang);
    applyAlts(lang);
    applySrcs(lang);
    applyLinks(lang);
    var btns = document.querySelectorAll('[data-lang-switch]');
    for (var i = 0; i < btns.length; i++) {
      btns[i].setAttribute('aria-pressed', btns[i].getAttribute('data-lang-switch') === lang ? 'true' : 'false');
    }
    if (opts.url && fromUrl()) {
      try {
        var u = new URL(location.href);
        u.searchParams.set('lang', lang);
        history.replaceState(null, '', u.pathname + u.search + u.hash);
      } catch (e) {}
    }
    try { document.dispatchEvent(new CustomEvent('jb:lang', { detail: lang })); } catch (e) {}
  }

  document.addEventListener('click', function (e) {
    var btn = e.target && e.target.closest && e.target.closest('[data-lang-switch]');
    if (!btn) return;
    e.preventDefault();
    apply(btn.getAttribute('data-lang-switch'), { url: true });
  });

  /* Browser-Zurück aus dem bfcache: Zustand kann veraltet sein. */
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) apply(fromStore() || FALLBACK, { store: false });
  });

  window.jbLang = {
    get: function () { return norm(document.documentElement.lang) || FALLBACK; },
    set: function (lang) { apply(lang, { url: true }); }
  };

  /* Re-Render der Seite kann alt-Attribute zurücksetzen — nachziehen. */
  if ('MutationObserver' in window) {
    var pending = false;
    var start = function () {
      if (!document.body) return;
      new MutationObserver(function () {
        if (pending) return;
        pending = true;
        setTimeout(function () { pending = false; var l = window.jbLang.get(); applyAlts(l); applySrcs(l); applyLinks(l); applyHead(l); }, 64);
      }).observe(document.documentElement, { childList: true, subtree: true });
    };
    if (document.body) start();
    else document.addEventListener('DOMContentLoaded', start);
  }

  /* Head-Daten können erst nach dem Helmet-Stream vollständig gesetzt werden. */
  function applyHeadLater() {
    applyHead(window.jbLang.get());
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function () { applyHead(window.jbLang.get()); });
    }
  }

  apply(fromUrl() || fromStore() || FALLBACK);
  applyHeadLater();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { apply(window.jbLang.get(), { store: false }); });
  }
})();

/* ==========================================================================
   IPA Digital Knowledge Series: deck.js
   The slide engine. One HTML file per deck, <section class="slide"> per
   slide. See assets/README-ENGINE.md for the authoring contract.

   Modes (set from the URL):
     index.html            deck view (default)
     index.html#5          deck view, slide 5
     index.html#5-2        deck view, slide 5 with 2 reveal steps shown (QA)
     index.html#5-all      deck view, slide 5 fully revealed (QA, print checks)
     index.html?notes      presenter notes built from the same document
     index.html?notes#5    notes, scrolled to slide 5

   Keys: arrows, space, PageUp/Down, Home/End, F fullscreen, N notes window,
   P print view, Esc or O overview, ? or H help.

   Works from file:// and from GitHub Pages: no fetch, no build step.
   GSAP (window.gsap) is optional; everything degrades to instant changes.
   ========================================================================== */
(function () {
  'use strict';

  var W = 1920, H = 1080;
  var LAYER_NAMES = { 1: 'Home', 2: 'Discovery', 3: 'Paid reach', 4: 'Relationship', 5: 'Measurement' };

  var scriptSrc = (document.currentScript && document.currentScript.src) || '';
  var ASSETS = scriptSrc ? scriptSrc.replace(/js\/deck\.js(\?.*)?$/, '') : '../../assets/';

  var params = new URLSearchParams(location.search);
  var NOTES_MODE = params.has('notes');
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var gsapOk = typeof window.gsap !== 'undefined' && !reduceMotion && params.get('motion') !== 'off';

  var body = document.body;
  var deckEl = document.querySelector('.deck');
  var stage = deckEl && deckEl.querySelector('.stage');
  var slides = stage ? Array.prototype.slice.call(stage.querySelectorAll('section.slide')) : [];
  var storageKey = 'ipa-deck-pos:' + location.pathname;

  var cur = 0;          // current slide index
  var step = 0;         // reveal steps shown on current slide
  var mode = 'deck';    // deck | overview | print
  var helpEl = null;

  if (!deckEl || !stage || slides.length === 0) { initComponents(document); return; }
  body.classList.add('deck-body');

  /* ----------------------------------------------------------------------
     Helpers
     ---------------------------------------------------------------------- */
  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }
  function slideTitle(s, i) {
    if (s.dataset.title) return s.dataset.title;
    var h = s.querySelector('.slide__title, .title__h, .closing__h, .section__h, h1, h2');
    var t = h ? h.textContent.replace(/\s+/g, ' ').trim() : '';
    return t || ('Slide ' + (i + 1));
  }
  function stepsOf(s) {
    if (s._steps) return s._steps;
    var els = Array.prototype.slice.call(s.querySelectorAll('[data-reveal]'));
    var numbered = {}, order = [], loose = [];
    els.forEach(function (e) {
      var v = (e.getAttribute('data-reveal') || '').trim();
      if (v !== '' && !isNaN(Number(v))) {
        var k = Number(v);
        if (!numbered[k]) { numbered[k] = []; order.push(k); }
        numbered[k].push(e);
      } else {
        loose.push([e]);
      }
    });
    order.sort(function (a, b) { return a - b; });
    s._steps = order.map(function (k) { return numbered[k]; }).concat(loose);
    return s._steps;
  }
  function parseHash() {
    var m = /^#(\d+)(?:-(\d+|all))?$/.exec(location.hash || '');
    if (!m) return { index: 0, steps: 0 };
    var idx = Math.min(Math.max(parseInt(m[1], 10) - 1, 0), slides.length - 1);
    var st = m[2] === 'all' ? Infinity : (m[2] ? parseInt(m[2], 10) : 0);
    return { index: idx, steps: st };
  }
  function writeHash(i) {
    var h = '#' + (i + 1);
    if (location.hash !== h) {
      try { history.replaceState(null, '', location.pathname + location.search + h); }
      catch (e) { location.hash = h; }
    }
  }
  function remember(i) {
    try { localStorage.setItem(storageKey, String(i + 1) + ':' + Date.now()); } catch (e) { /* storage may be blocked */ }
  }

  /* ----------------------------------------------------------------------
     Notes view: built from the same document, no fetch needed
     ---------------------------------------------------------------------- */
  if (NOTES_MODE) { buildNotes(); initComponents(document); return; }

  function buildNotes() {
    body.classList.add('deck--notes');
    var deckTitle = deckEl.dataset.deckTitle || document.title || 'Presenter notes';
    var view = el('div', 'notes-view');
    var head = el('div', 'notes-view__head');
    head.appendChild(el('div', '', '<h1>' + escapeHtml(deckTitle) + '</h1><p>Presenter notes. ' + slides.length + ' slides, 30 minutes. Keep this open on a phone or a second screen.</p>'));
    var tools = el('div', 'notes-view__tools');
    tools.appendChild(el('a', 'btn btn--ghost btn--sm', 'Open deck')).setAttribute('href', location.pathname);
    tools.appendChild(el('a', 'btn btn--ghost btn--sm', 'Series home')).setAttribute('href', ASSETS + '../index.html');
    head.appendChild(tools);
    view.appendChild(head);

    var toc = el('nav', 'notes-view__toc');
    slides.forEach(function (s, i) {
      var a = el('a', '', '<b>' + (i + 1) + '</b><span>' + escapeHtml(slideTitle(s, i)) + '</span><span>' + escapeHtml(s.dataset.minute ? 'min ' + s.dataset.minute : '') + '</span>');
      a.href = '#' + (i + 1);
      toc.appendChild(a);
    });
    view.appendChild(toc);

    slides.forEach(function (s, i) {
      var n = el('article', 'note');
      n.id = 'note-' + (i + 1);
      var meta = el('div', 'note__meta');
      meta.appendChild(el('span', 'note__n', 'Slide ' + (i + 1) + ' of ' + slides.length));
      if (s.dataset.minute) meta.appendChild(el('span', '', 'Minutes ' + escapeHtml(s.dataset.minute)));
      if (s.dataset.segment) meta.appendChild(el('span', '', escapeHtml(s.dataset.segment)));
      if (s.dataset.layer && LAYER_NAMES[s.dataset.layer]) meta.appendChild(el('span', 'chip', 'Layer ' + s.dataset.layer + ': ' + LAYER_NAMES[s.dataset.layer]));
      n.appendChild(meta);
      n.appendChild(el('h2', 'note__title', escapeHtml(slideTitle(s, i))));

      var poll = s.querySelector('.poll');
      if (poll) {
        var q = poll.querySelector('.poll__q');
        var opts = Array.prototype.slice.call(poll.querySelectorAll('.poll__option')).map(function (o) {
          var k = o.querySelector('.poll__key'); var key = k ? k.textContent.trim() + '. ' : '';
          var txt = Array.prototype.filter.call(o.childNodes, function (n) { return n !== k; }).map(function (n) { return n.textContent; }).join('');
          return escapeHtml(key + txt.replace(/\s+/g, ' ').trim());
        });
        n.appendChild(el('div', 'note__cue note__cue--poll', '<b>Zoom poll</b><span>' + (q ? escapeHtml(q.textContent.trim()) : '') + (opts.length ? '<br>' + opts.join('<br>') : '') + '</span>'));
      }
      var st = stepsOf(s).length;
      if (st) n.appendChild(el('div', 'note__cue', '<b>Clicks</b><span>' + st + (st === 1 ? ' reveal on this slide. Press the arrow key or click the right half to show it.' : ' reveals on this slide. Each arrow key or click shows the next one.') + '</span>'));

      var aside = s.querySelector('aside.notes');
      var bodyEl = el('div', 'note__body');
      bodyEl.innerHTML = aside && aside.innerHTML.trim() ? aside.innerHTML : '<p class="empty">No notes for this slide.</p>';
      n.appendChild(bodyEl);
      view.appendChild(n);
    });
    view.appendChild(el('p', 'notes-view__foot', 'Built from the slides in this file. Edit a slide\'s &lt;aside class="notes"&gt; and this page updates.'));
    body.appendChild(view);

    function markCurrent(i, scroll) {
      var notes = view.querySelectorAll('.note');
      Array.prototype.forEach.call(notes, function (x) { x.classList.remove('is-current'); });
      var t = notes[i];
      if (t) { t.classList.add('is-current'); if (scroll) t.scrollIntoView({ block: 'start', behavior: reduceMotion ? 'auto' : 'smooth' }); }
    }
    var h = parseHash();
    if (location.hash) markCurrent(h.index, true);
    window.addEventListener('hashchange', function () { markCurrent(parseHash().index, true); });
    window.addEventListener('storage', function (e) {
      if (e.key !== storageKey || !e.newValue) return;
      var i = parseInt(e.newValue.split(':')[0], 10) - 1;
      if (i >= 0) markCurrent(i, true);
    });
  }
  function escapeHtml(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  /* ----------------------------------------------------------------------
     Deck view: chrome, progress, help
     ---------------------------------------------------------------------- */
  slides.forEach(function (s, i) {
    s.setAttribute('aria-hidden', 'true');
    s.setAttribute('data-index', String(i + 1));
    var chrome = el('div', 'slide__chrome');
    chrome.setAttribute('aria-hidden', 'true');
    if (s.dataset.chrome !== 'none') {
      var foot = el('div', 'slide__footer');
      foot.innerHTML = '<img src="' + ASSETS + 'brand/tsl-mark.png" alt=""><span class="slide__footer-sep"></span><img src="' + ASSETS + 'brand/ipa-logo.png" alt="">';
      chrome.appendChild(foot);
      chrome.appendChild(el('div', 'slide__count', '<b>' + (i + 1) + '</b> / ' + slides.length));
    }
    if (s.dataset.layer && LAYER_NAMES[s.dataset.layer]) {
      chrome.appendChild(el('div', 'slide__layer', '<span class="chip"><span class="chip__n">Layer ' + s.dataset.layer + '</span>' + LAYER_NAMES[s.dataset.layer] + '</span>'));
    }
    chrome.appendChild(el('span', 'slide__ov-label', String(i + 1)));
    s.appendChild(chrome);
  });

  var progress = el('div', 'deck__progress');
  var progressBar = el('div', 'deck__progress-bar');
  progress.appendChild(progressBar);
  deckEl.appendChild(progress);

  var bar = el('div', 'deck__bar');
  bar.innerHTML = '<button type="button" class="btn btn--sm" data-act="print">Print or save as PDF</button><button type="button" class="btn btn--ghost btn--sm" data-act="back">Back to deck</button>';
  bar.style.cssText = 'position:fixed;top:16px;right:16px;z-index:70;display:none;gap:8px;font-size:16px';
  body.appendChild(bar);
  bar.addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (!b) return;
    if (b.dataset.act === 'print') window.print();
    if (b.dataset.act === 'back') setMode('deck');
  });

  /* ----------------------------------------------------------------------
     Fit the 1920x1080 stage to the window
     ---------------------------------------------------------------------- */
  function fit() {
    if (mode === 'deck') {
      var s = Math.min(window.innerWidth / W, window.innerHeight / H);
      stage.style.setProperty('--stage-scale', s.toFixed(5));
    } else if (mode === 'print') {
      stage.style.setProperty('--print-zoom', Math.min(1, (window.innerWidth - 64) / W).toFixed(4));
    }
  }
  window.addEventListener('resize', fit);

  /* ----------------------------------------------------------------------
     Reveals
     ---------------------------------------------------------------------- */
  function applyReveal(group, on, animate) {
    group.forEach(function (e) {
      e.classList.toggle('is-revealed', on);
      var ans = e.classList.contains('poll__answer') ? e : e.querySelector('.poll__answer');
      var poll = (ans || e).closest('.poll');
      if (poll && (ans || e.classList.contains('poll__answer'))) {
        poll.classList.toggle('poll--revealed', on);
        Array.prototype.forEach.call(poll.querySelectorAll('.poll__option[data-correct]'), function (o) { o.classList.toggle('is-correct', on); });
      }
    });
    if (on && animate && gsapOk) {
      window.gsap.fromTo(group, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.45, stagger: 0.07, ease: 'power3.out', clearProps: 'opacity,transform', overwrite: true });
    } else if (gsapOk) {
      window.gsap.set(group, { clearProps: 'opacity,transform' });
    }
  }
  function setSteps(s, n, animate) {
    var st = stepsOf(s);
    n = Math.max(0, Math.min(n, st.length));
    st.forEach(function (g, i) { applyReveal(g, i < n, animate && i === n - 1); });
    return n;
  }

  /* ----------------------------------------------------------------------
     Navigation
     ---------------------------------------------------------------------- */
  function go(i, opts) {
    opts = opts || {};
    i = Math.max(0, Math.min(i, slides.length - 1));
    var from = slides[cur], to = slides[i];
    var dir = i > cur ? 1 : -1;
    var changed = i !== cur;
    cur = i;
    var want = opts.steps === 'all' ? Infinity : (opts.steps || 0);
    step = setSteps(to, want, false);

    slides.forEach(function (s) { s.classList.remove('is-leaving'); if (s !== to) { s.classList.remove('is-active'); s.setAttribute('aria-hidden', 'true'); } });
    to.classList.add('is-active');
    to.setAttribute('aria-hidden', 'false');

    if (changed && opts.animate !== false && gsapOk && mode === 'deck') {
      from.classList.add('is-leaving');
      window.gsap.killTweensOf([from, to]);
      window.gsap.to(from, { opacity: 0, duration: 0.3, ease: 'power2.out', onComplete: function () { from.classList.remove('is-leaving'); window.gsap.set(from, { clearProps: 'opacity' }); } });
      window.gsap.fromTo(to, { opacity: 0, y: 28 * dir }, { opacity: 1, y: 0, duration: 0.45, ease: 'power3.out', clearProps: 'opacity,transform' });
    }
    progressBar.style.width = ((i + 1) / slides.length * 100).toFixed(2) + '%';
    writeHash(i);
    remember(i);
    deckEl.dispatchEvent(new CustomEvent('slidechange', { detail: { index: i, slide: to } }));
  }
  function next() {
    var st = stepsOf(slides[cur]);
    if (step < st.length) { step = setSteps(slides[cur], step + 1, true); return; }
    if (cur < slides.length - 1) go(cur + 1);
  }
  function prev() {
    if (step > 0) { step = setSteps(slides[cur], step - 1, false); return; }
    if (cur > 0) go(cur - 1, { steps: 'all' });
  }

  /* ----------------------------------------------------------------------
     Modes: deck, overview, print
     ---------------------------------------------------------------------- */
  function setMode(m) {
    if (m === mode) m = 'deck';
    mode = m;
    body.classList.toggle('deck--overview', m === 'overview');
    body.classList.toggle('deck--print', m === 'print');
    bar.style.display = m === 'print' ? 'flex' : 'none';
    if (m === 'deck') {
      stage.style.removeProperty('--print-zoom');
      window.scrollTo(0, 0);
      go(cur, { steps: step, animate: false });
    } else {
      slides.forEach(function (s) { s.classList.remove('is-leaving'); });
      fit();
      var active = slides[cur];
      if (active && active.scrollIntoView) setTimeout(function () { active.scrollIntoView({ block: 'center' }); }, 30);
    }
    fit();
  }

  function toggleFullscreen() {
    var d = document, root = d.documentElement;
    try {
      if (d.fullscreenElement || d.webkitFullscreenElement) {
        (d.exitFullscreen || d.webkitExitFullscreen).call(d);
      } else {
        (root.requestFullscreen || root.webkitRequestFullscreen).call(root);
      }
    } catch (e) { /* not available in this browser */ }
  }
  function openNotes() {
    var url = location.pathname.replace(/[^\/]*$/, '') + 'notes.html#' + (cur + 1);
    window.open(url, 'ipa-notes');
  }

  /* ----------------------------------------------------------------------
     Help overlay
     ---------------------------------------------------------------------- */
  function toggleHelp(force) {
    if (!helpEl) {
      helpEl = el('div', 'deck__help');
      helpEl.innerHTML =
        '<div class="deck__help-card" role="dialog" aria-label="Keyboard shortcuts"><h2>Keys</h2><dl>' +
        '<dt><kbd>&rarr;</kbd><kbd>Space</kbd></dt><dd>Next reveal, then next slide</dd>' +
        '<dt><kbd>&larr;</kbd></dt><dd>Previous reveal, then previous slide</dd>' +
        '<dt><kbd>Home</kbd><kbd>End</kbd></dt><dd>First or last slide</dd>' +
        '<dt><kbd>F</kbd></dt><dd>Full screen</dd>' +
        '<dt><kbd>N</kbd></dt><dd>Presenter notes in a new window</dd>' +
        '<dt><kbd>P</kbd></dt><dd>Print view, then save as PDF</dd>' +
        '<dt><kbd>Esc</kbd></dt><dd>Overview of all slides</dd>' +
        '<dt><kbd>?</kbd></dt><dd>This help</dd>' +
        '</dl><p class="caption" style="margin-top:14px">Click the right half of the screen to go forward, the left half to go back. Swipe on touch screens.</p>' +
        '<button type="button" class="btn btn--sm deck__help-close">Close</button></div>';
      body.appendChild(helpEl);
      helpEl.addEventListener('click', function (e) { if (e.target === helpEl || e.target.closest('.deck__help-close')) toggleHelp(false); });
    }
    var open = force != null ? force : !helpEl.classList.contains('is-open');
    helpEl.classList.toggle('is-open', open);
  }

  /* ----------------------------------------------------------------------
     Input
     ---------------------------------------------------------------------- */
  document.addEventListener('keydown', function (e) {
    var t = e.target;
    if (t && t.matches && t.matches('input, textarea, select, [contenteditable="true"]')) return;
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    if (helpEl && helpEl.classList.contains('is-open')) { if (e.key === 'Escape' || e.key === '?' || e.key.toLowerCase() === 'h') { e.preventDefault(); toggleHelp(false); } return; }
    switch (e.key) {
      case 'ArrowRight': case 'ArrowDown': case 'PageDown': case 'Enter':
        e.preventDefault(); if (mode !== 'deck') { setMode('deck'); } next(); break;
      case ' ':
        e.preventDefault(); if (mode !== 'deck') { setMode('deck'); } if (e.shiftKey) prev(); else next(); break;
      case 'ArrowLeft': case 'ArrowUp': case 'PageUp': case 'Backspace':
        e.preventDefault(); if (mode !== 'deck') { setMode('deck'); } prev(); break;
      case 'Home': e.preventDefault(); go(0); break;
      case 'End': e.preventDefault(); go(slides.length - 1, { steps: 'all' }); break;
      case 'Escape': e.preventDefault(); if (mode === 'print') setMode('deck'); else setMode('overview'); break;
      case 'o': case 'O': e.preventDefault(); setMode('overview'); break;
      case 'f': case 'F': e.preventDefault(); toggleFullscreen(); break;
      case 'n': case 'N': e.preventDefault(); openNotes(); break;
      case 'p': case 'P': e.preventDefault(); setMode('print'); break;
      case '?': case 'h': case 'H': e.preventDefault(); toggleHelp(); break;
      default: return;
    }
  });

  deckEl.addEventListener('click', function (e) {
    var t = e.target;
    if (mode === 'overview') {
      var s = t.closest('section.slide');
      if (s) { setMode('deck'); go(slides.indexOf(s), { animate: false }); }
      return;
    }
    if (mode !== 'deck') return;
    if (t.closest('a, button, input, select, textarea, label, summary, [data-no-nav], .ba, .map')) return;
    if (e.clientX < window.innerWidth / 2) prev(); else next();
  });

  var touchX = null, touchY = null;
  deckEl.addEventListener('touchstart', function (e) { if (e.touches.length === 1) { touchX = e.touches[0].clientX; touchY = e.touches[0].clientY; } }, { passive: true });
  deckEl.addEventListener('touchend', function (e) {
    if (touchX == null || mode !== 'deck') return;
    var dx = e.changedTouches[0].clientX - touchX, dy = e.changedTouches[0].clientY - touchY;
    touchX = touchY = null;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) { if (dx < 0) next(); else prev(); }
  }, { passive: true });

  window.addEventListener('hashchange', function () {
    var h = parseHash();
    if (h.index !== cur) go(h.index, { steps: h.steps === Infinity ? 'all' : h.steps, animate: true });
    else if (h.steps) step = setSteps(slides[cur], h.steps, false);
  });

  /* ----------------------------------------------------------------------
     Shared components (also run on non-deck pages that include deck.js)
     ---------------------------------------------------------------------- */
  function initComponents(root) {
    Array.prototype.forEach.call(root.querySelectorAll('.ba'), function (ba) {
      if (ba._init) return; ba._init = true;
      var range = ba.querySelector('.ba__range');
      if (!range) return;
      var set = function () { ba.style.setProperty('--ba-pos', range.value + '%'); };
      range.addEventListener('input', set);
      range.addEventListener('keydown', function (e) { e.stopPropagation(); });
      set();
    });
  }

  /* ----------------------------------------------------------------------
     Start
     ---------------------------------------------------------------------- */
  var start = parseHash();
  fit();
  initComponents(document);
  go(start.index, { steps: start.steps === Infinity ? 'all' : start.steps, animate: false });
  /* ?mode=overview or ?mode=print opens straight into that view (handy for QA screenshots) */
  if (params.get('mode') === 'overview' || params.get('mode') === 'print') setMode(params.get('mode'));

  window.IPADeck = {
    go: function (n, steps) { go(n - 1, { steps: steps }); },
    next: next, prev: prev,
    current: function () { return cur + 1; },
    count: slides.length,
    mode: function () { return mode; },
    setMode: setMode,
    initComponents: initComponents,
    deck: deckEl
  };
})();

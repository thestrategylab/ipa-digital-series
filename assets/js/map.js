/* ==========================================================================
   IPA Digital Knowledge Series: map.js
   The five-layer map. One component, used on the home page and in every
   deck. Styles live in base.css under ".map".

   Markup (auto-initialised on DOMContentLoaded):
     <div data-map></div>                          all five layers lit, none highlighted
     <div data-map data-highlight="2"></div>       layer 2 highlighted (cyan node, bold name)
     <div data-map data-lit="1,2"></div>           only layers 1 and 2 lit, the rest hollow
     <div data-map data-lit="none"></div>          nothing lit yet
     <div data-map data-expanded="2"></div>        layer 2 open on load
     <div data-map data-platforms="inline"></div>  logos always shown under each layer (no click needed)
     <div data-map data-compact></div>             hides the plain-meaning line and session label
     <div data-map data-static></div>              not clickable (for screenshots or small slides)

   Script API:
     var api = IPAMap.render(el, { highlight: 2, lit: [1,2], expanded: 2, platforms: 'inline', compact: false, static: false });
     api.highlight(3); api.light([1,2,3]); api.light('all'); api.expand(2); api.collapse();
     IPAMap.LAYERS  the config (number, key, name, meaning, session, platforms)
   ========================================================================== */
(function () {
  'use strict';

  var scriptSrc = (document.currentScript && document.currentScript.src) || '';
  var ASSETS = scriptSrc ? scriptSrc.replace(/js\/map\.js(\?.*)?$/, '') : 'assets/';
  var LOGOS = ASSETS + 'img/logos/';

  var ICONS = {
    code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7l-5 5 5 5"/><path d="M16 7l5 5-5 5"/><path d="M14 4l-4 16"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 3l2.8 5.8 6.4.9-4.6 4.5 1.1 6.3L12 17.5l-5.7 3 1.1-6.3L2.8 9.7l6.4-.9z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
    bell: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 16V11a6 6 0 0 1 12 0v5l2 2H4z"/><path d="M10 20a2 2 0 0 0 4 0"/></svg>',
    sheet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>'
  };

  var LAYERS = [
    { n: 1, key: 'home', name: 'Home', meaning: 'Where people land when they look you up', session: 2,
      platforms: [
        { name: 'Google Business Profile', logo: 'google-business-profile.png' },
        { name: 'Website on WordPress', logo: 'wordpress.svg' },
        { name: 'Website on Shopify', logo: 'shopify.svg' },
        { name: 'Custom-built website', icon: 'code' },
        { name: 'WhatsApp Business', logo: 'whatsapp.svg' }
      ] },
    { n: 2, key: 'discovery', name: 'Discovery', meaning: 'Where people come across you and judge you', session: 3,
      platforms: [
        { name: 'Google search', logo: 'google-g.svg' },
        { name: 'LinkedIn', logo: 'linkedin.svg' },
        { name: 'Instagram', logo: 'instagram.svg' },
        { name: 'YouTube', logo: 'youtube.svg' },
        { name: 'Pinterest', logo: 'pinterest.svg' },
        { name: 'Reviews', icon: 'star' }
      ] },
    { n: 3, key: 'paid', name: 'Paid reach', meaning: 'Paying to be seen by the right people', session: 4,
      platforms: [
        { name: 'Meta ads', logo: 'meta.svg' },
        { name: 'Google ads', logo: 'google-ads.svg' },
        { name: 'LinkedIn ads', logo: 'linkedin.svg' }
      ] },
    { n: 4, key: 'relationship', name: 'Relationship', meaning: 'Turning one job into repeat work and referrals', session: 5,
      platforms: [
        { name: 'WhatsApp lists', logo: 'whatsapp.svg' },
        { name: 'Email', icon: 'mail' },
        { name: 'Review requests', icon: 'star' },
        { name: 'Service reminders', icon: 'bell' }
      ] },
    { n: 5, key: 'measurement', name: 'Measurement', meaning: 'Knowing what is working', session: 6,
      platforms: [
        { name: 'Google Business Profile insights', logo: 'google-business-profile.png' },
        { name: 'Instagram insights', logo: 'instagram.svg' },
        { name: 'LinkedIn analytics', logo: 'linkedin.svg' },
        { name: 'Meta ads results', logo: 'meta.svg' },
        { name: 'Google ads results', logo: 'google-ads.svg' },
        { name: 'One-page monthly scorecard', icon: 'sheet' }
      ] }
  ];

  var uid = 0;
  var gsapOk = function () {
    return typeof window.gsap !== 'undefined' && !(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) && !/[?&]motion=off/.test(location.search);
  };

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  function platformHtml(p) {
    var tile = p.logo
      ? '<span class="logo-tile"><img src="' + LOGOS + p.logo + '" alt=""></span>'
      : '<span class="logo-tile logo-tile--drawn">' + (ICONS[p.icon] || ICONS.sheet) + '</span>';
    return '<li class="map__platform">' + tile + '<span class="map__platform-name">' + esc(p.name) + '</span></li>';
  }

  function parseLit(v, highlight) {
    if (v == null || v === '' || v === 'all') return [1, 2, 3, 4, 5];
    if (v === 'none') return highlight ? [highlight] : [];
    if (Array.isArray(v)) return v.map(Number);
    return String(v).split(',').map(function (x) { return parseInt(x, 10); }).filter(function (x) { return x >= 1 && x <= 5; });
  }

  function render(root, cfg) {
    cfg = cfg || {};
    var id = 'map' + (++uid);
    var highlight = cfg.highlight ? Number(cfg.highlight) : null;
    var lit = parseLit(cfg.lit, highlight);
    if (highlight && lit.indexOf(highlight) < 0) lit.push(highlight);
    var inline = cfg.platforms === 'inline';
    var isStatic = !!cfg.static;
    var expanded = cfg.expanded ? Number(cfg.expanded) : null;

    root.classList.add('map');
    root.classList.toggle('map--inline', inline);
    root.classList.toggle('map--compact', !!cfg.compact);
    root.classList.toggle('map--static', isStatic);

    var html = '<ol class="map__layers" aria-label="The five layers">';
    LAYERS.forEach(function (L) {
      var cls = 'map__layer' + (lit.indexOf(L.n) >= 0 ? ' is-lit' : '') + (highlight === L.n ? ' is-highlight' : '');
      var tag = isStatic || inline ? 'div' : 'button';
      var attrs = tag === 'button' ? ' type="button" aria-expanded="false" aria-controls="' + id + '-d' + L.n + '"' : '';
      html += '<li class="' + cls + '" data-layer="' + L.n + '">' +
        '<' + tag + ' class="map__btn"' + attrs + '>' +
          '<span class="map__node" aria-hidden="true"></span>' +
          '<span class="map__n" aria-hidden="true">' + L.n + '</span>' +
          '<span class="map__name"><span class="sr-only">Layer ' + L.n + ': </span>' + esc(L.name) + '</span>' +
          '<span class="map__meaning">' + esc(L.meaning) + '</span>' +
          (inline ? '<ul class="map__platforms map__platforms--inline">' + L.platforms.map(platformHtml).join('') + '</ul>' : '') +
          '<span class="map__session">Session ' + L.session + '</span>' +
        '</' + tag + '>';
      if (!inline) {
        html += '<div class="map__detail" id="' + id + '-d' + L.n + '" hidden>' +
          '<div class="map__detail-inner">' +
            '<div><p class="map__detail-h">Layer ' + L.n + ': ' + esc(L.name) + '</p><p class="map__detail-p">' + esc(L.meaning) + '. Covered in depth in Session ' + L.session + '.</p></div>' +
            '<ul class="map__platforms">' + L.platforms.map(platformHtml).join('') + '</ul>' +
          '</div></div>';
      }
      html += '</li>';
    });
    html += '</ol>';
    root.innerHTML = html;

    var layersEl = root.querySelector('.map__layers');
    var open = null;

    function setOpen(n, animate) {
      if (inline || isStatic) return;
      var prevN = open;
      open = (n === open) ? null : n;
      LAYERS.forEach(function (L) {
        var li = layersEl.querySelector('[data-layer="' + L.n + '"]');
        var btn = li.querySelector('.map__btn');
        var d = li.querySelector('.map__detail');
        var isOpen = open === L.n;
        btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        li.classList.toggle('is-open', isOpen);
        if (isOpen) {
          d.hidden = false;
          if (animate && gsapOk()) {
            window.gsap.killTweensOf(d);
            window.gsap.fromTo(d, { height: prevN ? d.offsetHeight : 0, opacity: prevN ? 1 : 0 }, { height: 'auto', opacity: 1, duration: 0.42, ease: 'power3.out', clearProps: 'height,opacity' });
            var inner = d.querySelector('.map__detail-inner');
            window.gsap.fromTo(inner, { y: -8, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, delay: 0.05, ease: 'power3.out', clearProps: 'transform,opacity' });
          }
        } else if (!d.hidden) {
          if (animate && gsapOk() && open === null) {
            window.gsap.killTweensOf(d);
            window.gsap.to(d, { height: 0, opacity: 0, duration: 0.3, ease: 'power2.out', onComplete: function () { d.hidden = true; window.gsap.set(d, { clearProps: 'height,opacity' }); } });
          } else {
            d.hidden = true;
          }
        }
      });
    }

    if (!inline && !isStatic) {
      layersEl.addEventListener('click', function (e) {
        var btn = e.target.closest('.map__btn');
        if (!btn) return;
        setOpen(parseInt(btn.closest('.map__layer').dataset.layer, 10), true);
      });
      if (expanded) setOpen(expanded, false);
    }

    var api = {
      el: root,
      highlight: function (n) {
        highlight = n ? Number(n) : null;
        LAYERS.forEach(function (L) {
          var li = layersEl.querySelector('[data-layer="' + L.n + '"]');
          li.classList.toggle('is-highlight', highlight === L.n);
          if (highlight === L.n) li.classList.add('is-lit');
        });
      },
      light: function (list) {
        lit = parseLit(list, highlight);
        LAYERS.forEach(function (L) {
          layersEl.querySelector('[data-layer="' + L.n + '"]').classList.toggle('is-lit', lit.indexOf(L.n) >= 0 || highlight === L.n);
        });
      },
      expand: function (n) { if (open !== Number(n)) setOpen(Number(n), true); },
      collapse: function () { if (open !== null) setOpen(open, true); },
      isOpen: function () { return open; }
    };
    root.__ipaMap = api;
    return api;
  }

  function autoInit() {
    Array.prototype.forEach.call(document.querySelectorAll('[data-map]'), function (el) {
      if (el.__ipaMap) return;
      render(el, {
        highlight: el.dataset.highlight,
        lit: el.dataset.lit,
        expanded: el.dataset.expanded,
        platforms: el.dataset.platforms,
        compact: el.hasAttribute('data-compact'),
        static: el.hasAttribute('data-static')
      });
    });
  }

  window.IPAMap = { render: render, LAYERS: LAYERS, init: autoInit, ICONS: ICONS, assets: ASSETS };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', autoInit); else autoInit();
})();

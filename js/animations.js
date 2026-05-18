/* ═══════════════════════════════════════════════════════════════
   AUTOSUCRO · ANIMATION SYSTEM
   Scroll reveal + counters + ripple + hero parallax
   ═══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── CONFIGURACIÓN ─────────────────────────────────────────── */

  /* Selectores que aparecen solos (fade up) */
  const SOLO = [
    '.label-tag',
    '.section-title',
    '.section-sub',
    '.section-head > .btn',
    '.section-head > a',
    '.ws-eyebrow',
    '.ws-title',
    '.ws-text',
    '.ws-features',
    '.ws-features + .btn, .ws-features + a',
    '.vp-brand',
    '.vp-model',
    '.vp-meta',
    '.vp-guarantee',
    '.vp-specs-grid',
    '.vp-price-card',
    '.vp-dealer-card',
    '.map-wrap',
    '.contact-form',
    '.contact-wa',
    '.sidebar-filters',
  ];

  /* Selectores cuyos hijos se encolan con stagger */
  const STAGGER = [
    '.vehicles-grid',
    '.why-grid',
    '.reviews-grid',
    '.services-grid',
    '.info-cards-grid',
    '.stats-grid',
    '.timeline',
    '.insurers-wrap',
    '.about-img-mosaic',
  ];

  /* Bloques en dos columnas — aparecen desde el lado */
  const DIRECTIONAL = [
    { sel: '.workshop-grid > :first-child', cls: 'fl' },
    { sel: '.workshop-grid > :last-child',  cls: 'fr' },
    { sel: '.about-grid    > :first-child', cls: 'fl' },
    { sel: '.about-grid    > :last-child',  cls: 'fr' },
    { sel: '.contact-grid  > :first-child', cls: 'fl' },
    { sel: '.contact-grid  > :last-child',  cls: 'fr' },
    { sel: '.vp-grid       > :first-child', cls: 'fl' },
    { sel: '.vp-grid       > :last-child',  cls: 'fr' },
  ];

  /* ── HELPERS ───────────────────────────────────────────────── */

  function mark(el, dirCls) {
    if (!el || el.classList.contains('ar')) return;
    el.classList.add('ar');
    if (dirCls) el.classList.add(dirCls);
  }

  let obs;

  function observe(el) {
    if (obs) obs.observe(el);
  }

  /* ── REGISTRO DE ELEMENTOS ─────────────────────────────────── */

  function registerAll() {
    /* Elementos individuales */
    SOLO.forEach(sel => {
      document.querySelectorAll(sel).forEach(el => {
        /* evitar conflicto con directional (el padre ya se anima) */
        if (!el.closest('.workshop-grid, .about-grid, .contact-grid, .vp-grid')) {
          mark(el);
          observe(el);
        }
      });
    });

    /* Stagger grids */
    STAGGER.forEach(sel => {
      document.querySelectorAll(sel).forEach(container => {
        Array.from(container.children).forEach((child, i) => {
          mark(child);
          child.setAttribute('data-d', Math.min(i + 1, 6));
          observe(child);
        });
      });
    });

    /* Bloques direccionales */
    DIRECTIONAL.forEach(({ sel, cls }) => {
      document.querySelectorAll(sel).forEach(el => {
        mark(el, cls);
        observe(el);
      });
    });
  }

  /* ── INTERSECTION OBSERVER ─────────────────────────────────── */

  function initObserver() {
    obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('on');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.10, rootMargin: '0px 0px -28px 0px' });
  }

  /* ── CONTADOR DE ESTADÍSTICAS ──────────────────────────────── */

  function initCounters() {
    const els = document.querySelectorAll('.stat-num');
    if (!els.length) return;

    const co = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        co.unobserve(entry.target);
        runCount(entry.target);
      });
    }, { threshold: 0.6 });

    els.forEach(el => co.observe(el));
  }

  function runCount(el) {
    const raw   = el.textContent.trim();
    const plus  = raw.startsWith('+');
    const pct   = raw.endsWith('%');
    const clean = raw.replace(/[+%\s.]/g, '').replace(',', '');
    const end   = parseInt(clean, 10);
    if (isNaN(end) || end === 0) return;

    const dur   = 1300;
    const t0    = performance.now();

    function tick(now) {
      const p    = Math.min((now - t0) / dur, 1);
      const ease = 1 - Math.pow(1 - p, 3); /* easeOutCubic */
      const val  = Math.round(ease * end);
      el.textContent =
        (plus ? '+' : '') +
        (end >= 1000 ? val.toLocaleString('es-ES') : val) +
        (pct ? '%' : '');
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  /* ── RIPPLE EN BOTONES ─────────────────────────────────────── */

  function initRipple() {
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.btn, .btn-contact');
      if (!btn) return;
      const rect = btn.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 2;
      const x    = e.clientX - rect.left - size / 2;
      const y    = e.clientY - rect.top  - size / 2;
      const dot  = document.createElement('span');
      dot.className = 'ar-ripple';
      dot.style.cssText = `width:${size}px;height:${size}px;left:${x}px;top:${y}px;`;
      btn.appendChild(dot);
      setTimeout(() => dot.remove(), 600);
    });
  }

  /* ── PARALLAX HERO ─────────────────────────────────────────── */

  function initHeroParallax() {
    const bg = document.querySelector('.hero-bg');
    if (!bg) return;
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        bg.style.transform = `translateY(${window.scrollY * 0.32}px)`;
        ticking = false;
      });
    }, { passive: true });
  }

  /* ── INIT ──────────────────────────────────────────────────── */

  function init() {
    initObserver();
    registerAll();
    initCounters();
    initRipple();
    initHeroParallax();
  }

  /* Re-init público para contenido dinámico (ej. vehiculos grid) */
  window.animRefresh = function () {
    registerAll();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();

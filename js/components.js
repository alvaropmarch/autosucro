/* ── SVG ICON LIBRARY ── */
const ICONS = {
  phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11 19.79 19.79 0 01.22 2.35 2 2 0 012.22.18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92v2z"/></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>`,
  pin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  arrow_right: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  star: `<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  car: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 17H3a2 2 0 01-2-2V9a2 2 0 012-2h1.5M19 17h2a2 2 0 002-2V9a2 2 0 00-2-2h-1.5M7 9l2-5h6l2 5M3 9h18M7 17v2M17 17v2M7 13h.01M17 13h.01"/></svg>`,
  wrench: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>`,
  user: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  credit: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>`,
  refresh: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 11-2.12-9.36L23 10"/></svg>`,
  tool: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>`,
  award: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>`,
  eye: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
  edit: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,
  trash: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>`,
  grid: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`,
  list: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>`,
  plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  globe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>`,
  logout: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`,
  fb: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>`,
  yt: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>`,
  ig: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
};

/* ── INLINE LOGO SVG (works on any bg with CSS color) ── */
const LOGO_MARK = `<svg viewBox="0 0 188 58" fill="none" xmlns="http://www.w3.org/2000/svg" style="height:32px;width:auto">
  <!-- a: rounded rect open at bottom-right, leg extension -->
  <path d="M9 46 L9 22 Q9 9 22 9 L66 9 Q79 9 79 22 L79 42 Q79 49 72 49 L24 49 L24 55 Q24 63 34 63" stroke="currentColor" stroke-width="13" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <!-- s: two connected C-curves -->
  <path d="M101 22 Q101 9 114 9 L148 9 Q161 9 161 22 Q161 35 148 35 L114 35 Q101 35 101 48 Q101 61 114 61 L148 61 Q161 61 161 48" stroke="currentColor" stroke-width="13" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</svg>`;

const LOGO_FULL = `<div style="display:flex;flex-direction:column;gap:3px;line-height:1">
  ${LOGO_MARK}
  <span style="font-family:Barlow,sans-serif;font-size:10px;font-weight:400;letter-spacing:4px;text-transform:uppercase;color:currentColor;padding-left:1px">AUTO<strong style="font-weight:700">SUCRO</strong></span>
</div>`;

/* ── HEADER ── */
function renderHeader(activePage) {
  const pages = [
    { href: 'index.html',    label: 'Inicio' },
    { href: 'vehiculos.html',label: 'Vehículos' },
    { href: 'servicios.html',label: 'Servicios' },
    { href: 'nosotros.html', label: 'Nosotros' },
    { href: 'contacto.html', label: 'Contacto' },
  ];
  const navLinks = pages.map(p =>
    `<a href="${p.href}" class="${activePage === p.label ? 'active' : ''}">${p.label}</a>`
  ).join('');

  return `
  <header class="site-header" id="siteHeader">
    <a href="index.html" class="header-logo">
      <img src="Recursos/autosucro_blanco.png" alt="Autosucro">
    </a>
    <nav class="site-nav">${navLinks}</nav>
    <div class="header-right">
      <a href="https://wa.me/34646642082" target="_blank" class="header-wa" title="WhatsApp">${ICONS.whatsapp}</a>
      <a href="tel:961730361" class="btn-contact">Llamar</a>
    </div>
    <button class="hamburger" id="hamburger">
      <span></span><span></span><span></span>
    </button>
  </header>
  <div class="mobile-nav" id="mobileNav">
    <div class="mobile-drawer">
      <button class="mobile-drawer-close" id="mobileNavClose">✕</button>
      ${pages.map(p => `<a href="${p.href}">${p.label}</a>`).join('')}
      <a href="https://wa.me/34646642082" target="_blank" style="color:var(--brand);margin-top:14px;border-bottom:none">WhatsApp →</a>
    </div>
  </div>`;
}

/* ── FOOTER ── */
function renderFooter() {
  return `
  <footer class="site-footer">
    <div class="footer-grid">
      <div>
        <div class="footer-logo">
          <img src="Recursos/autosucro_blanco.png" alt="Autosucro">
        </div>
        <p class="footer-tagline">Concesionario multimarca con más de 45 años cuidándote. Empresa familiar fundada en 1979. Cullera, Valencia.</p>
        <div class="footer-social">
          <a href="#" title="Facebook">${ICONS.fb}</a>
          <a href="#" title="YouTube">${ICONS.yt}</a>
          <a href="#" title="Instagram">${ICONS.ig}</a>
        </div>
      </div>
      <div>
        <p class="footer-col-title">Páginas</p>
        <div class="footer-links">
          <a href="index.html">Inicio</a>
          <a href="vehiculos.html">Vehículos de Ocasión</a>
          <a href="servicios.html">Servicios &amp; Taller</a>
          <a href="nosotros.html">Sobre Nosotros</a>
          <a href="contacto.html">Contacto</a>
        </div>
      </div>
      <div>
        <p class="footer-col-title">Legal</p>
        <div class="footer-links">
          <a href="#">Aviso Legal</a>
          <a href="#">Política de Cookies</a>
          <a href="#">Política de Privacidad</a>
        </div>
      </div>
      <div>
        <p class="footer-col-title">Contacto</p>
        <div class="footer-contact-row">${ICONS.pin}<p>Carrer Sueca, 32 — 46400 Cullera (Valencia)</p></div>
        <div class="footer-contact-row">${ICONS.phone}<div><a href="tel:961730361">961 730 361</a><br><a href="tel:646642082">646 642 082</a></div></div>
        <div class="footer-contact-row">${ICONS.whatsapp}<a href="https://wa.me/34646642082" target="_blank">WhatsApp directo</a></div>
        <div class="footer-contact-row">${ICONS.mail}<a href="mailto:info@autosucro.com">info@autosucro.com</a></div>
      </div>
    </div>
    <div class="footer-bottom">
      <p class="footer-copy">© ${new Date().getFullYear()} Autosucro. Todos los derechos reservados.</p>
      <div class="footer-legal">
        <a href="#">Aviso Legal</a>
        <a href="#">Privacidad</a>
        <a href="#">Cookies</a>
      </div>
    </div>
  </footer>
  <a href="https://wa.me/34646642082" target="_blank" class="wa-float" title="WhatsApp">${ICONS.whatsapp}</a>`;
}

/* ── VEHICLE CARD ── */
function renderVehicleCard(vehicle) {
  const imgSrc = vehicle.image || '';
  const imgEl = imgSrc
    ? `<img src="${imgSrc}" alt="${vehicle.brand} ${vehicle.model}" loading="lazy" onerror="this.parentElement.innerHTML='<div style=width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-2)><svg width=40 height=40 viewBox=\\'0 0 24 24\\' fill=none stroke=#ccc stroke-width=1><rect x=3 y=11 width=18 height=11 rx=2/><path d=\\'M7 11V7a5 5 0 0110 0v4\\'/></svg></div>'">`
    : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-2)">${ICONS.car}</div>`;

  return `
  <a class="vehicle-card${vehicle.sold ? ' sold' : ''}" href="vehiculo.html?id=${vehicle.id}">
    <div class="vehicle-img">
      ${imgEl}
      <span class="v-badge v-badge-${vehicle.sold ? 'off' : 'on'}">${vehicle.sold ? 'Vendido' : 'Disponible'}</span>
    </div>
    <div class="vehicle-body">
      <p class="v-brand">${vehicle.brand}</p>
      <p class="v-model">${vehicle.model}</p>
      <p class="v-meta">${vehicle.year} · ${formatKm(vehicle.km)} · ${vehicle.fuel}</p>
      <div class="v-footer">
        <div>
          <p class="v-price">${formatPrice(vehicle.price)}</p>
          <p class="v-price-note">IVA ${vehicle.iva}</p>
        </div>
        <span class="v-link">Ver detalles →</span>
      </div>
    </div>
  </a>`;
}

/* ── VEHICLE MODAL ── */
function renderVehicleModal(vehicle) {
  const imgSrc = vehicle.image || '';
  const imgEl = imgSrc
    ? `<img src="${imgSrc}" alt="${vehicle.brand} ${vehicle.model}">`
    : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-2)">${ICONS.car}</div>`;

  return `
  <div class="modal-header">
    <h2 class="modal-title">${vehicle.brand} ${vehicle.model}</h2>
    <button class="modal-close" onclick="closeVehicleModal()">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button>
  </div>
  <div class="modal-body">
    <div class="modal-grid">
      <div class="modal-img">${imgEl}</div>
      <div>
        <div class="modal-specs">
          <div class="modal-spec"><p class="modal-spec-label">Marca</p><p class="modal-spec-val">${vehicle.brand}</p></div>
          <div class="modal-spec"><p class="modal-spec-label">Modelo</p><p class="modal-spec-val">${vehicle.model}</p></div>
          <div class="modal-spec"><p class="modal-spec-label">Año</p><p class="modal-spec-val">${vehicle.year}</p></div>
          <div class="modal-spec"><p class="modal-spec-label">Kilómetros</p><p class="modal-spec-val">${formatKm(vehicle.km)}</p></div>
          <div class="modal-spec"><p class="modal-spec-label">Combustible</p><p class="modal-spec-val">${vehicle.fuel}</p></div>
          <div class="modal-spec"><p class="modal-spec-label">Cambio</p><p class="modal-spec-val">${vehicle.transmission}</p></div>
          <div class="modal-spec"><p class="modal-spec-label">Motor</p><p class="modal-spec-val">${vehicle.engine}</p></div>
          <div class="modal-spec"><p class="modal-spec-label">Puertas</p><p class="modal-spec-val">${vehicle.doors}</p></div>
          <div class="modal-spec"><p class="modal-spec-label">Tracción</p><p class="modal-spec-val">${vehicle.traction}</p></div>
          <div class="modal-spec"><p class="modal-spec-label">Tipo</p><p class="modal-spec-val">${vehicle.condition}</p></div>
        </div>
        ${vehicle.highlight ? `<p class="modal-hl"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>${vehicle.highlight}</p>` : ''}
        <p class="modal-price">${formatPrice(vehicle.price)}</p>
        <p class="modal-price-note">IVA ${vehicle.iva}</p>
        <div class="modal-actions">
          <a href="https://wa.me/34646642082?text=${encodeURIComponent('Hola, me interesa el ' + vehicle.brand + ' ' + vehicle.model + ' ' + vehicle.year)}" target="_blank" class="btn btn-dark">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            Preguntar por WhatsApp
          </a>
          <a href="tel:961730361" class="btn btn-dark-outline">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11 19.79 19.79 0 01.22 2.35 2 2 0 012.22.18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92v2z"/></svg>
            Llamar
          </a>
        </div>
      </div>
    </div>
  </div>`;
}

/* ── MOBILE NAV ── */
function initMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');
  const closeBtn  = document.getElementById('mobileNavClose');
  if (hamburger) hamburger.addEventListener('click', () => mobileNav.classList.add('open'));
  if (closeBtn)  closeBtn.addEventListener('click', () => mobileNav.classList.remove('open'));
  if (mobileNav) mobileNav.addEventListener('click', e => { if (e.target === mobileNav) mobileNav.classList.remove('open'); });

  const header = document.getElementById('siteHeader');
  if (header) {
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }
}

/* ── MODAL ── */
function openVehicleModal(id) {
  const vehicle = getVehicles().find(v => v.id === id);
  if (!vehicle) return;
  const overlay  = document.getElementById('vehicleModal');
  const content  = document.getElementById('vehicleModalContent');
  if (overlay && content) {
    content.innerHTML = renderVehicleModal(vehicle);
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}
function closeVehicleModal() {
  const overlay = document.getElementById('vehicleModal');
  if (overlay) { overlay.classList.remove('open'); document.body.style.overflow = ''; }
}

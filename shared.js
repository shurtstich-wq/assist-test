/* shared.js — nav + footer injected on every page */

function renderNav(activePage) {
  const otherPages = [
    { label: 'Work',      href: 'work.html' },
    { label: 'Team',      href: 'team.html' },
    { label: 'About',     href: 'about.html' },
    { label: 'Resources', href: 'resources.html' },
    { label: 'Blog',      href: 'blog.html' },
  ];

  const otherLinks = otherPages.map(p =>
    `<a href="${p.href}" class="${activePage===p.label?'active':''}">${p.label}</a>`
  ).join('');

  const servicesActive = activePage === 'Services' ? 'active' : '';

  const chevron = `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 4L6 8L10 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;

  document.body.insertAdjacentHTML('afterbegin', `
    <div class="mobile-nav" id="mobileNav">
      <button class="mobile-work-toggle" id="mobileWorkToggle" onclick="toggleMobileWork()">
        Services ${chevron}
      </button>
      <div class="mobile-work-submenu" id="mobileWorkSubmenu">
        <a href="emergency-home-repair.html">Emergency Home Repair</a>
        <a href="accessibility.html">Accessibility</a>
        <a href="community-design.html">Community Design</a>
      </div>
      ${otherPages.map(p=>`<a href="${p.href}" class="mobile-nav-link">${p.label}</a>`).join('')}
      <a href="get-involved.html" class="btn-nav">Get Involved</a>
    </div>
    <header>
      <a href="index.html" class="logo" aria-label="ASSIST Community Design Center">
        <img src="logo-subtext.svg" alt="ASSIST Community Design Center" class="logo-img logo-img--full" />
        <img src="logo.svg" alt="ASSIST" class="logo-img logo-img--small" />
      </a>
      <nav>
        <div class="nav-links">
          <div class="nav-dropdown" id="servicesDropdown">
            <button class="nav-dropdown-trigger ${servicesActive}">
              Services ${chevron}
            </button>
            <div class="nav-dropdown-menu">
              <a href="emergency-home-repair.html">Emergency Home Repair</a>
              <div class="dropdown-divider"></div>
              <a href="accessibility.html">Accessibility</a>
              <div class="dropdown-divider"></div>
              <a href="community-design.html">Community Design</a>
            </div>
          </div>
          ${otherLinks}
        </div>
        <a href="get-involved.html" class="btn-nav">Get Involved</a>
        <button class="hamburger" id="hamburgerBtn" onclick="toggleMobileNav()" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </nav>
    </header>
  `);
}

function toggleMobileWork() {
  const btn = document.getElementById('mobileWorkToggle');
  const sub = document.getElementById('mobileWorkSubmenu');
  if (btn && sub) { btn.classList.toggle('open'); sub.classList.toggle('open'); }
}

function toggleMobileNav() {
  const nav    = document.getElementById('mobileNav');
  const btn    = document.getElementById('hamburgerBtn');
  const header = document.querySelector('header');
  if (nav && btn) {
    const opening = !nav.classList.contains('open');
    nav.classList.toggle('open');
    btn.classList.toggle('open');
    document.body.style.overflow = opening ? 'hidden' : '';
    if (header && opening && window.scrollY <= 20) header.classList.add('scrolled');
    else if (header && !opening && window.scrollY <= 20) header.classList.remove('scrolled');
  }
}

document.addEventListener('click', function(e) {
  const dd = document.getElementById('servicesDropdown');
  if (dd && !dd.contains(e.target)) dd.classList.remove('open');
});

(function() {
  const isHeroPage = document.body.classList.contains('hero-page');
  function onScroll() {
    const header = document.querySelector('header');
    if (!header) return;
    if (!isHeroPage || window.scrollY > 20) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  if (!isHeroPage) {
    document.addEventListener('DOMContentLoaded', () => {
      const header = document.querySelector('header');
      if (header) header.classList.add('scrolled');
    });
  }
  onScroll();
})();

function renderFooter() {
  document.body.insertAdjacentHTML('beforeend', `
    <footer>
      <div class="footer-inner">
        <div class="footer-top">
          <div class="footer-logo">
            <a href="index.html" aria-label="ASSIST Community Design Center home">
              <img src="logo-subtext.svg" alt="ASSIST Community Design Center" class="footer-logo-img" />
            </a>
            <p class="footer-tagline" style="margin-top:16px;font-size:14px;line-height:22px;max-width:280px;">Elevating communities by design since 1969.</p>
            <div class="footer-social">
              <a href="https://www.instagram.com/assist.utah/" target="_blank" rel="noopener" aria-label="Instagram"><svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
              <a href="https://www.facebook.com/assistutah" target="_blank" rel="noopener" aria-label="Facebook"><svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
              <a href="https://www.linkedin.com/company/assist-inc-community-design-center/" target="_blank" rel="noopener" aria-label="LinkedIn"><svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
            </div>
          </div>
          <div class="footer-col">
            <h4>Services</h4>
            <a href="emergency-home-repair.html">Emergency Home Repair</a>
            <a href="community-design.html">Community Design</a>
            <a href="accessibility.html">Accessibility</a>
          </div>
          <div class="footer-col">
            <h4>Organization</h4>
            <a href="work.html">Work</a>
            <a href="about.html">About Us</a>
            <a href="team.html">Our Team</a>
            <a href="resources.html">Resources</a>
            <a href="blog.html">Blog</a>
            <a href="get-involved.html">Get Involved</a>
          </div>
          <div class="footer-col">
            <h4>Contact</h4>
            <p>218 E 500 S<br>Salt Lake City, UT 84111</p>
            <a href="tel:8013557085" style="margin-top:10px;">801-355-7085</a>
          </div>
        </div>
        <div class="footer-bottom">
          <p class="footer-copyright">© 2025 ASSIST Community Design Center. All rights reserved.</p>
          <p>Made with care in Salt Lake City.</p>
        </div>
      </div>
    </footer>
  `);
}

// Portfolio grid functions (used by work.html and service pages)
function portfolioGetCols() {
  const w = window.innerWidth;
  if (w <= 480) return 1;
  if (w <= 768) return 2;
  if (w <= 1024) return 3;
  return 4;
}

function portfolioBuildGrid({ containerId, filter, namespace }) {
  const container = document.getElementById(containerId);
  if (!container || typeof PROJECTS === 'undefined') return;

  const filtered = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === filter);
  const cols = portfolioGetCols();

  let html = '';
  for (let i = 0; i < filtered.length; i += cols) {
    const rowProjects = filtered.slice(i, i + cols);
    html += `<div class="proj-row">`;
    rowProjects.forEach(p => {
      html += `
        <div class="proj-card" onclick="portfolioToggleDetail('${namespace}','${p.id}',this)">
          <div class="proj-card-img">
            <img src="${p.images[0]}" alt="${p.title}" loading="lazy"/>
          </div>
          <div class="proj-overlay">
            <div class="proj-overlay-content">
              <div class="proj-overlay-cat">${p.category}</div>
              <div class="proj-overlay-title">${p.title}</div>
              ${p.sqft ? `<div class="proj-overlay-size">${p.sqft}</div>` : ''}
            </div>
          </div>
        </div>`;
    });
    html += `</div>`;
    html += `<div class="proj-detail" id="${namespace}-detail-${Math.floor(i/cols)}"></div>`;
  }
  container.innerHTML = html;
}

function portfolioToggleDetail(namespace, projectId, cardEl) {
  const project = typeof PROJECTS !== 'undefined' ? PROJECTS.find(p => p.id === projectId) : null;
  if (!project) return;

  const allCards = cardEl.closest('[id]').querySelectorAll('.proj-card');
  const allDetails = cardEl.closest('[id]').querySelectorAll('.proj-detail');
  const cardRow = cardEl.parentElement;
  const rowIndex = Array.from(cardRow.parentElement.children).filter(c => c.classList.contains('proj-row')).indexOf(cardRow);
  const detailEl = cardEl.closest('[id]').querySelector(`#${namespace}-detail-${rowIndex}`);

  if (cardEl.classList.contains('active')) {
    cardEl.classList.remove('active');
    if (detailEl) { detailEl.classList.remove('visible'); detailEl.innerHTML = ''; }
    return;
  }

  allCards.forEach(c => c.classList.remove('active'));
  allDetails.forEach(d => { d.classList.remove('visible'); d.innerHTML = ''; });
  cardEl.classList.add('active');

  if (detailEl) {
    const slides = project.images.map((img, i) =>
      `<div class="carousel-slide"><img src="${img}" alt="${project.title} ${i+1}" loading="lazy"/></div>`
    ).join('');
    const dots = project.images.length > 1 ? project.images.map((_, i) =>
      `<button class="carousel-dot ${i===0?'active':''}" onclick="carouselGoTo(this,${i})" aria-label="Photo ${i+1}"></button>`
    ).join('') : '';

    detailEl.innerHTML = `
      <button class="proj-detail-close" onclick="portfolioCloseDetail('${namespace}',${rowIndex})" aria-label="Close">✕</button>
      <div class="proj-carousel">
        <div class="carousel-track" id="${namespace}-track-${projectId}" style="transform:translateX(0)">
          ${slides}
        </div>
        ${project.images.length > 1 ? `
          <button class="carousel-btn prev" onclick="carouselPrev('${namespace}-track-${projectId}','${namespace}-dots-${projectId}')" aria-label="Previous">‹</button>
          <button class="carousel-btn next" onclick="carouselNext('${namespace}-track-${projectId}','${namespace}-dots-${projectId}')" aria-label="Next">›</button>
          <div class="carousel-dots" id="${namespace}-dots-${projectId}">${dots}</div>
        ` : ''}
      </div>
      <div class="proj-detail-content">
        <span class="proj-detail-cat">${project.category}</span>
        <h2 class="proj-detail-title">${project.title}</h2>
        <div class="proj-detail-meta">
          ${project.location ? `<div class="proj-meta-item"><strong>Location</strong>${project.location}</div>` : ''}
          ${project.year ? `<div class="proj-meta-item"><strong>Year</strong>${project.year}</div>` : ''}
          ${project.sqft ? `<div class="proj-meta-item"><strong>Size</strong>${project.sqft}</div>` : ''}
        </div>
        <div class="proj-detail-desc">${project.description}</div>
      </div>`;

    detailEl.classList.add('visible');
    detailEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

function portfolioCloseDetail(namespace, rowIndex) {
  const detailEl = document.getElementById(`${namespace}-detail-${rowIndex}`);
  if (detailEl) { detailEl.classList.remove('visible'); detailEl.innerHTML = ''; }
  document.querySelectorAll('.proj-card.active').forEach(c => c.classList.remove('active'));
}

function carouselGoTo(dotEl, index) {
  const dotsId = dotEl.parentElement.id;
  const trackId = dotsId.replace('-dots-', '-track-');
  const track = document.getElementById(trackId);
  if (!track) return;
  track.style.transform = `translateX(-${index * 100}%)`;
  dotEl.parentElement.querySelectorAll('.carousel-dot').forEach((d, i) => d.classList.toggle('active', i === index));
}

function carouselPrev(trackId, dotsId) {
  const track = document.getElementById(trackId);
  const dots = document.getElementById(dotsId);
  if (!track) return;
  const current = Math.round(Math.abs(parseFloat(track.style.transform.replace('translateX(','').replace(')','').replace('%','')) || 0) / 100);
  const total = track.children.length;
  const next = (current - 1 + total) % total;
  track.style.transform = `translateX(-${next * 100}%)`;
  if (dots) dots.querySelectorAll('.carousel-dot').forEach((d, i) => d.classList.toggle('active', i === next));
}

function carouselNext(trackId, dotsId) {
  const track = document.getElementById(trackId);
  const dots = document.getElementById(dotsId);
  if (!track) return;
  const current = Math.round(Math.abs(parseFloat(track.style.transform.replace('translateX(','').replace(')','').replace('%','')) || 0) / 100);
  const total = track.children.length;
  const next = (current + 1) % total;
  track.style.transform = `translateX(-${next * 100}%)`;
  if (dots) dots.querySelectorAll('.carousel-dot').forEach((d, i) => d.classList.toggle('active', i === next));
}

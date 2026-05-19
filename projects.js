/* projects.js — single source of truth for all project data and shared portfolio UI */

const PROJECTS = [
  {
    id: 'spdc', title: 'Stepping Stones Child Care Center', category: 'Community Design',
    sqft: '? sq ft', year: '?', location: 'St. George, UT',
    description: '<p>Taking a former hotel, Switchpoint and Assist have developed a community for low-income residents. Modifying the hotel rooms into 100 studio apartments and adding amenities for community gatherings has made this property a highly desirable location to live.<br><br>\nSwitchpoint’s Mission is: To empower those in need by addressing the underlying cause of poverty; providing a comprehensive plan, and supporting their journey to self-sufficiency. <br><br>\nSwitchpoint’s Vision: Every individual embodies their worth and value with self-esteem, hope and abilities restored, thriving in affordable housing.\n</p>',
    images: [
      'https://drive.google.com/thumbnail?id=1Sh-6lXN1Lcij2zy5iegn8n2dUZvsTb3d&sz=w1200',
      'https://drive.google.com/thumbnail?id=1s2wO-AEYJangcGF7kmsiByNlOH85vl3_&sz=w1200',
      'https://drive.google.com/thumbnail?id=1wLQYd6EpIGny4p8OVH1BaBMBbSTviXqY&sz=w1200',
      'https://drive.google.com/thumbnail?id=1_SlDSniRMNoZv6Iopr1PsHRef0xvihjh&sz=w1200',
      'https://drive.google.com/thumbnail?id=1YyY-oUJswco9RUQGGNUVZz3nYvgUOwGH&sz=w1200',
      'https://drive.google.com/thumbnail?id=1au8U7HeVvoLpM_nIPyJNnSb7XPCqj7CO&sz=w1200',
      'https://drive.google.com/thumbnail?id=1M4AeAWff19Na1AnYarq4B1kbIfNfdz-x&sz=w1200',
      'https://drive.google.com/thumbnail?id=16wnZBofUiBsI1m7M5t8z-b-m_-h8FWxg&sz=w1200',
      'https://drive.google.com/thumbnail?id=15Vo1VKphkqBFloS3Z76eHMcrqnkOzw0I&sz=w1200'
    ]
  },
  {
    id: 'spfpp2', title: 'Switchpoint Fairpark Phase ll', category: 'Community Design',
    sqft: '4,200 sq ft', year: '2023', location: 'Salt Lake City, UT',
    description: '<p>A community gathering space designed to serve the diverse Glendale neighborhood. The project prioritized flexible, multi-use spaces that can adapt to the community\'s evolving needs.</p>',
    images: [
      'https://drive.google.com/thumbnail?id=1EB9LaqFKkpfD_4xA44-GJC1sVE61a0Fw&sz=w1200',
      'https://drive.google.com/thumbnail?id=1eEJePb9hGOCrymUKjghsgPG6eEVHMTxf&sz=w1200',
      'https://drive.google.com/thumbnail?id=19OQm9GsEXNDoD9ruXGifug8iDMbHJdEs&sz=w1200',
      'https://drive.google.com/thumbnail?id=1W6U8fpRGQRZmzoGQuibLaclH9ZeclF2m&sz=w1200',
      'https://drive.google.com/thumbnail?id=103Q23_CdKqzf3jPimXLDuQs9rKtKfZUe&sz=w1200',
      'https://drive.google.com/thumbnail?id=1xfa6u2bqLv7rkrBbBP_PBfRnfr4qs7qj&sz=w1200',
      'https://drive.google.com/thumbnail?id=1P_q6GdlEChvLsanLwpT42ZbeBe8eXfVX&sz=w1200'
    ]
  },
  {
    id: 'uaf', title: 'Utah Aids Foundation Remodel', category: 'Community Design',
    sqft: '1,100 sq ft', year: '2024', location: 'Salt Lake City, UT',
    description: '<p>Emergency roof replacement and structural repair for a low-income family. Completed within two weeks of the initial assessment.</p>',
    images: [
      'https://drive.google.com/thumbnail?id=1R5ZdqXjQARSbT8MeqlX8zMFuLko34n3w&sz=w1200',
      'https://drive.google.com/thumbnail?id=1umoyuQqInfLnoKOtanqJ8W9r9BDg8PZM&sz=w1200',
      'https://drive.google.com/thumbnail?id=1hygTTFvS02zOi9k7JJQakRvHMD-Qu4o9&sz=w1200',
      'https://drive.google.com/thumbnail?id=1hygTTFvS02zOi9k7JJQakRvHMD-Qu4o9&sz=w1200',
      'https://drive.google.com/thumbnail?id=18PCgPRToAjumzMNm95WqnpTgEhrdfod5&sz=w1200',
      'https://drive.google.com/thumbnail?id=1BQrgGgswB69phOfPxi-SJyqYVYMLtUVn&sz=w1200'
    ]
  },
  {
    id: 'ccomm', title: 'Canal Commons', category: 'Community Design',
    sqft: '1,800 sq ft', year: '2023', location: 'Green River, UT',
    description: '<p>Comprehensive accessibility modifications including grab bars, ramp installation, widened doorways, and improved lighting throughout the home.</p>',
    images: [
      'https://drive.google.com/thumbnail?id=1mQjz4c4opJfPNpJAUV1y_eOwuVCBI28k&sz=w1200',
      'https://drive.google.com/thumbnail?id=1PJPLt9SbU34kIXRJDyZVCDJx9MgsZgHS&sz=w1200',
      'https://drive.google.com/thumbnail?id=1lqQ-CMY482MckSMSOEKuYFkYvlc05_at&sz=w1200',
      'https://drive.google.com/thumbnail?id=1ZM8RCjlDBDkoGNY9vumJxVybP8i3XR7U&sz=w1200',
      'https://drive.google.com/thumbnail?id=1IuGQQi3VR4spvtl-_npH4s8nMuPuabjl&sz=w1200',
      'https://drive.google.com/thumbnail?id=13NULBGTV1wxswnk45mMj0NHgdXpcLnKV&sz=w1200',
      'https://drive.google.com/thumbnail?id=1UeoTUpo988EQ0Lo0MAQNSY3eeS8lMS6V&sz=w1200'
    ]
  },
  {
    id: 'madu', title: 'Murphy ADU', category: 'Community Design',
    sqft: '12 acres', year: '2022', location: 'Salt Lake City, UT',
    description: '<p>A comprehensive neighborhood master plan developed through extensive community engagement. ASSIST facilitated over a dozen community meetings and design workshops.</p>',
    images: [
      'https://drive.google.com/thumbnail?id=1sHekRoVzSTeOwyl4rzbx95s-L6nhiAnF&sz=w1200',
      'https://drive.google.com/thumbnail?id=1I9_Fyd20f6Gd4BJUFTRd6CYum9tsVOwJ&sz=w1200',
      'https://drive.google.com/thumbnail?id=1muio-0EWSncs54x8oegwxTqkt5EQeVlK&sz=w1200',
      'https://drive.google.com/thumbnail?id=14edSO48Hje8E-9EY8mvWanN0NKqJZSkw&sz=w1200',
      'https://drive.google.com/thumbnail?id=1T81vZ6zoXpTno0XbI4B1w218T4pO-k41&sz=w1200',
      'https://drive.google.com/thumbnail?id=1DEIqn6FQXB_KuU_iOASP04syg3iNKCIF&sz=w1200'
    ]
  },
  {
    id: 'spcrc', title: 'Switchpoint Community Resource Center', category: 'Community Design',
    sqft: '950 sq ft', year: '2024', location: 'St. George, UT',
    description: '<p>Emergency repair addressing a burst pipe and faulty wiring. Both issues posed immediate health and safety risks to the family.</p>',
    images: [
      'https://drive.google.com/thumbnail?id=1bnqbncVS4LGAB4BOb3MWNT8WV0mvB7L3&sz=w1200',
      'https://drive.google.com/thumbnail?id=1IXTrb_eDGPmwP8AZix5BMel83IdBqNke&sz=w1200',
      'https://drive.google.com/thumbnail?id=1J7xfySQQ1XQUDLVLYToSQGW1gnusLSvI&sz=w1200',
      'https://drive.google.com/thumbnail?id=1YI19MLIdod3xAGKKZCnxYSBqMywESvOp&sz=w1200',
      'https://drive.google.com/thumbnail?id=1CrqfeUG7Xm3DbX5uIfszExXrAkj5_Wgf&sz=w1200',
      'https://drive.google.com/thumbnail?id=1Uf7-YlESSXXKZWsZkiaAEQ1doqZonrTT&sz=w1200',
      'https://drive.google.com/thumbnail?id=11IRJmlKeTMk9jPSWhcpfJNaDuNt-gV_t&sz=w1200',
      'https://drive.google.com/thumbnail?id=10y8BCPgKrLRWSZvgwyux_PnkWERFCFQj&sz=w1200',
      'https://drive.google.com/thumbnail?id=1FyfJCxMHPkfWEPP2mhfurdC93DrRWzdj&sz=w1200',
      'https://drive.google.com/thumbnail?id=1COfNUE0wj1vWdggSobefnloqV3B_u0kl&sz=w1200',
      'https://drive.google.com/thumbnail?id=1Jb1rc4LgmcBhXwMUJXEnSsT9XEFMChmj&sz=w1200'
    ]
  },
  {
    id: 'sth', title: 'Springdale Town Hall', category: 'Community Design',
    sqft: '18,400 sq ft', year: '2021', location: 'Salt Lake City, UT',
    description: '<p>Affordable multi-family housing providing 24 units for low-income residents. Design prioritizes natural light and shared outdoor space.</p>',
    images: [
      'https://drive.google.com/thumbnail?id=1ti6-WErhB0fTAQ6QpWX2hZ3-5fFMT3GS&sz=w1200',
      'https://drive.google.com/thumbnail?id=1Lw5Dj59b_IbaSC0OQY5bHcwHi3kwipEz&sz=w1200',
      'https://drive.google.com/thumbnail?id=1td7-XyYByJRETicYa9L8Qnwy4oUydMEa&sz=w1200'
    ]
  },
  {
    id: 'tame', title: 'Trinity AME Basement Remodel', category: 'Accessibility',
    sqft: '2,100 sq ft', year: '2024', location: 'Salt Lake City, UT',
    description: '<p>Fall prevention modifications: handrails, grab bars, Non-slip flooring, and improved lighting in the stairwell and master bathroom.</p>',
    images: [
      'https://drive.google.com/thumbnail?id=1gGYGiBym2nbIbQiL7a2bL7NN3mubTJPz&sz=w1200',
      'https://drive.google.com/thumbnail?id=1YmNsVbcpgKGELHIZUsoEuL_tn0LLeBJQ&sz=w1200',
      'https://drive.google.com/thumbnail?id=1SITErSJCjj8s2Z8l-np_R-qC_m5YSQBC&sz=w1200',
      'https://drive.google.com/thumbnail?id=11v8oH-1xV24_mAQ5wz0kfoSZzS-ESwxe&sz=w1200',
      'https://drive.google.com/thumbnail?id=1VhPBJO_LL2CBMyOwLwMXupAUJKwXBVAg&sz=w1200',
      'https://drive.google.com/thumbnail?id=1PYPPI1OP0nHolpS201ZM-7lNJWIC_6v-&sz=w1200'
    ]
  },
  {
    id: 'roofrep', title: 'Roof Repair ', category: 'Emergency Home Repair',
    sqft: 'N/A', year: '2024', location: 'Salt Lake City, UT',
    description: '<p></p>',
    images: [
      'https://drive.google.com/thumbnail?id=1_iG0OL0eJ68b9wr1Gtx5h77_wuOoezDf&sz=w1200',
      'https://drive.google.com/thumbnail?id=1uW6ZLhf7rcNf7XuVokMNncZEo7ajdEcD&sz=w1200'
    ]
  },
  {
    id: 'elecrep', title: 'Electrical Repair', category: 'Emergency Home Repair',
    sqft: 'N/A', year: '2024', location: 'Salt Lake City, UT',
    description: '<p></p>',
    images: [
      'https://drive.google.com/thumbnail?id=1kfMlJ3hYoFW4t1E4tyfAhEdU61PpZmd6&sz=w1200',
      'https://drive.google.com/thumbnail?id=1ZxJ3lRBCFc3H8oENFfBF0qnvBPRgOdLK&sz=w1200'
    ]
  },
  {
    id: 'rampreb', title: 'Ramp Rebuild', category: 'Accessibility',
    sqft: 'N/A', year: '2025', location: 'Salt Lake City, UT',
    description: '<p></p>',
    images: [
      'https://drive.google.com/thumbnail?id=1RypEdCl5ffiNmrxXr11JyPlVm47GDuDp&sz=w1200',
      'https://drive.google.com/thumbnail?id=1ubgFHHnxGgFeYI5KB44Jv8REZJj7mBX9&sz=w1200'
    ]
  },
  {
    id: 'VPL', title: 'Vertical Platform Lift ', category: 'Accessibility',
    sqft: 'N/A', year: '2025', location: 'Salt Lake City, UT',
    description: '<p></p>',
    images: [
      'https://drive.google.com/thumbnail?id=16vZmtREabTbSbfdos1fKn6DLm9U4Afsc&sz=w1200',
      'https://drive.google.com/thumbnail?id=1LGHE3JENJaKhfaWQhznXKvi1mhqM_3nz&sz=w1200'
    ]
  },
  {
    id: 'Entrada', title: 'Entrada Ramp Build', category: 'Accessibility',
    sqft: 'N/A', year: '2025', location: 'Salt Lake City, UT',
    description: '<p>Entrada Institute contacted our Executive Director about the possibility of designing a ramp for their outdoor performance stage. Jason thought it would be even better if our staff took a retreat and went and built it! \n\nSo we closed up the office for a couple of days, drove to Torrey and built a ramp! We dug (really deep) holes, poured cement and hammered our hearts out while building great relationships.\n\n</p>',
    images: [
      'https://drive.google.com/thumbnail?id=1NLSlw5app4PUQ0lVZvLY9pnrxxn3JzEk&sz=w1200',
      'https://drive.google.com/thumbnail?id=1NockGmSL0uS7oHRJ66zdY6U5inKXga1q&sz=w1200',
      'https://drive.google.com/thumbnail?id=1iTFQgUbWmx1yFbw_-hqe5rtT7fyjgLSA&sz=w1200',
      'https://drive.google.com/thumbnail?id=12vx8f410hWRILr73BR9QnKOLFtJx2Dn1&sz=w1200'
    ]
  },
  {
    id: 'Entrada', title: 'Salt Lake Acting Company', category: 'Accessibility',
    sqft: 'N/A', year: '2025', location: 'Salt Lake City, UT',
    description: '<p></p>',
    images: [
      'https://drive.google.com/thumbnail?id=1Lujt_Ee5tuB4nIuy1yfOtc2EG3JVmwYN&sz=w1200'
    ]
  },
  {
    id: 'BTRM', title: 'Accessible Bathroom', category: 'Accessibility',
    sqft: 'N/A', year: '2025', location: 'Salt Lake City, UT',
    description: '<p></p>',
    images: [
      'https://drive.google.com/thumbnail?id=1wDurHvAuGtfY2nQWTZb5_CP-3LmZP3lU&sz=w1200',
      'https://drive.google.com/thumbnail?id=1Um9wyTUCxjx_6iUH3DEXD-qZNvc7vY5w&sz=w1200'
    ]
  },
  {
    id: 'door', title: 'Door Replacement', category: 'Emergency Home Repair',
    sqft: 'N/A', year: '2025', location: 'Salt Lake City, UT',
    description: '<p></p>',
    images: [
      'https://drive.google.com/thumbnail?id=1lNBw3-J12GdHiIkbWC-PVyzBub4DizDL&sz=w1200',
      'https://drive.google.com/thumbnail?id=1qJaHXfzSIUOZSNAlzy7pvCyBF7XkVnWB&sz=w1200'
    ]
  },
  {
    id: 'door', title: 'Structural Repair', category: 'Emergency Home Repair',
    sqft: 'N/A', year: '2025', location: 'Salt Lake City, UT',
    description: '<p></p>',
    images: [
      'https://drive.google.com/thumbnail?id=1BQcL8O6EdI9_S61EnGZJ06sHy2wNY1A8&sz=w1200',
      'https://drive.google.com/thumbnail?id=1uX48rZ1PSYEUB2hOqhS425eULJBwmDC-&sz=w1200'
    ]
  },
  {
    id: 'ark', title: 'Arkansas Build ', category: 'Community Design',
    sqft: '3,000 sq ft', year: '2022', location: 'Arkansas ',
    description: '<p></p>',
    images: [
      'https://drive.google.com/thumbnail?id=11a4fwFenW94KfB30G8vwbx3IQLoL9rkC&sz=w1200',
      'https://drive.google.com/thumbnail?id=19J4amwhTh_l7IEqQcBzEmmCjetDtDqhg&sz=w1200',
      'https://drive.google.com/thumbnail?id=1CgZyex2Tjk6Lscg5zg0FWN0Uv5svUrxp&sz=w1200',
      'https://drive.google.com/thumbnail?id=1QudIVsMct-KilBHmK754I0au2DiSptPK&sz=w1200',
      'https://drive.google.com/thumbnail?id=109xR9KDEOJ_hHne0Dzk8JuQnnPn9BHpt&sz=w1200',
      'https://drive.google.com/thumbnail?id=1xbqjVgUdZzQHKiSE5_inti3fJFyDH9t5&sz=w1200',
      'https://drive.google.com/thumbnail?id=1QI-5WVMLeussP9z5TO9HmpR99J5SysfP&sz=w1200',
      'https://drive.google.com/thumbnail?id=1Z5XmFrORNyBsIGy5LFdsRogY9bS9abKU&sz=w1200'
    ]
  }
];

/* ── SHARED PORTFOLIO GRID BUILDER ──────────────────────────────────────────
   Used by both work.html (full grid) and community-design.html (strip).
───────────────────────────────────────────────────────────────────────────── */

function portfolioGetCols(fixed) {
  if (fixed) return fixed;
  if (window.innerWidth <= 768)  return 2;
  if (window.innerWidth <= 1024) return 3;
  return 4;
}

let _portfolioActive = {};
let _carouselIdx     = {}; // tracks the REAL index (0-based), not the DOM position

function portfolioBuildGrid({ containerId, filter = 'All', cols: fixedCols, namespace = 'pg' }) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';

  const filtered = filter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === filter);

  if (filtered.length === 0) {
    container.innerHTML = '<p style="color:var(--bark);padding:32px 0;">No projects in this category yet.</p>';
    return;
  }

  const cols = portfolioGetCols(fixedCols);

  for (let i = 0; i < filtered.length; i += cols) {
    const rowProjects = filtered.slice(i, i + cols);
    const rowIdx = Math.floor(i / cols);
    const ns = namespace;

    const row = document.createElement('div');
    row.className = 'proj-row';

    rowProjects.forEach(p => {
      const card = document.createElement('div');
      card.className = 'proj-card';
      card.id = `${ns}-card-${p.id}`;
      card.onclick = () => portfolioToggleDetail(p, rowIdx, card, ns);
      card.innerHTML = `
        <div class="proj-card-img">
          <img src="${p.images[0]}" alt="${p.title}" loading="lazy"/>
          <div class="proj-overlay">
            <div class="proj-overlay-content">
              <p class="proj-overlay-title">${p.title}</p>
              <p class="proj-overlay-cat">${p.category}</p>
              <p class="proj-overlay-size">${p.sqft}</p>
            </div>
          </div>
        </div>`;
      row.appendChild(card);
    });

    container.appendChild(row);

    const panel = document.createElement('div');
    panel.className = 'proj-detail';
    panel.id = `${ns}-detail-${rowIdx}`;
    panel.innerHTML = `
      <button class="proj-detail-close" onclick="portfolioCloseDetail('${ns}')">✕</button>
      <div class="proj-carousel" id="${ns}-carousel-${rowIdx}">
        <div class="carousel-track" id="${ns}-track-${rowIdx}"></div>
        <button class="carousel-btn prev" onclick="portfolioCarouselPrev('${ns}',${rowIdx})">&#8249;</button>
        <button class="carousel-btn next" onclick="portfolioCarouselNext('${ns}',${rowIdx})">&#8250;</button>
        <div class="carousel-dots" id="${ns}-dots-${rowIdx}"></div>
        <button class="carousel-expand-btn" onclick="portfolioOpenModal('${ns}',${rowIdx})" title="View fullscreen">
          <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 6V1h5M15 6V1h-5M1 10v5h5M15 10v5h-5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
      <div class="proj-detail-content">
        <span class="proj-detail-cat"  id="${ns}-dcat-${rowIdx}"></span>
        <h2  class="proj-detail-title" id="${ns}-dtitle-${rowIdx}"></h2>
        <div class="proj-detail-meta"  id="${ns}-dmeta-${rowIdx}"></div>
        <div class="proj-detail-desc"  id="${ns}-ddesc-${rowIdx}"></div>
      </div>`;
    container.appendChild(panel);
  }
}

function portfolioToggleDetail(project, rowIdx, cardEl, ns) {
  const state = _portfolioActive[ns];
  if (state && state.card === cardEl) { portfolioCloseDetail(ns); return; }

  portfolioCloseDetail(ns, false);
  _portfolioActive[ns] = { card: cardEl, rowIdx };
  cardEl.classList.add('active');

  document.getElementById(`${ns}-dcat-${rowIdx}`).textContent   = project.category;
  document.getElementById(`${ns}-dtitle-${rowIdx}`).textContent = project.title;
  document.getElementById(`${ns}-ddesc-${rowIdx}`).innerHTML    = project.description;
  document.getElementById(`${ns}-dmeta-${rowIdx}`).innerHTML    = `
    <div class="proj-meta-item"><strong>Size</strong>${project.sqft}</div>
    <div class="proj-meta-item"><strong>Year</strong>${project.year}</div>
    <div class="proj-meta-item"><strong>Location</strong>${project.location}</div>`;

  // Build carousel with clone slides for infinite loop
  _buildInfiniteCarousel(ns, rowIdx, project);

  const panel = document.getElementById(`${ns}-detail-${rowIdx}`);
  panel.classList.add('visible');
  setTimeout(() => panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 60);
}

// ── INFINITE LOOP CAROUSEL ─────────────────────────────────────────────────
// Structure: [clone-of-last] [real-0] [real-1] ... [real-n] [clone-of-first]
// Visual index 0 = DOM position 1 (after the leading clone)

function _buildInfiniteCarousel(ns, rowIdx, project) {
  const track   = document.getElementById(`${ns}-track-${rowIdx}`);
  const dots    = document.getElementById(`${ns}-dots-${rowIdx}`);
  const carousel = document.getElementById(`${ns}-carousel-${rowIdx}`);
  const images  = project.images;
  const total   = images.length;

  track.innerHTML = '';
  dots.innerHTML  = '';
  _carouselIdx[`${ns}-${rowIdx}`] = 0;

  // Build real slides + dots
  const makeSlide = (src, isClone) => {
    const s = document.createElement('div');
    s.className = 'carousel-slide' + (isClone ? ' carousel-clone' : '');
    s.innerHTML = `<img src="${src}" alt="" loading="lazy"/>`;
    return s;
  };

  // Prepend clone of last slide
  track.appendChild(makeSlide(images[total - 1], true));

  // Real slides + dots
  images.forEach((src, i) => {
    track.appendChild(makeSlide(src, false));
    const dot = document.createElement('button');
    dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
    dot.onclick = () => _carouselJumpTo(ns, rowIdx, i);
    dots.appendChild(dot);
  });

  // Append clone of first slide
  track.appendChild(makeSlide(images[0], true));

  const hasMany = total > 1;
  document.querySelector(`#${ns}-carousel-${rowIdx} .carousel-btn.prev`).style.display = hasMany ? 'flex' : 'none';
  document.querySelector(`#${ns}-carousel-${rowIdx} .carousel-btn.next`).style.display = hasMany ? 'flex' : 'none';

  // Set slide widths and start at position 1 (first real slide)
  requestAnimationFrame(() => {
    const w = carousel.offsetWidth;
    Array.from(track.children).forEach(slide => {
      slide.style.width    = `${w}px`;
      slide.style.minWidth = `${w}px`;
    });
    track.style.transition = 'none';
    track.style.transform  = `translateX(-${w}px)`; // position 1 = first real slide
    requestAnimationFrame(() => { track.style.transition = ''; });
    _updateDots(ns, rowIdx, 0);
  });
}

function _getSlideWidth(ns, rowIdx) {
  const carousel = document.getElementById(`${ns}-carousel-${rowIdx}`);
  return carousel ? carousel.offsetWidth : 0;
}

// Jump to a real index (0-based) with smooth animation
function _carouselJumpTo(ns, rowIdx, realIdx) {
  const key = `${ns}-${rowIdx}`;
  _carouselIdx[key] = realIdx;
  const w = _getSlideWidth(ns, rowIdx);
  const track = document.getElementById(`${ns}-track-${rowIdx}`);
  if (!track) return;
  // DOM position = realIdx + 1 (because of leading clone)
  track.style.transform = `translateX(-${(realIdx + 1) * w}px)`;
  _updateDots(ns, rowIdx, realIdx);
}

function _updateDots(ns, rowIdx, realIdx) {
  document.querySelectorAll(`#${ns}-dots-${rowIdx} .carousel-dot`)
    .forEach((d, i) => d.classList.toggle('active', i === realIdx));
}

// ── NAV ───────────────────────────────────────────────────────────────────
// Flag to prevent stacking transitionend calls during a wrap
let _carouselWrapping = {};

function portfolioCarouselNext(ns, rowIdx) {
  if (_carouselWrapping[`${ns}-${rowIdx}`]) return;
  const key   = `${ns}-${rowIdx}`;
  const dots  = document.getElementById(`${ns}-dots-${rowIdx}`);
  const total = dots ? dots.children.length : 1;
  const cur   = _carouselIdx[key] || 0;
  const track = document.getElementById(`${ns}-track-${rowIdx}`);
  const w     = _getSlideWidth(ns, rowIdx);
  if (!track || !w) return;

  const nextDom = cur + 2; // next DOM position (cur+1 is real, +1 for leading clone offset, +1 more = next)
  // Actually: current real index `cur` sits at DOM position `cur+1`
  // Next real index = cur+1, DOM position = cur+2
  const nextReal = (cur + 1) % total;

  if (cur === total - 1) {
    // Going from last real slide → clone-of-first, then teleport
    _carouselWrapping[key] = true;
    track.style.transform = `translateX(-${(total + 1) * w}px)`; // clone-of-first is at position total+1
    _updateDots(ns, rowIdx, 0);

    setTimeout(() => {
      track.style.visibility = 'hidden';
      track.style.transition = 'none';
      track.style.transform  = `translateX(-${w}px)`;
      _carouselIdx[key] = 0;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          track.style.visibility = '';
          track.style.transition = '';
          _carouselWrapping[key] = false;
        });
      });
    }, 380);
  } else {
    _carouselIdx[key] = nextReal;
    track.style.transform = `translateX(-${(nextReal + 1) * w}px)`;
    _updateDots(ns, rowIdx, nextReal);
  }
}

function portfolioCarouselPrev(ns, rowIdx) {
  if (_carouselWrapping[`${ns}-${rowIdx}`]) return;
  const key   = `${ns}-${rowIdx}`;
  const dots  = document.getElementById(`${ns}-dots-${rowIdx}`);
  const total = dots ? dots.children.length : 1;
  const cur   = _carouselIdx[key] || 0;
  const track = document.getElementById(`${ns}-track-${rowIdx}`);
  const w     = _getSlideWidth(ns, rowIdx);
  if (!track || !w) return;

  if (cur === 0) {
    // Going from first real slide → clone-of-last (DOM pos 0), then teleport
    _carouselWrapping[key] = true;
    track.style.transform = `translateX(0px)`; // clone-of-last is at DOM pos 0
    _updateDots(ns, rowIdx, total - 1);

    setTimeout(() => {
      track.style.visibility = 'hidden';
      track.style.transition = 'none';
      track.style.transform  = `translateX(-${total * w}px)`;
      _carouselIdx[key] = total - 1;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          track.style.visibility = '';
          track.style.transition = '';
          _carouselWrapping[key] = false;
        });
      });
    }, 380);
  } else {
    const prevReal = cur - 1;
    _carouselIdx[key] = prevReal;
    track.style.transform = `translateX(-${(prevReal + 1) * w}px)`;
    _updateDots(ns, rowIdx, prevReal);
  }
}

// Dot clicks use this — same as _carouselJumpTo
function portfolioGoToSlide(ns, rowIdx, idx) {
  _carouselJumpTo(ns, rowIdx, idx);
}

function portfolioCloseDetail(ns, clearState = true) {
  document.querySelectorAll('.proj-detail').forEach(p => p.classList.remove('visible'));
  document.querySelectorAll('.proj-card').forEach(c => c.classList.remove('active'));
  if (clearState) delete _portfolioActive[ns];
}

// ── FULLSCREEN MODAL ─────────────────────────────────────────────────────────
let _modalIdx    = 0;
let _modalImages = [];
let _modalWrapping = false;

function portfolioOpenModal(ns, rowIdx) {
  const state = _portfolioActive[ns];
  if (!state) return;

  const project = PROJECTS.find(p => {
    const card = document.getElementById(`${ns}-card-${p.id}`);
    return card && card.classList.contains('active');
  });
  if (!project) return;

  _modalImages = project.images;
  _modalIdx    = _carouselIdx[`${ns}-${rowIdx}`] || 0;

  if (!document.getElementById('carouselModal')) {
    const modal = document.createElement('div');
    modal.id        = 'carouselModal';
    modal.className = 'carousel-modal';
    modal.innerHTML = `
      <button class="carousel-modal-close" onclick="portfolioCloseModal()">✕</button>
      <div class="carousel-modal-inner" id="modalInner">
        <div class="carousel-modal-track" id="modalTrack"></div>
        <button class="carousel-modal-btn prev" id="modalPrev" onclick="portfolioModalPrev()">&#8249;</button>
        <button class="carousel-modal-btn next" id="modalNext" onclick="portfolioModalNext()">&#8250;</button>
        <div class="carousel-modal-dots" id="modalDots"></div>
        <div class="carousel-modal-counter" id="modalCounter"></div>
      </div>`;
    document.body.appendChild(modal);
    modal.addEventListener('click', e => { if (e.target === modal) portfolioCloseModal(); });
  }

  portfolioRenderModal();
  document.getElementById('carouselModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function portfolioRenderModal() {
  const track   = document.getElementById('modalTrack');
  const dots    = document.getElementById('modalDots');
  const counter = document.getElementById('modalCounter');
  const prev    = document.getElementById('modalPrev');
  const next    = document.getElementById('modalNext');
  const inner   = document.getElementById('modalInner');
  const total   = _modalImages.length;

  track.innerHTML = '';
  dots.innerHTML  = '';

  const makeSlide = (src, isClone) => {
    const s = document.createElement('div');
    s.className = 'carousel-modal-slide' + (isClone ? ' carousel-clone' : '');
    s.innerHTML = `<img src="${src}" alt="" loading="lazy"/>`;
    return s;
  };

  // Clone structure for modal too
  track.appendChild(makeSlide(_modalImages[total - 1], true));
  _modalImages.forEach((src, i) => {
    track.appendChild(makeSlide(src, false));
    const dot = document.createElement('button');
    dot.className = 'carousel-modal-dot' + (i === _modalIdx ? ' active' : '');
    dot.onclick = () => portfolioModalGoTo(i);
    dots.appendChild(dot);
  });
  track.appendChild(makeSlide(_modalImages[0], true));

  const hasMany = total > 1;
  prev.style.display = hasMany ? 'flex' : 'none';
  next.style.display = hasMany ? 'flex' : 'none';

  // Position without animation
  requestAnimationFrame(() => {
    const w = inner.offsetWidth;
    Array.from(track.children).forEach(s => { s.style.width = `${w}px`; s.style.minWidth = `${w}px`; });
    track.style.transition = 'none';
    track.style.transform  = `translateX(-${(_modalIdx + 1) * w}px)`;
    requestAnimationFrame(() => { track.style.transition = ''; });
    counter.textContent = `${_modalIdx + 1} / ${total}`;
  });
}

function portfolioModalGoTo(idx) {
  _modalIdx = idx;
  const inner = document.getElementById('modalInner');
  const track = document.getElementById('modalTrack');
  if (!inner || !track) return;
  const w = inner.offsetWidth;
  track.style.transform = `translateX(-${(idx + 1) * w}px)`;
  document.querySelectorAll('#modalDots .carousel-modal-dot')
    .forEach((d, i) => d.classList.toggle('active', i === idx));
  const counter = document.getElementById('modalCounter');
  if (counter) counter.textContent = `${idx + 1} / ${_modalImages.length}`;
}

function portfolioModalPrev() {
  if (_modalWrapping) return;
  const total = _modalImages.length;
  const inner = document.getElementById('modalInner');
  const track = document.getElementById('modalTrack');
  const w = inner.offsetWidth;

  if (_modalIdx === 0) {
    _modalWrapping = true;
    track.style.transform = `translateX(0px)`;
    document.querySelectorAll('#modalDots .carousel-modal-dot')
      .forEach((d, i) => d.classList.toggle('active', i === total - 1));
    document.getElementById('modalCounter').textContent = `${total} / ${total}`;

    setTimeout(() => {
      track.style.visibility = 'hidden';
      track.style.transition = 'none';
      track.style.transform  = `translateX(-${total * w}px)`;
      _modalIdx = total - 1;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          track.style.visibility = '';
          track.style.transition = '';
          _modalWrapping = false;
        });
      });
    }, 380);
  } else {
    _modalIdx--;
    portfolioModalGoTo(_modalIdx);
  }
}

function portfolioModalNext() {
  if (_modalWrapping) return;
  const total = _modalImages.length;
  const inner = document.getElementById('modalInner');
  const track = document.getElementById('modalTrack');
  const w = inner.offsetWidth;

  if (_modalIdx === total - 1) {
    _modalWrapping = true;
    track.style.transform = `translateX(-${(total + 1) * w}px)`;
    document.querySelectorAll('#modalDots .carousel-modal-dot')
      .forEach((d, i) => d.classList.toggle('active', i === 0));
    document.getElementById('modalCounter').textContent = `1 / ${total}`;

    setTimeout(() => {
      track.style.visibility = 'hidden';
      track.style.transition = 'none';
      track.style.transform  = `translateX(-${w}px)`;
      _modalIdx = 0;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          track.style.visibility = '';
          track.style.transition = '';
          _modalWrapping = false;
        });
      });
    }, 380);
  } else {
    _modalIdx++;
    portfolioModalGoTo(_modalIdx);
  }
}

function portfolioCloseModal() {
  const modal = document.getElementById('carouselModal');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  const modal = document.getElementById('carouselModal');
  if (modal && modal.classList.contains('open')) {
    if (e.key === 'ArrowLeft')  portfolioModalPrev();
    if (e.key === 'ArrowRight') portfolioModalNext();
    if (e.key === 'Escape')     portfolioCloseModal();
    return;
  }
  if (e.key === 'Escape') {
    Object.keys(_portfolioActive).forEach(ns => portfolioCloseDetail(ns));
  }
});

window.addEventListener('resize', () => {
  Object.keys(_carouselIdx).forEach(key => {
    const lastDash = key.lastIndexOf('-');
    const ns = key.substring(0, lastDash);
    const rowIdx = key.substring(lastDash + 1);
    const realIdx = _carouselIdx[key];
    const carousel = document.getElementById(`${ns}-carousel-${rowIdx}`);
    const track    = document.getElementById(`${ns}-track-${rowIdx}`);
    if (carousel && track) {
      const w = carousel.offsetWidth;
      Array.from(track.children).forEach(slide => {
        slide.style.width    = `${w}px`;
        slide.style.minWidth = `${w}px`;
      });
      track.style.transition = 'none';
      track.style.transform  = `translateX(-${(realIdx + 1) * w}px)`;
      requestAnimationFrame(() => { track.style.transition = ''; });
    }
  });
  const modal = document.getElementById('carouselModal');
  if (modal && modal.classList.contains('open')) {
    const inner = document.getElementById('modalInner');
    const track = document.getElementById('modalTrack');
    if (inner && track) {
      const w = inner.offsetWidth;
      Array.from(track.children).forEach(s => { s.style.width = `${w}px`; s.style.minWidth = `${w}px`; });
      track.style.transition = 'none';
      track.style.transform  = `translateX(-${(_modalIdx + 1) * w}px)`;
      requestAnimationFrame(() => { track.style.transition = ''; });
    }
  }
});

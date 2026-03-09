(function () {
  const nav = document.getElementById('mainNav');
  const toggle = document.querySelector('.menu-toggle');
  const links = Array.from(document.querySelectorAll('.nav-link'));
  const panels = Array.from(document.querySelectorAll('.tab-panel'));
  const brand = document.querySelector('.brand');
  const yearEl = document.getElementById('year');

  function showTab(tabId, pushHash = true) {
    panels.forEach((p) => p.classList.toggle('active', p.id === tabId));
    links.forEach((l) => l.classList.toggle('active', l.dataset.tab === tabId));

    if (pushHash) {
      if (history.replaceState) history.replaceState(null, '', '#' + tabId);
      else location.hash = tabId;
    }

    if (nav && nav.classList.contains('open')) nav.classList.remove('open');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Recalculate accordion height if an open project exists in the shown tab
    const openCard = document.querySelector('.project-accordion-card.is-open .project-content');
    if (openCard) {
      requestAnimationFrame(() => {
        openCard.style.maxHeight = openCard.scrollHeight + 'px';
      });
    }
  }

  links.forEach((link) => {
    link.addEventListener('click', () => showTab(link.dataset.tab));
  });

  if (brand) {
    brand.addEventListener('click', (e) => {
      e.preventDefault();
      showTab('home');
    });
  }

  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
  }

  const hash = (location.hash || '').replace('#', '');
  if (hash && document.getElementById(hash)) showTab(hash, false);

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // =========================
  // Projects accordion
  // =========================
  const cards = document.querySelectorAll('.project-accordion-card');

  if (cards.length) {
    cards.forEach((card) => {
      const btn = card.querySelector('.project-toggle');
      const content = card.querySelector('.project-content');

      if (!btn || !content) return;

      // Initial state
      if (card.classList.contains('is-open')) {
        content.style.maxHeight = content.scrollHeight + 'px';
        btn.setAttribute('aria-expanded', 'true');
      } else {
        content.style.maxHeight = '0px';
        btn.setAttribute('aria-expanded', 'false');
      }

      btn.addEventListener('click', () => {
        const wasOpen = card.classList.contains('is-open');

        // Close all cards
        cards.forEach((c) => {
          c.classList.remove('is-open');
          const b = c.querySelector('.project-toggle');
          const ct = c.querySelector('.project-content');
          if (b) b.setAttribute('aria-expanded', 'false');
          if (ct) ct.style.maxHeight = '0px';
        });

        // Open clicked card (if it was closed)
        if (!wasOpen) {
          card.classList.add('is-open');
          btn.setAttribute('aria-expanded', 'true');
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    });

    // Recompute open panel height on resize
    window.addEventListener('resize', () => {
      cards.forEach((card) => {
        if (card.classList.contains('is-open')) {
          const content = card.querySelector('.project-content');
          if (content) {
            content.style.maxHeight = content.scrollHeight + 'px';
          }
        }
      });
    });
  }
})();
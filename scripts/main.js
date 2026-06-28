const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const themeMeta = document.querySelector('meta[name="theme-color"]');
const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
const urlTheme = new URLSearchParams(window.location.search).get('theme');

function getPreferredTheme() {
  return mediaQuery.matches ? 'light' : 'dark';
}

function applyTheme(theme) {
  root.dataset.theme = theme;

  if (themeToggle) {
    const isLight = theme === 'light';
    themeToggle.setAttribute('aria-pressed', String(isLight));
    themeToggle.setAttribute('aria-label', isLight ? 'Ativar tema escuro' : 'Ativar tema claro');
  }

  if (themeMeta) {
    themeMeta.setAttribute('content', theme === 'light' ? '#F5F7FC' : '#0B0F1A');
  }
}

const forcedTheme = urlTheme === 'light' || urlTheme === 'dark' ? urlTheme : null;
const storedTheme = localStorage.getItem('mentoria-theme');
applyTheme(forcedTheme || storedTheme || getPreferredTheme());

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const nextTheme = root.dataset.theme === 'light' ? 'dark' : 'light';
    if (forcedTheme) {
      const nextUrl = new URL(window.location.href);
      nextUrl.searchParams.set('theme', nextTheme);
      window.location.href = nextUrl.toString();
      return;
    }
    localStorage.setItem('mentoria-theme', nextTheme);
    applyTheme(nextTheme);
  });
}

mediaQuery.addEventListener('change', (event) => {
  if (forcedTheme) return;
  if (localStorage.getItem('mentoria-theme')) return;
  applyTheme(event.matches ? 'light' : 'dark');
});

document.getElementById('y').textContent = new Date().getFullYear();

document.querySelectorAll('.faq-item').forEach((item) => {
  const btn = item.querySelector('.faq-q');
  const panel = item.querySelector('.faq-a');

  btn.setAttribute('aria-expanded', 'false');
  if (panel) panel.setAttribute('hidden', '');

  btn.addEventListener('click', () => {
    document.querySelectorAll('.faq-item.open').forEach(openItem => {
        if (openItem !== item) {
            openItem.classList.remove('open');
            openItem.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
            openItem.querySelector('.faq-a').setAttribute('hidden', '');
        }
    });

    const isOpen = item.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(isOpen));
    if (panel) {
      if (isOpen) {
        panel.removeAttribute('hidden');
      } else {
        panel.setAttribute('hidden', '');
      }
    }
  });

  btn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      btn.click();
    }
  });
});

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
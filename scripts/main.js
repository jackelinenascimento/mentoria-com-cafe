document.getElementById('y').textContent = new Date().getFullYear();
const btn = document.getElementById('copyBtn');
const keyEl = document.getElementById('pixKey');
const toast = document.getElementById('copyToast');
btn.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(keyEl.textContent.trim());
    toast.classList.remove('opacity-0');
    setTimeout(()=>toast.classList.add('opacity-0'), 1800);
  } catch (e) {
    alert('Não foi possível copiar. Selecione e copie manualmente.');
  }
});

document.querySelectorAll('.faq-item').forEach((item) => {
  const btn = item.querySelector('.faq-q');
  const panel = item.querySelector('.faq-a');

  btn.setAttribute('aria-expanded', 'false');
  if (panel) panel.setAttribute('hidden', '');

  btn.addEventListener('click', () => {
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

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

// QR PIX placeholder (gera imagem se disponível)
const qrContainer = document.getElementById('qrPix');
if (qrContainer) {
  const img = document.createElement('img');
  img.src = 'assets/qrpix.png';
  img.alt = 'QR Code Pix';
  img.className = 'mx-auto rounded-xl border border-[color:var(--line)]';
  qrContainer.appendChild(img);
}

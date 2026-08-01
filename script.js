function toggleMenu() {
  const nav = document.getElementById('nav-links');
  nav.classList.toggle('active');
}

function toggleFaq(button) {
  const item = button.parentElement;
  const wasOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach((el) => el.classList.remove('open'));
  if (!wasOpen) item.classList.add('open');
}

const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.product-card');
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(item => item.classList.remove('active'));
  button.classList.add('active');
  const chosen = button.dataset.filter;
  cards.forEach(card => card.hidden = chosen !== 'all' && card.dataset.category !== chosen);
}));
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('mainNav');
menuToggle.addEventListener('click', () => nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('cartButton').addEventListener('click', () => {
  const toast = document.getElementById('toast');
  toast.textContent = 'Your shopping bag will be activated when products and checkout are connected.';
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 2800);
});

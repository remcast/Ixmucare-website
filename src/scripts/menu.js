// Capturamos el botón y el contenedor del menú móvil
const menuButton = document.querySelector('.menu');
const mobileMenu = document.getElementById('mobile-menu');

menuButton?.addEventListener('click', () => {
  // Lógica de accesibilidad (la que tú ya hiciste)
  const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', `${!isExpanded}`);

  // Lógica visual: Quitar o poner la clase 'hidden' y 'flex' de Tailwind
  mobileMenu?.classList.toggle('hidden');
  mobileMenu?.classList.toggle('flex');
});
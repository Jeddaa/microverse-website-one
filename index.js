const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const navLInk = document.querySelectorAll('.nav-link');

function show() {
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
}

function close() {
  mainMenu.style.top = '-100%';
}
openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);
navLInk.forEach((n) => n.addEventListener('click', close));

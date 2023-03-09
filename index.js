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

// form validation
const EmailInput = document.getElementById('email-address');
const Form = document.getElementById('contact-form');
const ErrorMessage = document.getElementById('error-message');

Form.addEventListener('submit', (e) => {
  if (EmailInput.value !== EmailInput.value.toLowerCase()) {
    e.preventDefault();
    ErrorMessage.textContent = 'Please make sure your email is in lower case';
  }
});

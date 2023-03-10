/* eslint-disable no-unused-vars */
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

const popupProjects = [
  {
    id: 1,
    title: 'Tonic',
    canopyList: ['CANOPY', 'Back End Dev', '2015'],
    mobileImag: './icons/tonic1.png',
    desktopImg: './icons/newtonic1.png',
    mobileTexts:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    desktopTexts:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    langs: ['html', 'css', 'javascript'],
    desktopLangs: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstrap'],
    visitLive: 'https://www.github.com/jeddaa',
    viewSrc: 'https://www.github.com/jeddaa',
  },
  {
    id: 2,
    title: 'Multi-Post Stories',
    canopyList: ['CANOPY', 'Back End Dev', '2015'],
    mobileImag: './icons/multipost1.png',
    desktopImg: './icons/multipost2.png',
    mobileTexts:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    desktopTexts:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    langs: ['html', 'css', 'javascript'],
    desktopLangs: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstrap'],
    visitLive: 'https://www.github.com/jeddaa',
    viewSrc: 'https://www.github.com/jeddaa',
  },
  {
    id: 3,
    title: 'Tonic',
    canopyList: ['CANOPY', 'Back End Dev', '2015'],
    mobileImag: './icons/tonic2.png',
    desktopImg: './icons/tonic1.png',
    mobileTexts:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    desktopTexts:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    langs: ['html', 'css', 'javascript'],
    desktopLangs: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstrap'],
    visitLive: 'https://www.github.com/jeddaa',
    viewSrc: 'https://www.github.com/jeddaa',
  },
  {
    id: 4,
    title: 'Multi-Post Stories',
    canopyList: ['CANOPY', 'Back End Dev', '2015'],
    mobileImag: './icons/multipost2.png',
    desktopImg: './icons/multipost1.png',
    mobileTexts:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    desktopTexts:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    langs: ['html', 'css', 'javascript'],
    desktopLangs: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstrap'],
    visitLive: 'https://www.github.com/jeddaa',
    viewSrc: 'https://www.github.com/jeddaa',
  },
];

const modalProjectSection = document.querySelector('.workSection');
const body = document.querySelector('body');

const opentesting = document.querySelector('#opentesting');
const closetesting = document.querySelector('#modal-close');

function displayModal(id) {
  const bg = document.createElement('div');
  bg.className = 'modal-overlay';
  body.appendChild(bg);
  modalProjectSection.style.display = 'block';
  modalProjectSection.innerHTML = `
          <div class="modal-header"><h2 id="" class="modal-text-header">${popupProjects[id].title}</h2>
          <ul id="modal-close"  style="background-color: white">&times;</ul></div>
          <div class="">
            <ul class="modal-canopy-list">
            ${popupProjects[id].canopyList.map((canopy) => `<li>${canopy}</li>`).join('')}
            </ul>
          </div>
          <div class="modal-mobile-img"><img src="${popupProjects[id].mobileImag} " /></div>
          <div class="modal-desktop-img"><img src="${popupProjects[id].desktopImg} " /></div>
          <div class="modal-desktop">
            <div class="modal-texts">
              <p class="modal-mobile-texts">${popupProjects[id].mobileTexts}</p>
              <p class="modal-desktop-texts">${popupProjects[id].desktopTexts}</p>
            </div>
            <div class="modal-desktop2">
              <ul class="modal-mobile-lang">
              ${popupProjects[id].langs.map((lang) => `<li class="">${lang}</li>`).join('')}
              </ul>
              <ul class="modal-desktop-lang">
              ${popupProjects[id].desktopLangs.map((lang) => `<li class="">${lang}</li>`).join('')}
              </ul>
              <hr class="modal-line-break">
              <div class="modal-button-div">
                <button class="modal-button" type="button" class="s"> <a href="${popupProjects[id].visitLive}"> See Live </a><img src="./icons/Icon - Export.svg"</button>
                <button class="modal-button" type="button" class="s"> <a href="${popupProjects[id].viewSrc}"> See Source  </a><img src="./icons/github.png"</button>
              </div>
            </div>
          </div>
  `;
  const closeModal = document.querySelector('#modal-close');
  closeModal.addEventListener('click', () => {
    modalProjectSection.style.display = 'none';
  });
}

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

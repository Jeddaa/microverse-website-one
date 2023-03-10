/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-unresolved
// import 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js';

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

const mobileProject = [
  {
    title: 'Tonic',
    mobileImag: './icons/tonic1.png',
  },
  {
    title: 'Multi-Post Stories',
    mobileImag: './icons/multipost1.png',
  },
  {
    title: 'Tonic',
    mobileImag: './icons/tonic2.png',
  },
  {
    title: 'Multi-Post Stories',
    mobileImag: './icons/multipost2.png',
  },
];

const workCards = document.querySelector('.works');
// const body = document.querySelector('body');
// mobileworkCards.className = 'mobile-work-card';

function createMobileSection(project) {
  for (let i = 0; i < 4; i += 1) {
    const div = document.createElement('div');
    div.className = 'work-cards tonic';
    div.innerHTML = `
    <div class="mobile-work-img"><img class="mobile-work-img" src="
    ${project[i].mobileImag}" alt="Work card image" /></div>
        <div class="work-cards-text">
        <div class="desktop-work-img"><img src="${project[i].desktopImg}" alt="tonic image" /></div>
          <h2 id="h-tag" class="mobile-multipost">
            ${project[i].title} <br />
            Stories
          </h2>
          <div class="mobile-multipost">
            <ul class="canopy-list">
              <ol class="canopy">
                CANOPY
              </ol>
              <div class="circle"></div>
              <li>Back End Dev</li>
              <div class="circle"></div>
              <li>2015</li>
            </ul>
          </div>
          <div class="aboutme-intro mobile-multipost">
            <p id="p-tag">A daily selection of privately personalized reads; no accounts or sign-ups required.</p>
          </div>
          <ul class="small-langul mobile-multipost">
            <li class="small-langli">html</li>
            <li class="small-langli">css</li>
            <li class="small-langli">javascript</li>
          </ul>
          <div>
            <button id="mobile4" onclick="displayModal(${i})" type="button" class="seeproject mobile-multipost active">See Project</button>
          </div>
        </div>
          `;
    workCards.appendChild(div);
  }
}

const desktopProject = [
  {
    desktopTitle: 'Tonic',
    desktopImg: './icons/newtonic1.png',
    desktopTexts: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    desktopLangs: ['html', 'Ruby on rails', 'css'],
  },
  {
    desktopTitle: 'Multi-Post Stories',
    desktopCanopyList: ['Full Stack Dev', '2015'],
    desktopImg: './icons/multipost2.png',
    desktopTexts: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    desktopLangs: ['html', 'Ruby on rails', 'css', 'javascript'],
  },
  {
    desktopTitle: 'Facebook 360',
    desktopCanopyList: ['Full Stack Dev', '2015'],
    desktopImg: './icons/tonic1.png',
    desktopTexts: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    desktopLangs: ['html', 'Ruby on rails', 'css', 'javascript'],
  },
  {
    desktopTitle: 'Uber Navigation',
    desktopCanopyList: ['Lead Developer', '2018'],
    desktopImg: './icons/multipost1.png',
    desktopTexts: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    desktopLangs: ['html', 'Ruby on rails', 'css', 'javascript'],
  },
];

function createDesktopSection(project) {
  const div = document.createElement('div');
  div.className = 'works';
  div.innerHTML = `
      <div class="work-cards tonic">
        <div class="desktop-work-img"><img src="${project[0].desktopImg}" alt="tonic image" /></div>
        <div class="work-cards-text">
          <h2 id="h-tag">${project[0].desktopTitle}</h2>
          <div class="desktop-multipost">
            <ul class="canopy-list">
              <ol class="canopy">
                CANOPY
              </ol>
              <div class="circle"></div>
              <li>Back End Dev</li>
              <div class="circle"></div>
              <li>2015</li>
            </ul>
          </div>
          <div class="aboutme-intro desktop-multipost">
            <p id="p-tag">A daily selection of privately personalized reads; no accounts or sign-ups required.</p>
          </div>
          <ul class="small-langul desktop-multipost">
            <li class="small-langli">html</li>
            <li class="small-langli">css</li>
            <li class="small-langli">javascript</li>
          </ul>
          <div class="seebutton-div">
            <button id="desktop1" onclick="displayModal(0)" type="button" class="seeproject desktop-multipost active">See Project</button>
          </div>
        </div>
      </div>
      <div class="work-cards multipost two">
        <div class="desktop-work-img"><img src="icons/multipost2.png" alt="Work card image" /></div>
        <div class="work-cards-text">
          <h2 id="h-tag">${project[1].desktopTitle}</h2>
          <div class="desktop-multipost">
            <ul class="canopy-list">
              <ol class="canopy">
                FACEBOOK
              </ol>
              <div class="circle"></div>
              <li>${project[1].desktopCanopyList[0]}</li>
              <div class="circle"></div>
                <li>${project[1].desktopCanopyList[1]}</li>
            </ul>
          </div>
          <div class="aboutme-intro desktop-multipost">
            <p id="p-tag"> ${project[1].desktopTexts}</p>
          </div>
          <ul class="small-langul desktop-multipost">
            <li class="small-langli">${project[1].desktopLangs[0]}</li>
            <li class="small-langli">${project[1].desktopLangs[1]}</li>
            <li class="small-langli">${project[1].desktopLangs[2]}</li>
            <li class="small-langli">${project[1].desktopLangs[3]}</li>
          </ul>
          <div>
            <button id="desktop2" onclick="displayModal(1)" type="button" class="seeproject desktop-multipost active">See Project</button>
          </div>
        </div>
      </div>
      <div class="work-cards facebook">
        <div class="desktop-work-img"><img src="${project[2].desktopImg}" alt="tonic image" /></div>
        <div class="work-cards-text">
          <h2 id="h-tag" class="desktop-multipost">${project[2].desktopTitle}</h2>
          <div class="desktop-multipost">
            <ul class="canopy-list">
              <ol class="canopy">
                FACEBOOK
              </ol>
              <div class="circle"></div>
              <li>${project[2].desktopCanopyList[0]}</li>
              <div class="circle"></div>
                <li>${project[2].desktopCanopyList[1]}</li>
            </ul>
          </div>
          <div class="aboutme-intro desktop-multipost">
            <p id="p-tag">Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.</p>
          </div>
          <ul class="small-langul desktop-multipost">
           <li class="small-langli">${project[2].desktopLangs[0]}</li>
           <li class="small-langli">${project[2].desktopLangs[1]}</li>
            <li class="small-langli">${project[2].desktopLangs[2]}</li>
            <li class="small-langli">${project[2].desktopLangs[3]}</li>
          </ul>
          <div>
            <button id="desktop3" onclick="displayModal(2)" type="button" class="seeproject facebook-btn desktop-multipost active">See Project</button>
          </div>
        </div>
      </div>
      <div class="work-cards uber two">
        <div class="desktop-work-img"><img src="${project[3].desktopImg}" alt="tonic image" /></div>
        <div class="work-cards-text">
          <h2 id="h-tag" class="desktop-multipost">${project[3].desktopTitle}</h2>
          <div class="desktop-multipost">
            <ul class="canopy-list">
              <ol class="canopy">
                Uber
              </ol>
              <div class="circle"></div>
              <li>${project[3].desktopCanopyList[0]}</li>
              <div class="circle"></div>
                <li>${project[3].desktopCanopyList[1]}</li>
            </ul>
          </div>
          <div class="aboutme-intro desktop-multipost">
            <p id="p-tag">${project[3].desktopTexts}.</p>
          </div>
          <ul class="small-langul desktop-multipost">
          <li class="small-langli">${project[3].desktopLangs[0]}</li>
           <li class="small-langli">${project[3].desktopLangs[1]}</li>
            <li class="small-langli">${project[3].desktopLangs[2]}</li>
            <li class="small-langli">${project[3].desktopLangs[3]}</li>
          </ul>
          </ul>
          <div>
            <button id="desktop4" onclick="displayModal(3)" type="button" class="seeproject desktop-multipost active">See Project</button>
          </div>
        </div>
      </div>
    </section>
          `;
  workCards.appendChild(div);
}

function testing() {
  if (window.innerWidth < 768) {
    window.addEventListener('load', createMobileSection(mobileProject));
  }
  if (window.innerWidth >= 768) {
    window.addEventListener('load', createDesktopSection(desktopProject));
  }
  // window.location.reload();
  setTimeout(() => {
    document.location.reload();
  }, 10000);
}
// const events = ['resize', 'orientationchange', 'load', 'reload'];
testing();
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
    body.removeChild(bg);
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

const named = document.getElementById('name');
const email = document.getElementById('email-address');
const message = document.getElementById('mssg');

const inputField = [named, email, message];

inputField.forEach((item) => {
  item.addEventListener('input', () => {
    const data = {
      name: named.value,
      email: email.value,
      message: message.value,
    };
  });
localStorage.setItem('client-data', JSON.stringify(data));
});

const dataSaved = JSON.parse(localStorage.getItem('client-data'));

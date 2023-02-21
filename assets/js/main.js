document.addEventListener('DOMContentLoaded', function() {

// Start Burger menu

document.getElementById('burger').addEventListener('click', function () {
  document.querySelector('header').classList.toggle('open');   
})
document.querySelector('.nav-list').addEventListener('click', function () {
  document.querySelector('header').classList.toggle('open');
})

// End Burger menu

// Start language

const allLangs = ['ru','ua','en','de'];
let currentLang = localStorage.getItem('language') || checkBrowserLang() || 'de';
const langButtons = document.querySelectorAll("[data-btn]");
const currentPathName = window.location.pathname;
let currentText = {};

const homeTexts = {
  "menu_header_profile": {
    ru: "Профиль",
    ua: "Профіль",
    en: "Profile",
    de: "Profil",
  },
  "menu_header_about_me": {
    ru: "Обо мне",
    ua: "Про мене",
    en: "About Me",
    de: "Über mich",
  },
  "menu_header_skills": {
    ru: "Навыки",
    ua: "Навички",
    en: "Skills",
    de: "Fähigkeiten",
  },
  "menu_header_code": {
    ru: "Код",
    ua: "Код",
    en: "Code",
    de: "Code",
  },
  "menu_header_education": {
    ru: "Образование",
    ua: "Освіта",
    en: "Education",
    de: "Ausbildung",
  },
  "menu_header_projects": {
    ru: "Проекты",
    ua: "Проекти",
    en: "Projects",
    de: "Projekte",
  },
  "menu_header_languages": {
    ru: "Языки",
    ua: "Мови",
    en: "Languages",
    de: "Sprachen",
  },
  "menu_header_contacts": {
    ru: "Контакты",
    ua: "Контакти",
    en: "Contacts",
    de: "Kontakte",
  },
  "home_lang-select": {
    ru: "Ru",
    ua: "Ua",
    en: "En",
    de: "De",
  },
  
  "home_h1_section-title": {
    ru: "Луговой Назарий",
    ua: "Луговий Назарій",
    en: "Luhovyi Nazarii",
    de: "Luhovyi Nazarii",
  },
};

const homeFlag = {
  "home_lang-select-flag": {
    ru: 'background-image: url("assets/img/ru.jpg");',
    ua: 'background-image: url("assets/img/ua.jpg");',
    en: 'background-image: url("assets/img/usa.jpg");',
    de: 'background-image: url("assets/img/de.jpg");',
  },
};

/* const anotherTexts = {
  "another_h1_section-title": {
    ru: "Луговой Назарий aRu",
    ua: "Луговий Назарій aUa",
    en: "Luhovyi Nazarii aEn",
    de: "Luhovyi Nazarii aDe",
  },
}; */

function checkPagePathName() {
  switch (currentPathName) {
    case "/index.html":
      currentText = homeTexts;
      break;
    case "/another_page.html":
      currentText = anotherTexts;
      break;

    default:
      currentText = homeTexts;
      break;
  }
}
checkPagePathName();

function changeLang() {
  for (const key in currentText) {
    const elem = document.querySelector(`[data-lang=${key}]`);
    const elem1 = document.querySelector('.flag_img');
    if(elem){
      elem.textContent = currentText[key][currentLang];
    }
  }  
}
changeLang();

function changeFlag() {
  for (const key in homeFlag) {
    const elem = document.querySelector(`[data-lang=${key}]`);
    const elem1 = document.querySelector('.flag_img');
    if(elem){
      elem1.style.cssText = homeFlag[key][currentLang];
    }
  }  
}
changeFlag();

langButtons.forEach((btn)=>{
  btn.addEventListener('click',(event)=>{
    currentLang = event.target.dataset.btn;
    localStorage.setItem('language', event.target.dataset.btn)
    resetActiveClass(langButtons, 'lang-btn-active');
    btn.classList.add('lang-btn-active');
    changeLang();
    changeFlag();
  });
});

function resetActiveClass(arr, activeClass) {
  arr.forEach(elem=>{
    elem.classList.remove(activeClass)
  });
}

function checkActiveLangButton() {
  switch (currentLang) {
    case "ru":
      document.querySelector('[data-btn="ru"]').classList.add('lang-btn-active');
      break;
    case "en":
      document.querySelector('[data-btn="en"]').classList.add('lang-btn-active');
      break;
    case "ua":
      document.querySelector('[data-btn="ua"]').classList.add('lang-btn-active');
      break;
    case "de":
      document.querySelector('[data-btn="de"]').classList.add('lang-btn-active');
      break;  
    default:
      document.querySelector('[data-btn="de"]').classList.add('lang-btn-active');
      break;
  }
}
checkActiveLangButton();

function checkBrowserLang() {
  const navLang = navigator.language.slice(0,2).toLocaleLowerCase();
  const result = allLangs.some(elem=>{
    return elem === navLang;
  })

  if(result){
    return navLang
  }
}

// End language
// Start language select

function select () {
  let selectHeader = document.querySelectorAll('.container-lang-select-header');

  selectHeader.forEach(item=>{
    item.addEventListener('click', function(){
      this.parentElement.classList.toggle('is-active');
    })
  })

  let selectBody = document.querySelectorAll('.container-lang-select-body');

  selectBody.forEach(item=>{
    item.addEventListener('click', function(){
      this.parentElement.classList.toggle('is-active');
    })
  })

};
select();

// End language select



})
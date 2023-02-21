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
  "home_lang-select": {
    ru: "Ru",
    ua: "Ua",
    en: "En",
    de: "De",
  },
  
  "home_h1_section-title": {
    ru: "Луговой Назарий Ru",
    ua: "Луговий Назарій Ua",
    en: "Luhovyi Nazarii En",
    de: "Luhovyi Nazarii De",
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

const anotherTexts = {
  "another_h1_section-title": {
    ru: "Луговой Назарий aRu",
    ua: "Луговий Назарій aUa",
    en: "Luhovyi Nazarii aEn",
    de: "Luhovyi Nazarii aDe",
  },
};

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
      // elem1.style.cssText = homeFlag[key][currentLang];
      // console.log(anotherTexts[key][currentLang])
    }
  }  
}
changeLang();

function changeFlag() {
  for (const key in homeFlag) {
    const elem = document.querySelector(`[data-lang=${key}]`);
    const elem1 = document.querySelector('.flag_img');
    if(elem){
      // elem.textContent = currentText[key][currentLang];
      elem1.style.cssText = homeFlag[key][currentLang];
      // console.log(homeFlag[key][currentLang])
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
      // document.querySelector('flag').classList.add('flag_de');
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



})
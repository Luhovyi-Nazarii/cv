document.addEventListener('DOMContentLoaded', function() {
document.getElementById('burger').addEventListener('click', function () {
  document.querySelector('header').classList.toggle('open');   
})
document.querySelector('.nav-list').addEventListener('click', function () {
  document.querySelector('header').classList.toggle('open');
})



const allLangs = ['ru','ua','en','de'];
let currentLang = 'de';
const langButtons = document.querySelectorAll("[data-btn]");
const currentPathName = window.location.pathname;
let currentTextObject = {};

const homeTexts = {
  "h1_section-title": {
    ru: "Луговой Назарий Ru",
    ua: "Луговий Назарій Ua",
    en: "Luhovyi Nazarii En",
    de: "Luhovyi Nazarii De",
  },
};

const anotherTexts = {
  "h1_section-title": {
    ru: "Луговой Назарий aRu",
    ua: "Луговий Назарій aUa",
    en: "Luhovyi Nazarii aEn",
    de: "Luhovyi Nazarii aDe",
  },
};
    
// console.log(currentPathName);

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













})
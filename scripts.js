const toggleMenuElement = document.getElementById('toggle-menu');
const mainMenuElement = document.getElementById('main-menu');
const titleElement = document.getElementById('title');
const subtitleElement= document.getElementById('subtitle');
const logoElement = document.getElementById('logo');

toggleMenuElement.addEventListener('click', () => {
    mainMenuElement.classList.toggle('main-menu--show');
});

toggleMenuElement.addEventListener('click', () => {
    titleElement.classList.toggle('title-show');
});

toggleMenuElement.addEventListener('click', () => {
    subtitleElement.classList.toggle('subtitle');
});

toggleMenuElement.addEventListener('click', () => {
    logoElement.classList.toggle('logo-show');
});

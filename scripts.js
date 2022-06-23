const toggleMenuElement = document.getElementById('toggle-menu');
const mainMenuElement = document.getElementById('main-menu');
const titleElement = document.getElementById('title');

toggleMenuElement.addEventListener('click', () => {
    mainMenuElement.classList.toggle('main-menu--show');
});

toggleMenuElement.addEventListener('click', () => {
    titleElement.classList.toggle('title-show');
});
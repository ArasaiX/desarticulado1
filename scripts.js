const toggleMenuElement = document.getElementById('toggle-menu');
const mainMenuElement = document.getElementById('main-menu');
const titleElement = document.getElementById('title');
const subtitleElement= document.getElementById('subtitle');
const logoElement = document.getElementById('logo');
const buttonColor = document.getElementById('buttonColor');
var on = false;


function changeColor(){
    if (on === false){
        document.querySelector("h1").className = "h1Change";
        document.getElementById("text-a").className =  "textChange";
        on = true;
    } else {
        document.querySelector("h1").className = "h1";
        document.getElementById("text-a").className =  "text-a";
        on = false;
    }
    
}

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

buttonColor.addEventListener("click",() => {
    changeColor();
});
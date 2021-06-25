//Selectors
const navMenu = document.querySelector('.Nav-menu')
const navBtn = document.querySelector('.Nav-function-toggle')
const closeBtn = document.querySelector('.Nav-menu-toggle')
//Show menu
if(navBtn) {
    navBtn.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
//Close menu
if(closeBtn) {
    closeBtn.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
//Close menu when clicked the menu links
const navMenuLink = document.querySelectorAll('.Nav-menu-link')
navMenuLink.forEach(element => {
    element.addEventListener('click', linkAction)
});
function linkAction() {
    navMenu.classList.remove('show-menu')
}
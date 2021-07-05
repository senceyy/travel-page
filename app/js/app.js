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
//Change background header when scroll the page
window.addEventListener('scroll', scrollHeader)
function scrollHeader(){
    const header = document.querySelector('.Header')
    // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
    
}

// Initialize Swiper 
    
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true  
}); 

//Video
const videoFile = document.getElementById('video-file'),
      videoButton = document.getElementById('video-button'),
      videoIcon = document.getElementById('video-icon')
function playPause() {
    if(videoFile.paused) {
        videoFile.play()
        //Remove and change the icon
        videoIcon.classList.add('ri-pause-line')
        videoIcon.classList.remove('ri-play-fill')
    } else {
        videoFile.pause()
        videoIcon.classList.add('ri-play-fill')
        videoIcon.classList.remove('ri-pause-line')
    }
}
videoButton.addEventListener('click', playPause)
function finalVideo() {
    // When the video is end then change the icon
    videoIcon.classList.add('ri-play-fill')
    videoIcon.classList.remove('ri-pause-line')

}
videoFile.addEventListener('ended', finalVideo)
const menuBtn = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('#mobile-menu');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
if(!menuOpen) {
    menuBtn.classList.add('open');
    mobileMenu.classList.add('open');
    menuOpen = true;
} else {
    menuBtn.classList.remove('open');
    mobileMenu.classList.remove('open');
    menuOpen = false;
}
});
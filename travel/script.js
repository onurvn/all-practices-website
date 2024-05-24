const header = document.querySelector("header");
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0)
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fafa-bars');
    navbar.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('fafa-bars');
    navbar.classList.remove('open');
};
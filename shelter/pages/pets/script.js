// burger menu

const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav-box');
const back = document.querySelector('.menu-back');
const navlist = document.querySelector('.nav-list');
const body = document.querySelector('body');

navlist.addEventListener("click", hiddenMenu);


menuBtn.addEventListener('click', function() {
    menuBtn.classList.toggle('active');
    nav.classList.toggle('active');
    back.classList.toggle('active');
    body.classList.toggle('modal-open');
})

function hiddenMenu() {
    menuBtn.classList.remove('active');
    nav.classList.remove('active');
    back.classList.remove('active');
    body.classList.remove('modal-open');
}

document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('click', (ev) => {
        const target = ev.target;
        if (!target.closest('.nav-item') && !target.closest('.menu-btn')) {
            hiddenMenu();
        }
    });
});
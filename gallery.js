const miniImageFirst = document.querySelector('.imgs-container .img-mini-card:first-child');
// const miniImageSecond = document.querySelector('.imgs-container .img-mini-card:second-child');

miniImageFirst.addEventListener('click', function () {
    this.classList.toggle('big-card');
})
// miniImageSecond.addEventListener('click', function () {
//     this.classList.toggle('big-card');
// })


// hamburger menu
const burgerBtn = document.querySelector('.burger-menu'),
    topLine = document.querySelector('.burger-menu .top-line'),
    centerLine = document.querySelector('.burger-menu .center-line'),
    bottomLine = document.querySelector('.burger-menu .bottom-line'),
    burgerNavCard = document.querySelector('header nav');

burgerBtn.addEventListener('click', () => {
    topLine.classList.toggle('backslash');
    centerLine.classList.toggle('no-width');
    bottomLine.classList.toggle('forward-slash');
    burgerNavCard.classList.toggle('hide-nav');
})
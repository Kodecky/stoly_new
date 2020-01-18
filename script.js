// icons section button action
const toolsBtn = document.querySelector('.tools-icon .icon-btn'),
    calendarBtn = document.querySelector('.calendar-icon .icon-btn'),
    satisfactionBtn = document.querySelector('.handshake-icon .icon-btn'),
    toolsIconCard = document.querySelector('.tools-icon'),
    toolsCard = document.querySelector('.tools'),
    calendarIconCard = document.querySelector('.calendar-icon'),
    calendarCard = document.querySelector('.calendar'),
    handshakeIconCard = document.querySelector('.handshake-icon'),
    satisfactionCard = document.querySelector('.satisfaction');


toolsBtn.addEventListener('click', () => {
    toolsIconCard.classList.toggle('hide');
    toolsBtn.classList.toggle('hide');
    toolsCard.classList.toggle('show');
})

calendarBtn.addEventListener('click', () => {
    calendarIconCard.classList.toggle('hide');
    calendarBtn.classList.toggle('hide');
    calendarCard.classList.toggle('show');
})

satisfactionBtn.addEventListener('click', () => {
    handshakeIconCard.classList.toggle('hide');
    satisfactionBtn.classList.toggle('hide');
    satisfactionCard.classList.toggle('show');
})

const toolsExitBtn = document.querySelector('.tools i'),
    calendarExitBtn = document.querySelector('.calendar i'),
    satisfactionExitBtn = document.querySelector('.satisfaction i');

toolsExitBtn.addEventListener('click', () => {
    toolsIconCard.classList.toggle('hide');
    toolsBtn.classList.toggle('hide');
    toolsCard.classList.toggle('show');
})

calendarExitBtn.addEventListener('click', () => {
    calendarIconCard.classList.toggle('hide');
    calendarBtn.classList.toggle('hide');
    calendarCard.classList.toggle('show');
})

satisfactionExitBtn.addEventListener('click', () => {
    handshakeIconCard.classList.toggle('hide');
    satisfactionBtn.classList.toggle('hide');
    satisfactionCard.classList.toggle('show');
})

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

//gallery section
const bigCardContainer = document.querySelector('.big-card-container');
const bigCard = document.querySelector('.big-card-container .big-card');
const firstImg = document.querySelector('.gallery-section .first');

firstImg.addEventListener('click', () => {
    bigCardContainer.style.display = 'block';
    window.setTimeout(function () {
        bigCardContainer.style.opacity = '1';
    }, 100);
    bigCard.style.backgroundImage = 'url(img/big-cards-mobile/rectangular-brown-wooden-dining-table-and-chairs-set-2092058.jpg)';
})

const closeCard = document.querySelector('.big-card i');

closeCard.addEventListener('click', () => {
    window.setTimeout(function () {
        bigCardContainer.style.display = 'none';
    }, 1000);
    bigCardContainer.style.opacity = '0';

})
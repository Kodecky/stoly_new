const toolsBtn = document.querySelector('.tools-icon .icon-btn');
const calendarBtn = document.querySelector('.calendar-icon .icon-btn');
const satisfactionBtn = document.querySelector('.handshake-icon .icon-btn');

toolsBtn.addEventListener('click', () => {
    document.querySelector('.tools-icon').classList.toggle('hide');
    toolsBtn.classList.toggle('hide');
    document.querySelector('.tools').classList.toggle('show');
})

calendarBtn.addEventListener('click', () => {
    document.querySelector('.calendar-icon').classList.toggle('hide');
    calendarBtn.classList.toggle('hide');
    document.querySelector('.calendar').classList.toggle('show');
})

satisfactionBtn.addEventListener('click', () => {
    document.querySelector('.handshake-icon').classList.toggle('hide');
    satisfactionBtn.classList.toggle('hide');
    document.querySelector('.satisfaction').classList.toggle('show');
})

const toolsExitBtn = document.querySelector('.tools i');
const calendarExitBtn = document.querySelector('.calendar i');
const satisfactionExitBtn = document.querySelector('.satisfaction i');

toolsExitBtn.addEventListener('click', () => {
    document.querySelector('.tools-icon').classList.toggle('hide');
    toolsBtn.classList.toggle('hide');
    document.querySelector('.tools').classList.toggle('show');
})

calendarExitBtn.addEventListener('click', () => {
    document.querySelector('.calendar-icon').classList.toggle('hide');
    calendarBtn.classList.toggle('hide');
    document.querySelector('.calendar').classList.toggle('show');
})

satisfactionExitBtn.addEventListener('click', () => {
    document.querySelector('.handshake-icon').classList.toggle('hide');
    satisfactionBtn.classList.toggle('hide');
    document.querySelector('.satisfaction').classList.toggle('show');
})
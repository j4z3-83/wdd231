const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const carousel = document.querySelector('.carousel');
const list = document.querySelector('.list');
const item = document.querySelectorAll('.item');
const volumeBtn = document.querySelector('.btn');
const managTitle = document.querySelector('.title');
const runningTime = document.querySelector('.carousel .timeRunning');

let runNextAuto;
let timeRunning = 3000;
let timeAutoNext = 7000;

if (nextBtn && prevBtn) {

    nextBtn.onclick = function () {
        showSlider('next');
    }

    prevBtn.onclick = function () {
        showSlider('prev');
    }

    runNextAuto = setTimeout(() => {
        nextBtn.click()
    }, timeAutoNext);

    resetTimeAnimation();
}

let runTimeOut;

function resetTimeAnimation() {
    if (runningTime && runningTime.style) {
        timeRunning.style.animation = 'none';
        timeRunning.offsetHeight;
        timeRunning.style.animation = null;
        timeRunning.style.animation = 'runningTime 7s linear 1 forwards';
    }
}

function showSlider(type) {
    let sliderItemsDom = list.querySelectorAll('.carousel .list .item');
    if (type === 'next') {
        list.appendChild(sliderItemsDom[0]);
        carousel.classList.add('next');
    } else {
        list.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
        carousel.classList.add('prev');
    }

    clearTimeout(runTimeOut);

    runTimeOut = setTimeout(() => {
        carousel.classList.remove('next');
        carousel.classList.remove('prev');
    }, timeAutoNext);

    clearTimeout(runNextAuto)
    runNextAuto = setTimeout(() => {
        nextBtn.click();
    }, timeAutoNext);

    resetTimeAnimation();
}




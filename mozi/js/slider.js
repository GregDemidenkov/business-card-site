let position = 0;
const container = document.querySelector('.factors-wrapper');
const track = document.querySelector('.slider-track');
const btnLeft = document.querySelector('.left');
const btnRight = document.querySelector('.right');
const leftArr = document.querySelector('.left-arr rect');
const rightArr = document.querySelector('.right-arr rect');
const ItemsWidth = 278;
let slidersToShow = Math.floor(container.offsetWidth / ItemsWidth);
const sliderToScroll = 1;
const ItemsCount = 8;
let movePosition;

const checkSlidersToShow = () => {
    if (slidersToShow === 4 || slidersToShow === 2) {
        movePosition = slidersToShow*ItemsWidth;
    } else if(slidersToShow === 3) {
        movePosition = ItemsWidth;
    }
}

btnLeft.addEventListener('click', () => {
    position += movePosition;

    setPosition();
    checkBtns();
})

btnRight.addEventListener('click', () => {
    position -= movePosition;

    setPosition();
    checkBtns();
})

const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
}

const checkBtns = () => {
    btnLeft.disabled = position === 0;
    btnLeft.disabled ? leftArr.style.fill = '#C2D1D9' : leftArr.style.fill = '#424B5A';
   
    btnRight.disabled = position <= -(ItemsCount - slidersToShow) * ItemsWidth;
    btnRight.disabled ? rightArr.style.fill = '#C2D1D9' : rightArr.style.fill = '#424B5A';
}

checkSlidersToShow();
checkBtns();
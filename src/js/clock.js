const secondArrow = document.querySelector('.second_arrow');
const minuteArrow = document.querySelector('.minute_arrow');
const hourArrow = document.querySelector('.hour_arrow');
const time = document.querySelector('.clock-time');

const setTime = () => {
    const date = new Date();
    
    const seconds = date.getSeconds();
    secondArrow.style.transform = `rotate(${seconds * 6}deg)`;

    const minutes = date.getMinutes();
    minuteArrow.style.transform = `rotate(${minutes * 6}deg)`;

    const hour = date.getHours();
    hourArrow.style.transform = `rotate(${360 / 12 * (hour - 12) + (minutes / 12) * 6}deg)`;

    time.innerHTML = `${(String(hour)).length < 2 ? '0' + hour : hour}:${(String(minutes)).length < 2 ? '0' + minutes : minutes}:${(String(seconds)).length < 2 ? '0' + seconds : seconds}`;
}

setInterval(() => {
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hour = date.getHours();

    secondArrow.style.transform = `rotate(${seconds * 6}deg)`;
    seconds ? 0 : minuteArrow.style.transform = `rotate(${minutes * 6}deg)`;
    hourArrow.style.transform = `rotate(${360 / 12 * hour + (minutes / 12) * 6}deg)`;

    time.innerHTML = `${(String(hour)).length < 2 ? '0' + hour : hour}:${(String(minutes)).length < 2 ? '0' + minutes : minutes}:${(String(seconds)).length < 2 ? '0' + seconds : seconds}`;
}, 1000)

setTime();
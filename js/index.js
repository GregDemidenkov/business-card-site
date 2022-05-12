const circle = document.querySelector('.circle');
const my_photo = document.querySelector('.my_photo');
const cart_1 = document.querySelector('.cart_1');
const cart_2 = document.querySelector('.cart_2');
const cart_3 = document.querySelector('.cart_3');

let flag = true;

circle.addEventListener('click', () => {
    if (flag) {
        flag = !flag;
        circle.classList.add('circleClick');
        my_photo.style.opacity = '1';
        setTimeout(() => {
            cart_1.classList.add('c1');
            cart_2.classList.add('c2');
            cart_3.classList.add('c3');
        }, 1000)
    } else {
        flag = !flag;
        cart_1.classList.remove('c1');
        cart_2.classList.remove('c2');
        cart_3.classList.remove('c3');
        setTimeout(() => {
            circle.classList.remove('circleClick');
            my_photo.style.opacity = '0';
        }, 1500)
    }
})
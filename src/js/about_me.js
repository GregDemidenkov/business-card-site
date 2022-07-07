const circle = document.querySelector('.circle');
const my_photo = document.querySelector('.my_photo');
const cart_1 = document.querySelector('.cart_1');
const cart_2 = document.querySelector('.cart_2');
const cart_3 = document.querySelector('.cart_3');
const text = document.querySelector('.info_aboutMe');

let flag = true;

circle.addEventListener('click', () => {
    if (flag) {
        flag = !flag;
        circle.style.pointerEvents = 'none';

        circle.classList.add('circleClick');
        
        setTimeout(() => {
            cart_1.classList.add('c1');
            cart_2.classList.add('c2');
            cart_3.classList.add('c3');
            text.classList.add('visible_text');
            my_photo.classList.add('visible_photo');
            setTimeout(() => {
                circle.style.removeProperty('pointer-events');
            }, 3600)
        }, 1500)

    } else {
        flag = !flag;
        circle.style.pointerEvents = 'none';

        cart_1.classList.remove('c1');
        cart_2.classList.remove('c2');
        cart_3.classList.remove('c3');
        text.classList.remove('visible_text');
        my_photo.classList.remove('visible_photo');

        setTimeout(() => {
            circle.classList.remove('circleClick');
            setTimeout(() => {
                circle.style.removeProperty('pointer-events');
            }, 2000)
        }, 1500)

    }
})


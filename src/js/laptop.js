const divLaptop = document.querySelector('.laptops')

const createCart = ({id, img, name, price, cpu, ram, graphicsCard}) => {
  return `<div class="laptops-cart">
    <img src="${img}" alt="">
    <div class="name_and_price">
        <p class = "name">${name}</p>
        <p class = "price cart_${id}">${price}₽</p>
    </div>
    <div class="characteristic">
        <p class = "cpu">Процессор: <span>${cpu}</span></p>
        <p class = "ram">Оперативная память: <span>${ram}</span></p>
        <p class = "graphics_card">Видеокарта: <span>${graphicsCard}</span></p>
    </div>
  </div>`
}

const printLaptops = (arrayLaptops) => {
  arrayLaptops.forEach((el) => {
    divLaptop.insertAdjacentHTML('beforeend', createCart(el))
  })
}

fetch('./public/json/dataLaptops.json')
  .then((res) => res.json())
  .then((data) => {
    const arrayLaptops = JSON.parse(JSON.stringify(data.laptops))
    printLaptops(arrayLaptops)
  })


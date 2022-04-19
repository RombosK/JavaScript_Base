
const main = document.querySelector('#main');

let Items_Store = []
let emptyBasket = '<p>Ваша корзина пуста</p>'

function Items(product, image, price, quantity) {
    this.product = product;
    this.image = `img/${image}.jpg`;
    this.price = price;
    this.quantity = quantity;
}

// Items_Store.push(
//     new Items('Samsung-S20', 'Image1', 45000, 2)
// );
Items_Store.push(
    new Items('iPhone-12', 'Image2', 110000, 1)
);
Items_Store.push(
    new Items('Xiaomi-Mi9', 'Image3', 40000, 1)
);
// Items_Store.push(
//     new Items('Vivo-V20', 'Image4', 42000, 2)
// );


// выводит перечень товаров в корзине, если корзина не пуста
if (Items_Store == 0) {
    main.insertAdjacentHTML('beforeend', `<div class="prod_item total">${emptyBasket}</div>`);
} else {
    for (const iterator of Items_Store) {
        main.insertAdjacentHTML('beforeend',
            `<div class="prod_item">
        <span>Позиция - ${iterator.product}</span> 
        <span>Цена позиции - ${iterator.price} рублей</span>
        <span>Количество - ${iterator.quantity}</span>
        <span><img src="${iterator.image}"></span>
        </div>`);
    }
}

// возвращает итоговую сумму
function finalOrder(Items_Store) {
    return Items_Store.reduce(function (acc, Items_Store) {
        return acc + Items_Store.quantity
    }, 0)
};

// возвращает итоговое количество
function finalCost(Items_Store) {
    return Items_Store.reduce(function (acc, Items_Store) {
        return acc + (Items_Store.price * Items_Store.quantity)
    }, 0)
};

// выводит итоговое количество и сумму
if (Items_Store != 0) {
    main.insertAdjacentHTML('beforeend',`<hr><div class="prod_item total ">В корзине: ${finalOrder(Items_Store)} товаров на сумму 
    ${finalCost(Items_Store)} рублей</div>`);
}


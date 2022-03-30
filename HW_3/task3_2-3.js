/*2. С этого урока начинаем работать с функционалом интернет - магазина.Предположим, есть
сущность корзины.Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
3. Товары в корзине хранятся в массиве. Задачи:*/

// a.Организовать такой массив для хранения товаров в корзине;
let basket = [
    {
        item: 'scanner',
        price: 120
    },
    {
        item: 'blue-ray',
        price: 250
    },
    {
        item: 'iphone',
        price: 800
    },
    {
        item: 'laptop',
        price: 450
    }
];
let basketPrice = 0;
for (let prod of basket) {
    basketPrice += prod.price;
    console.log('Цена ' + prod.item + ' = ' + prod.price);
}

console.log('Стоимость  товаров в корзине: ' + basketPrice + '$');
console.log()
console.log('<================================================================>')
console.log()
//b.Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
function countBasketPrice(basket) {
    let counter = 0;
    for (let prod of basket) {
        counter += prod.price;
    }
    return counter;
}

console.log('Стоимость  товаров в корзине: ' + countBasketPrice(basket) + '$');







/*2. Продолжить работу с интернет - магазином:a.В прошлом домашнем задании вы реализовали корзину на базе массивов.
Какими объектами можно заменить их элементы ?
b.Реализуйте такие объекты.
c.Перенести функционал подсчета корзины на объектно - ориентированную базу.*/

function Items(brand, model, price, quantity, discount = 0){
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.quantity = quantity;
    this.discount = discount;
    this.getDiscount = function(){
        if(this.discount != 0) {
            return this.price - this.price * this.discount/100;
        } else {
            return this.price;
        }
    }
    this.getMyBasket = function() {
        return `${this.brand + '-' + this.model} (количество: ${this.quantity})`;
    }
}

let items_Store = []
items_Store.push(
    new Items('Samsung', 'S20', 700, 2)
);
items_Store.push(
    new Items('iPhone', '12', 1500, 1, 10)
);
items_Store.push(
    new Items('Xiaomi', 'Mi9', 650, 1, 5)
);
items_Store.push(
    new Items('Vivo', 'V20', 550, 3)
);

function myOrder(items_Store){
    console.log('Ваш заказ: ')
    items_Store.forEach(val => {
    console.log(`${val.getMyBasket()}.
    Цена с учетом скидки: ${val.getDiscount()} $.
    Стоимость позиции: ${val.quantity * val.getDiscount()}` + ' $.');
    });
}
myOrder(items_Store);

function finalCost(items_Store) {
    return items_Store.reduce(function(acc, items_Store){
        return acc + (items_Store.getDiscount() * items_Store.quantity)
    }, 0)
};
console.log(('Конечная стоимость заказа: ' + finalCost(items_Store)).toUpperCase() + ' $');



function Items(product, image, description, price, discount = 0) {
    this.product = product;
    this.image = `img/${image}.jpg`;
    this.description = description;
    this.price = price;
    this.discount = discount
}

let wishList = []

wishList.push(
    new Items('Samsung-S20', 'Image1','made in China', 45000, 10)
);
wishList.push(
    new Items('iPhone-12', 'Image2','made in Taiwan', 110000, 5)
);
wishList.push(
    new Items('Xiaomi-Mi9', 'Image3', 'made in Korea', 40000)
);
wishList.push(
    new Items('Vivo-V20', 'Image4', 'made in China', 42000, 20)
);


const catalog = document.querySelector('#catalog');

function drowItems(wishList) {
    for (const iterator of wishList) {
        catalog.insertAdjacentHTML('beforeend',
            `<div class="prod_item">
            <div class="item">
                <div class="image"><img src="${iterator.image}"></div>
                <div class="description"><h4>${iterator.product}</h4>${iterator.description}
                    <div class="price">Цена: 
                        <span>${iterator.price}</span>
                    </div>
                </div>
            </div>
            <div class="sale">
                <span class='offer ${iterator.discount > 0 ? 'show' : ''}'>Скидка: ${iterator.discount}%</span>
                <a href="#">В корзину</a>
            </div>
        </div>`);
    };
}
drowItems(wishList);
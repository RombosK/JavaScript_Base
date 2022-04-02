/*Написать функцию, преобразующую число в объект.Передавая на вход число от 0 до 999,
надо получить на выходе объект, в котором в соответствующих свойствах описаны единицы,
десятки и сотни.Например, для числа 245 надо получить следующий объект:{‘единицы’: 5,‘десятки’: 4, ‘сотни’: 2}.
Если число превышает 999, необходимо выдать соответствующее сообщение с помощью coxsole.log и вернуть пустой объект.*/
//let num = 245;
function converter(x) {
    if (x < 0 || x > 999 || typeof x !== 'number') {
        console.log('Это должно быть ЧИСЛО в диапазоне от 0 до 999.');
    } else {
        let str = x.toString();
        let object = {};
        let len = str.length;
        switch (len) {
            case 3:
                object['Сотни'] = str[len - 3];
            case 2:
                object['Десятки'] = str[len - 2];
            case 1:
                object['Единицы'] = str[len - 1];
        }
        return object;
    }
}
console.log(converter(245));
console.log(converter('245')); 
console.log(converter(-525)); 
console.log(converter(1001)); 
console.log(typeof(object));   // пустой объект(undefined)

// // 1. Почему код дает именно такие результаты ?
// var a = 1, b = 1, c, d;
// c = ++a; console.log(c); // 2     /* ++а (префиксный тип) прибавляет к значению переменной а 1*/    
// d = b++; console.log(d); // 1     /* b++ (постфиксный тип) прибавляет к значению переенной 1, но возвращает предыдуее значение*/
// c = (2 + ++a); console.log(c); // 5  /* а == 2(см.выше),поэтому ++а = 2+1 и прибавляетя 2,итог 5*/
// d = (2 + b++); console.log(d); // 4  /* b++ = 2(см,выше),поэтому 2 + b++ = 4*/
// console.log(a); // 3                 /* сумма всех полученных значений переменной а (см. из операций выше)строка 1,3 */
// console.log(b); // 3                 /* сумма всех полученных значений переменной b (см. из операций выше)строка 4,6 */


// 2. Чему будет равен x ?
// var a = 2;
// var x = 1 + (a *= 2);
//x == 5, т.к. *= сокращённо от оператора х = 1 + (a = a + 2)


/* 3. Объявить две целочисленные переменные — a и b и задать им произвольные начальные значения.
Затем написать скрипт, который работает по следующему принципу: если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение; если а и b разных знаков, вывести их сумму;
Ноль можно считать положительным числом.*/
let a = -4, b = 2;
if (a >= 0 && b >= 0){
    console.log(a - b)
}
else if (a < 0 && b < 0){
    console.log(a * b)
}
else{
    console.log(a + b)
}

// 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.

let c = 10
switch (c) {
    case 0:
        console.log('0, ');
    case 1:
        console.log('1, ');
    case 2:
        console.log('2, ');
    case 3:
        console.log('3, ');
    case 4:
        console.log('4, ');
    case 5:
        console.log('5, ');
    case 6:
        console.log('6, ');
    case 7:
        console.log('7, ');
    case 8:
        console.log('8, ');
    case 9:
        console.log('9, ');
    case 10:
        console.log('10, ');
    case 11:
        console.log('11, ');
    case 12:
        console.log('12, ');
    case 13:
        console.log('13, ');
    case 14:
        console.log('14, ');
    case 15:
        console.log('15.');
        break;
    default:
        console.log('ERROR, число не из диапазона.');
}

// // 5. Реализовать четыре основные арифметические операции в виде функций с двумя параметрами.Обязательно использовать оператор return.
function sum(x, y){
    return x + y;
}

function diff(x, y){
    return x - y;
}

function multiply(x, y){
    return x * y;
}

function division(x, y){
    return x / y;
}
console.log(sum(5,3))         //8
console.log(diff(5, 3))       //2
console.log(multiply(5, 3))   //15
console.log(division(5, 3))   //1.6666666666666667

// 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),где arg1, arg2 — значения аргументов, 
// operation — строка с названием операции.В зависимости от переданного значения выполнить одну из арифметических операций
// (использовать функции из пункта 5) и вернуть полученное значение(применить switch).

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'сложение':
            return arg1 + arg2;
            break;
        case 'вычитание':
            return arg1 - arg2;
            break;
        case 'умножение':
            return arg1 * arg2;
        case 'деление':
            return arg1 / arg2;
            break;
        
            break;
    }}
console.log(mathOperation(2, 3, 'умножение'))    //6

// 7. console.log(null == 0)  // False Потому что,null является определённым значением отсутствия объекта, а ноль это объект

// 8. С помощью рекурсии организовать функцию возведения числа в степень.Формат: functionfunctionpower(val, pow), 
// где val — заданное число, pow –— степень.
function functionpower(val, pow) {
    if (pow > 1) {
        return (val * functionpower(val, pow - 1));
    }
    else if (pow == 1) {
        return val;
    }
    else if (pow == 0) {
        return 1;
    }
    else {
        return NaN;
    }
}
console.log(functionpower(2, 3))
console.log(functionpower(3, 2))

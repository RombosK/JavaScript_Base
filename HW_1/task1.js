/* 1. Задать температуру в градусах по Цельсию. Вывести в alert соответствующую температуру в
градусах по Фаренгейту. Подсказка: расчет идет по формуле Tf = (9 / 5) * Tc + 32, где Tf —
температура по Фаренгейту, Tc — по Цельсию.*/
function Tf (Tc) {
    return (9 / 5) * Tc + 32
}
console.log(Tf (25) )
console.log(Tf (10) )
console.log(Tf (-5) )


/* 2. Объявить две переменные: admin и name. Записать в name строку "Василий"; Скопировать
значение из name в admin. Вывести admin (должно вывестись «Василий»).*/
var admin;
var name = 'Василий';
admin = name;
console.log(admin)


// 3. * Чему будет равно JS-выражение 1000 + "108"?
var x = 1000 + '108';
console.log(x)         // 1000108


// end
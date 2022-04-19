/* Нарисовать пирамиду с 20 рядами с помощью console.log, как показано на рисунке:
x
xx
xxx
xxxx
xxxxx */

let row = 'x';
for (let i = 0; i < 20; i++) {
    console.log(row);
    row += 'x';
}

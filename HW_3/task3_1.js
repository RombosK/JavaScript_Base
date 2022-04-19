// С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
let numSimple = 0;
while (numSimple <= 100) {
    let checker = true;
    for (let i = 2; i < numSimple; i++) {
        if (numSimple % i === 0) {
            checker = false;
            break;
        }
    }
    if (checker) console.log(numSimple);
    numSimple++;
    }

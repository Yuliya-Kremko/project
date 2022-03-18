"use strict";

const desiredNumber = +prompt (`Загадайте число`, ``);

let guess;
do { 
     guess = +prompt (`Угадайте число` , ``);

    if (guess<desiredNumber){
        alert (`Загаданное число больше`);
    } else if (guess>desiredNumber){
        alert(`Загаданное число меньше`);
    } else {
        alert(`Ты умеешь читать мысли? Ответ угадан`);
    }
} 
while (guess != desiredNumber);


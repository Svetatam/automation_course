"use strict";
// Написать метод, который принимает массив чисел в качестве параметра и возвращает массив только с чётными числами
//Например,
//Исходный массив – [2, 4, 5, 7, 8]
//Результат - [2, 4, 8]

let arrayOfNumbers = [2, 4, 5, 7, 8];
function displayEvenNum(arrayOfNumbers) {
  return arrayOfNumbers.filter((el) => el % 2 === 0);
}
console.log(displayEvenNum(arrayOfNumbers)); // [2, 4, 8]

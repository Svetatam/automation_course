"use strict";
//Написать метод, который принимает строку в качестве параметра и возвращает ту же строку, но все пробелы заменяет на нижнее подчёркивание.
//Например,
//Исходная строка – “Я люблю Javascript”
//Результат – “Я_люблю_Javascript”

let str = "Я люблю Javascript";
 function replaceSpaceToUndescore(str) {
return str.replace(/ /g, '_');
}
console.log(replaceSpaceToUndescore(str)) // Я_люблю_Javascript

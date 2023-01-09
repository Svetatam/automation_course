"use strict";
//Написать метод, который принимает массив строк в качестве параметра и возвращает отфильтрованный массив, содержащий те же элементы, но без “гусей”.
//“Гуси” – массив строк, заранее предопределённый вами в коде.
//Например,
//“Гуси” – [‘London’, ‘Paris’, ‘Moscow’]
//Исходный массив – [‘Minsk’, ‘London, ‘Berlin’, ‘Toronto’, ‘Paris’, ‘Moscow’]
//Результат - [‘Minsk’, ‘Berlin’, ‘Toronto’]

function withoutGeese (list) {
    return list.filter(item => !geese.includes(item));
   }
  let geese = ['London', 'Paris', 'Moscow'];
   
  let city =['Minsk', 'London', 'Berlin', 'Toronto', 'Paris', 'Moscow'];
   
  console.log (withoutGeese (city));
  
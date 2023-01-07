//Написать метод, который принимает массив строк в качестве параметра 
//и выводит в консоль слово с наибольшим количеством букв.
//Если таких слов несколько - выводит их все


function getMaxs(list) {
    return  list.sort((a,b) => b.length - a.length ).filter(i => x ==0 ? x= i.length : i.length === x, x = 0 ); //  фильтер - функция, которая возвращает тру или фолс; x- переключатель
       }
       const names = ['Sveta', 'Lena', 'Garold', 'Varold', 'Marolg'];
   
    console.log (getMaxs(names)); // ['Garold', 'Varold', 'Marolg']
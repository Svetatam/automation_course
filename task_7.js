// Написать методы с использованием callbacks, promises, async/await


//Только callback
//run in browser
function printMyName () {
    console.log ('Sveta')
  }
  setTimeout(printMyName, 1000)




 //Только promises (resolve + reject flow)
  //run in browser
 let promise = new Promise((resolve, reject) => {
 
    setTimeout(() => {
      // переведёт промис в состояние fulfilled с результатом result
      resolve("result");
    }, 1000);
   
  });
     // promise.then навешивает обработчики на успешный результат или ошибку
  promise
    .then(
      result => {
        // первая функция-обработчик - запустится при вызове resolve
        console.log("Fulfilled: " + result); // result - аргумент resolve
      },
      error => {
        // вторая функция - запустится при вызове reject
        console.log("Rejected: " + error); // error - аргумент reject
    }
  );





  //Только async/await
  //run in browser
  const getData = async(url) => {
    const res = await fetch (url)
    const json = await res.json()
    return json
    }
     
    const url = 'https://jsonplaceholder.typicode.com/todos/163'
    try {
      const data = await getData (url)
      console.log (data)
    } catch(error){
      console.log(error.message)
    } // try in web browser, await is only valid in async functions

    



  // Комбинация callback + promise
  //run in browser
  function printResult(value) {
    console.log(value);
    }
     
    fetch('https://jsonplaceholder.typicode.com/todos/3')
    .then (response => response.json()) //resolve
    .then (printResult) 
    .then((value)=>console.log('!!!!', value))
    .catch (error => console.log(error.message))//reject
    




    //Комбинация promise + async/await
    // run in browser
    const timerPromise = () =>
  new Promise((resolve, reject) =>
  setTimeout(()=> resolve(), 2000))
   
const asyncFn = async () => {
  console.log ('Timer starts')
  const startTime = performance.now()
  await timerPromise()
  const endTime = performance.now()
  console.log('Timer ended', endTime - startTime)
  }
  asyncFn()


  
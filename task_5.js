//   Продемонстрировать работу try…catch…finally
// please, run in browser

//Вариант1
const fnWithError = () => {
    throw new Error('Some error')
}
try {
    fnWithError()
}
catch(error){
    // console.error (error)
    console.log (error.message)
}
finally{
    console.log ("будет выполняться в любом случае")  
} //Some error
// будет выполняться в любом случае




//Вариант2
let i = 1;
let y = 2;
try {
    u;
    console.log (i+y);
}
catch(error){
    console.error (error)//error который выводится красным в консоли
    console.log (error.message)// содержание эррора
    console.log (error.name)
}
finally{
    console.log ("будет исполняться в любом случае")  
}
//u is not defined
// ReferenceError
//будет исполняться в любом случае





//Вариант3
// please, run in browser
let json = '{"name":"Max", "age": 30}';
try {
let user = JSON.parse(json);
console.log (user.name)
}
catch(error) {
console.log (error.message);
}
finally{
alert("Будет выводиться в любом случае")
}
//let json = '{"name":"Max", "age": 30}';
try {
    let user = JSON.parse(json);
    console.log (user.name)
    }
    catch(error) {
    console.log (error.message);
    }
    finally{
    alert("Будет выводиться в любом случае")
    }
// Max
// alert: Будет выводиться в любом случае

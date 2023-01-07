// Продемонстрировать работу циклов for…of, for…in, for, while

//for…of
let numbers = [1, 2, 3, 4, 5, 6, 7];
for (number of numbers) {
	number = number +10;
	console.log (number); 
    // 11
    // 12
    // 13
    // 14
    // 15
    // 16
    // 17
}


//for…in
let cars ={
	car1: 'Volvo',
	car2: 'BMW',
	car3: 'Audi'
}
for (let mark in cars) {
	console.log (mark + ' is ' + cars[mark]);
}
//car1 is Volvo
//car2 is BMW
//car3 is Audi



// for
let numbers1 = 0;
for (numbers1; numbers1<5; numbers1++){
    console.log (numbers1);
} 
//0
// 1
// 2
// 3
// 4



//while
let i = 0;
let y = 8;
while (i < y) {
    console.log ('Less than y')
    i++;
}
//Less than y
// Less than y
// Less than y
// Less than y
// Less than y
// Less than y
// Less than y
// Less than y
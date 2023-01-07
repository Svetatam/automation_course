// создание экземпляра класса В и вызов методов класса A и класса B

 
import {Car} from './car.mjs';
let car = new Car('Volvo');
 
car.color(`Black`); // Volvo Black color
car.run(150); // Volvo rides at speed 150.
car.size(); // Volvo middle size!

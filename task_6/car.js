// создание класса B (с методами color и size)
import {Transport} from `.transport.js`;
export class Car extends Transport {
  color(color) {
    this.color = color;
    console.log(`${this.name} ${this.color} color`);
  }
  size() {
    console.log(`${this.name} middle size!`);
  }
}

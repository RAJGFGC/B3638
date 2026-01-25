// example of class with car manufacturing
class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  displayInfo() {
    return `${this.year} ${this.brand} ${this.model}`;
  }
}

// create an instance of the Car class
const myCar = new Car("Toyota", "Corolla", 2020);
console.log(myCar.displayInfo()); // Output: 2020 Toyota Corolla
// create another class called Rectangle with constructor taking length and width
class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  area() {
    return this.length * this.width;
  }

  perimeter() {
    return 2 * (this.length + this.width);
  }
}
// create an instance of the Rectangle class
const myRectangle = new Rectangle(10, 5);
console.log("Area:", myRectangle.area()); // Output: Area: 50

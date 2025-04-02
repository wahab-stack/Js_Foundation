// function greet(name) {
//     console.log("hello", name);

// }

function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Car(make, model) {
  this.make = make;
  this.model = model;
}

let myCar = new Car("Toyota", "camry");
console.log(myCar);

let myNewCar = new Car("Suzuki", "Mehran");
console.log(myNewCar);

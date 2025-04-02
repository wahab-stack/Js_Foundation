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
// console.log(myCar);

let myNewCar = new Car("Suzuki", "Mehran");
// console.log(myNewCar);

let myNewCars = new Car("Suzuki", "Alto");
// console.log(myNewCars);

function Tea(type) {
  this.type = type;
  this.describe = function () {
    return `This is a cup of ${this.type}`;
  };
}

let leamonTea = new Tea("leamon tea");
// console.log(leamonTea.describe());

function Animal(species) {
  this.species = species;
}
Animal.prototype.sound = function () {
  return `${this.species} makes a sound`;
};

let dog = new Animal("Dog");
// console.log(dog.sound());

let cat = new Animal("Cat");
// console.log(cat.sound());

function Drink(name) {
  if (!new.target) {
    throw new Error("Drink must be called with new keyword");
  }
  this.name = name;
}
let tea = new Drink("tea");
let Coffee = new Drink("Coffee");

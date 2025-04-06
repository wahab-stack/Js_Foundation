const user = {
  username: "Abdul",
  loginCount: 7,
  signedIn: true,

  getUserDetails: function () {
    console.log(
      `Username is ${this.username}, user has logged in ${this.loginCount} times`
    );
  },
};

// console.log(user.username);
// console.log(user.getUserDetails());

// const promiseOne = new Promise()    // new keyword is constructor function

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  this.greeting = function () {
    console.log(`Welcome back, ${this.username}`);
  };

  return this; // this is implicit return in constructor function
}

const user1 = new User("Abdul", 7, true);
const user2 = new User("Wahab", 8, true);
// console.log(user1.constructor);
// console.log(user2);

// new keyword is used to create an object from a constructor function
// new keyword creates an empty object
// new keyword binds the empty object to the this keyword

let car = {
  make: "Toyota",
  model: "camry",
  year: "2020",
  start: function () {
    return `${this.model} car got started in ${this.year}`;
  },
};
// console.log(car.start());

function person(name, age) {
  this.name = name;
  this.age = age;
}
let john = new person("john doe", 20);
console.log(john.name);

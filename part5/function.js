//---------- 01--------

function makeTea(typeOfTea) {
  return `Making ${typeOfTea} tea`;
}
let teaOrder = makeTea("black"); // Making black tea
// console.log(teaOrder);

/* //---------- 02--------

create a function named `orderTea` that takes one parameter named `teaType`.
inside this function, create another function names `confirmOrder` thar return a message like `"order confirm for chai"`.call `confirmOrder` from within `orderTea` and return the result.

*/

function orderTea(teaType) {
  function confirmOrder() {
    return `order confirm for ${teaType}`; //
  }
  return confirmOrder();
}
let orderConfirmation = orderTea("chai");
// console.log(orderConfirmation); // order confirm for chai

/*         //---------- 03--------

write an arrow function named `calculateTotal` that takes two parameters: 
`price` and `quantity`. The function should return the total cost by multiplying the `price` and `quantity`.
    Store the result in a variable named `totalCost`.

*/

const calculateTotal = (price, quantity) => {
  return price * quantity;
};

let totalCost = calculateTotal(499, 100);
// console.log(totalCost); // 49900

/* //---------- 04--------

write a function named `processTeaOrder` that takes another function `makeTea` as a parameter and calls it with the argument `"earl grey"`.
 Stores the result of calling  `makeTea`.

*/

function makeTea(typeOfTea) {
  return `Making: ${typeOfTea}`;
}

function processTeaOrder(TeaFunction) {
  return TeaFunction("Earl Grey");
}
let order = processTeaOrder(makeTea);
// console.log(order); // Making earl grey tea

//---------- 05--------
/*
write a function named `createTeaMaker` that return another function. the returned function should take one parameter, `teaType` and return a message like `"making green tea"`.
    Store the returned function in a variable named `teaMaker` and call it with `"green tea"`.

*/

function createTeaMaker() {
  return function (teaType) {
    return `Making: ${teaType} tea`;
  };
}
let teaMaker = createTeaMaker();
let message = teaMaker("Green");
console.log(message); // Making: Green tea

//task index.js udemy
function stringToNumber(input) {
  const number = Number(input);
  if (typeof number === "number" && !isNaN(number)) {
    return number;
  } else {
    return "Not a number";
  }
}

//playing with variables
let num = stringToNumber("123");
// console.log(num); // Not a number

const a = 18;
const b = 24;
// let sum = a + b;
function add(a, b) {
  return a + b;
}
let sum = add(a, b);
console.log(sum); // 42

//subtraction
const c = 18;
const d = 24;
function subtract(c, d) {
  return d - c;
}
let result = subtract(c, d);
console.log(result);

//division
const e = 18;
const f = 24;
function divide(e, f) {
  return f / e;
}
let division = divide(e, f);
console.log(division);

// increment
let i = 19;
function increment(i) {
  return i + 1;
}
let incrementResult = increment(i);
console.log(incrementResult);

// decrement
let j = 24;
function decrement(j) {
  return j - 1;
}
let decrementResult = decrement(j); // 23
console.log(decrementResult);

//reminder
const k = 18;
const l = 24;
function reminder(k, l) {
  return l % k;
}
let reminderResult = reminder(k, l);
console.log(reminderResult);

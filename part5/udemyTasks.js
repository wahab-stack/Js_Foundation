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

//filter
const arr = [
  1,
  "hello",
  true,
  42,
  null,
  undefined,
  3.14,
  [1, 2, 3],
  { key: "value" },
];
const filteredNumbers = arr.filter((item) => typeof item === "number");
console.log(filteredNumbers); // [1, 42, 3.14]

//reverse
const array = [1, 2, 3, 4, 5];
const reversed = array.reverse();
console.log(reversed); // [5, 4, 3, 2, 1]

//maximum

const arry = [1, 2, 3, 4, 5];
const max = Math.max(...arry);
console.log(max); // 5

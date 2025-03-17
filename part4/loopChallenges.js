/*-----------------------------problem 1

write a 'while'loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable named 'sum'

*/
let sum = 0;
let i = 1;
while (i <= 5) {
  sum += i; // ------- sum = sum + i
  i++;
}
// console.log(sum);

/*
-----------------------------------Problem 2

write a 'while' loop that counts down 5 to 1 and stores the numbers in an array named 'countdown'
*/

let countdown = [];
let j = 5;
while (j > 0) {
  countdown.push(j);
  j--;
}
console.log(countdown);

/*
-------------------------------------Problem 3

write a 'do while' loop that prompts a user to enter their favorite tea type until they "stop".
Store each tea type in an array named "teaCollection"

*/

let teaCollection = [];
let tea = "abc";

do {
  tea = prompt('Enter your favorite tea (type "stop" to finish)');
  if (tea != "stop") {
    teaCollection.push(tea);
  } else {
  }
} while (tea != "stop");

//-------------------------------------Problem 4

/*
write a 'do while loop' that adds numbers from 1 to 3 and stores the result in a variable named 'total'
*/

let total = 0;
let k = 1;
do {
  total += k;
  k++;
} while (k <= 3);

//----------------------------------Problem 5
/*
write a 'for' loop that multiplies each element in the array '[2, 4, 6]' by 2 and stores the result in a new array named 'multipliedNumber'.

*/

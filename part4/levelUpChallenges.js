/* ----------- Problem 1
write a 'for' loop that loops through the array ` ["green tea", "black tea", "chai tea", "oolong tea", "earl grey tea"] ` and stops the loop when it finds ` "chai tea" `.
    store all teas before "chai tea" in a new array called ` selectedTeas `.
*/

let teas = [
  "green tea",
  "black tea",
  "chai tea",
  "oolong tea",
  "earl grey tea",
];
let selectedTeas = [];
for (let i = 0; i < teas.length; i++) {
  if (teas[i] === "chai tea") {
    break;
  }
  selectedTeas.push(teas[i]);
}
// console.log(selectedTeas);

/* ----------- Problem 2------

write a 'for' loop that through the array `["london", "new york", "paris", "berlin", "madrid"]` and skips ` "paris" `.
    store the other cities in a new array name `visitedCities`.
*/

let cities = ["london", "new york", "paris", "berlin", "madrid"];
let visitedCities = [];

for (let i = 0; i < cities.length; i++) {
  if (cities[i] === "paris" || cities[i] === "Paris") {
    continue;
  }
  visitedCities.push(cities[i]);
}
// console.log(visitedCities);

/* ----------- Problem 3------
use a for-of loop to iterate through the array `[1, 2, 3, 4, 5,]` and stop when the number 4 is found 
  Store the numbers before `4` in an array named `smallNumbers`.

*/

let Numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];

for (const num of Numbers) {
  if (num === 4) {
    break;
  }

  smallNumbers.push(num);
}
// console.log(smallNumbers);

/* ----------- Problem 4------
use a for-of loop to iterate through the array `["green tea", "black tea", "chai tea", "oolong tea", "earl grey tea"]` and skip the `"herbal tea"`.
    Store the other teas in an array named `preferredTeas`.
*/

let teaTypes = [
  "green tea",
  "black tea",
  "chai tea",
  "oolong tea",
  "earl grey tea",
  "herbal tea",
];

let preferredTeas = [];
for (const tea of teaTypes) {
  if (tea === "herbal tea") {
    continue;
  }
  preferredTeas.push(tea);
}

// console.log(preferredTeas);

/* ----------- Problem 5---------


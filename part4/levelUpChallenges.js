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
use for-in loop to loop through an object containing city populations.
    Stop the loop when the population `"berlin"` is found and store all previous cities' populations in a new object named `cityPopulations`.
*/
let cityPopulation = {
  london: 890000,
  Newyork: 8400000,
  berlin: 3400000,
  paris: 2200000,
  madrid: 3500000,
};

let cityNewPopulations = {};
// console.log(Object.keys(cityPopulation)); //[ 'london', 'newyork', 'paris', 'berlin', 'madrid' ]
// console.log(Object.values(cityPopulation)); //[ 890000, 8400000, 2200000, 3400000, 3500000 ]

for (const city in cityPopulation) {
  if (city === "berlin") {
    break;
  }
  cityNewPopulations[city] = cityPopulation[city];
}
// console.log(cityNewPopulations); // { london: 890000, Newyork: 8400000 }

//problem 7 for each loop

let TeaTypes = ["earl", "green", "black", "chai", "oolong", "herbal"];
let availableTeas = [];

TeaTypes.forEach(function (tea) {
  //   console.log(tea);

  if (tea === "chai") {
    return;
  }
  availableTeas.push(tea);
});

// console.log(availableTeas);

//problem 8   for-each loop

let worldCities = ["london", "new york", "paris", "berlin"];
let travelCities = [];

worldCities.forEach(function (city) {
  if (city === "paris") {
    return;
  }
  travelCities.push(city);
});

// console.log(travelCities);

//problem 9 for loop

let MyNumbers = [2, 5, 7, 9];
let DoubleNumbers = [];

for (let i = 0; i < MyNumbers.length; i++) {
  if (MyNumbers[i] === 7) {
    continue;
  }
  DoubleNumbers.push(MyNumbers[i] * 2); // Multiply each number by 2
}
// console.log(DoubleNumbers);

//problem 10 for-of loop

let TeaCollection = [
  "green tea",
  "black tea",
  "chai tea",
  "oolong tea",
  "earl grey tea",
];
let shortTeas = [];

for (const tea of TeaCollection) {
  if (tea.length > 10) {
    //if the length of the tea is greater than 10, skip it
    break;
  }
  shortTeas.push(tea);
}
// console.log(shortTeas);

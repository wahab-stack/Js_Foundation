//problem 1

let teaFlavours = ["Green Tea", "Black Tea", "Oolong Tea"];
const firstTea = teaFlavours[0];
// console.log(firstTea);

//problem 2

let cities = ["London", "Tokyo", "Paris", "New York"];
const favCity = cities[2];
// console.log(favCity);

//problem 3

let teaTypes = ["herbal tea", "white tea", "masada chai"];
teaTypes[1] = "jasmine tea";
// console.log(teaTypes);

//problem 4

let citiesVisited = ["Mumbai", "Sydney"];
// citiesVisited[2] = "berlin";
// console.log(citiesVisited.length);
citiesVisited.push("berlin");
// console.log(citiesVisited);

//problem 5

let teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
const lastOrder = teaOrders.pop();
// console.log(teaOrders);
// console.log(lastOrder);

//problem 6

let popularTea = ["green tea", "oolong tea", "chai"];
// let softCopyTeas = [popularTea];    //Soft copy or shallow copy
// console.log(softCopyTeas);

//problem 7

let topCities = ["Berlin", "Singapore", "New York"];
let hardCopyCities = topCities.slice(); //Hard copy or Deep Copy
// let hardCopyCities = topCities;    // another way

// console.log(hardCopyCities);

//problem 8

let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "bangkok"];
let worldCities = europeanCities.concat(asianCities);
// console.log(worldCities);

// problem 9

let teaMenu = ["Masada tea", "oolong tea", "green tea", "earl grey"];

let menuLength = teaMenu.length;
// console.log(menuLength);

//problem 10

let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];

let isLondonList = cityBucketList.includes("London");
console.log(isLondonList);

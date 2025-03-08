//---------------Numbers------------ as 1,2,3,4,5,6

let num1 = 200;
let newNum1 = new Number(30);

// console.log(typeof num1);
// console.log(typeof newNum1);
// console.log(newNum1.valueOf());
// console.log(num1);

//----------------boolean------------ true or false
let inActive = true;
let isReallyActive = new Boolean(true); // Not recommended

//----------------null and undefined-------empty or nothing ----undefined means gives no defineition of it
let firstname = "Abdul";
let lastname = "Wahab";
// console.log(firstname);
// console.log(lastname);

//------------------string------ for showing message

let myString = "Hello World";
let myStringOne = "vola";
let username = "wahab";

let oldgreet = myString + " " + username;
// console.log(oldgreet);

let greetmessage = `Hello ${username} !`; // string interpullation
// console.log(greetmessage);

//-------------------symbol--------to be uniquness
let sm1 = Symbol("abdul");
let sm2 = Symbol("Wahab");
console.log(sm1);

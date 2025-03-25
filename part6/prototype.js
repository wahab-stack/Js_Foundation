let computer = { cpu: 12 };
let lenovo = {
  screen: "HD",
  __proto__: computer,
};
let tomHardware = {};

// console.log(`computer`, computer.__proto__);
// most common way to access prototype

console.log(`lenovo`, computer.__proto__);

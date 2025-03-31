let heros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "web",

  getSpiderManpower: function () {
    console.log(`spiderman power ${this.spiderman}`);
  },
};
Object.prototype.allheros = function () {
  console.log(`all powers for heros`);
};

// heroPower.allheros();
// heros.allheros();

//Inheritance
const user = {
  name: "chai",
  employee: 20,
};

const teacher = {
  makevedio: true,
};
const TeachingSupport = {
  isAvailable: false,
};
const TAsupport = {
  makeAssignment: "JS assignment",
  fulltime: true,
  __proto__: TeachingSupport,
};

teacher.__proto__ = user;

//Modern syntax

Object.setPrototypeOf(TeachingSupport, teacher);

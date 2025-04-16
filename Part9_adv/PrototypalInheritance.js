function person(name) {
  this.name = name;
}

person.prototype.greet = function () {
  console.log(`hello, my name is ${this.name}`);
};

let abdul = new person("Abdul");
abdul.greet();

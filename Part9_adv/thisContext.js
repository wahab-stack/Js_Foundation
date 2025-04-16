const person = {
  name: "abdul",
  greet() {
    console.log(`Hi, I am ${this.name}`);
  },
};

person.greet();

const greetFunction = person.greet;
greetFunction();

const boundGreet = person.greet.bind({ name: "Wahab" });
boundGreet();

//bind , call , and apply

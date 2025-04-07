// Abstraction

class CoffeeMachine {
  start() {
    //Call DB
    //filter Value

    return `Starting the machine...`;
  }

  brewCoffee() {
    //complex Calculation
    return `Brewing Coffee `;
  }
  pressStartButton() {
    let mesgOne = this.start();
    let mesgTwo = this.brewCoffee();
    return `${mesgOne} + ${mesgTwo}`;
  }
}

let myMachine = new CoffeeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());
// console.log(myMachine.pressStartButton());

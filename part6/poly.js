// Polymorphism --- means the ability of something o have or to be displayed more than one form

//poly -- many
//morphism -- structure

class Bird {
  fly() {
    return `flying......`;
  }
}
class Penguin extends Bird {
  fly() {
    return `penguin cant fly .... `;
  }
}

let bird = new Bird();
let penguin = new Penguin();

console.log(bird.fly());
console.log(penguin.fly());

//Static method

class Calculator {
  static add(a, b) {
    return a + b;
  }
}

// let miniCalcu = new Calculator();
// console.log(miniCalcu.add(2, 3));

// console.log(Calculator.add(2, 5));

//Getters And Setters

class employee {
  #salary;
  constructor(name, salary) {
    if (salary < 0) {
      throw new Error("Salary can not be in negative ");
    }
    this.name = name;
    this._salary = salary;
  }
  get salary() {
    return `You are not allowed to see salary`;
  }

  set salary(value) {
    if (value < 0) {
      console.error("Invalid Salary");
    } else {
      this._salary = value;
    }
  }
}

let emp = new employee("Alice", 50000);
console.log(emp.salary);
console.log(emp._salary);

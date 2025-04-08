function SetUsername(username) {
  this.username = username;
  // console.log("called");
}

function CreateUser(username, email, password) {
  SetUsername.call(this, username);
  this.email = email;
  this.password = password;
}
const user = new CreateUser("AB", "ab@gmail.com", "1234");
// console.log(user);

//Udemy task

class BankAccount {
  constructor(initialBalance = 0) {
    this._balance = initialBalance;
  }

  // Getter for balance (read-only access)
  get balance() {
    return this._balance;
  }

  // Deposit method (adds to balance)
  deposit(amount) {
    if (typeof amount !== "number" || amount <= 0) {
      throw new Error("Deposit amount must be a positive number");
    }
    this._balance += amount;
    return `Deposited $${amount}. New balance: $${this._balance}`;
  }

  // Withdraw method (subtracts from balance)
  withdraw(amount) {
    if (typeof amount !== "number" || amount <= 0) {
      throw new Error("Withdrawal amount must be a positive number");
    }
    if (amount > this._balance) {
      throw new Error("Insufficient funds");
    }
    this._balance -= amount;
    return `Withdrew $${amount}. Remaining balance: $${this._balance}`;
  }
}

const account = new BankAccount(100);

console.log(account.balance); // 100 (uses getter)
console.log(account.deposit(50)); // "Deposited $50. New balance: $150"
console.log(account.withdraw(30)); // "Withdrew $30. Remaining balance: $120"

// Attempt invalid operations
try {
  account.withdraw(-10); // Throws: "Withdrawal amount must be a positive number"
} catch (error) {
  console.error(error.message);
}

try {
  account.withdraw(200); // Throws: "Insufficient funds"
} catch (error) {
  console.error(error.message);
}

// Balance cannot be modified directly (encapsulation)
account._balance = 1000; // ❌ Doesn't affect the actual balance (private convention)
console.log(account.balance); // Still 120 (proves encapsulation)

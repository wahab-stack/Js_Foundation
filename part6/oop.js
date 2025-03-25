const user = {
  username: "Abdul",
  loginCount: 7,
  signedIn: true,

  getUserDetails: function () {
    console.log(
      `Username is ${this.username}, user has logged in ${this.loginCount} times`
    );
  },
};

// console.log(user.username);
console.log(user.getUserDetails());

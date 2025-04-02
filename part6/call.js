function SetUsername(username) {
  this.username = username;
  console.log("called");
}

function CreateUser(username, email, password) {
  SetUsername.call(this, username);
  this.email = email;
  this.password = password;
}
const user = new CreateUser("AB", "ab@gmail.com", "1234");
console.log(user);

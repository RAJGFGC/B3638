class User {
  // lets create a constructor
  constructor(firstName, lastName) {
    this.fName = firstName;
    this.lName = lastName;
  }
  //   fName = "Manikandan";
  //   lName = "Anbalagan";

  getName(fName, lName) {
    var fullName = fName + " " + lName;
    return fullName;
  }
  get result() {
    return this.getName(this.fName, this.lName);
  }
}

const user = new User("John", "Wick"); // instance - class teacher - object
console.log(user.result);

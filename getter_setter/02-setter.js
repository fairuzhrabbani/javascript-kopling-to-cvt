/*
 * Setter untuk mengubah data pada sebuah property di Object
 */

// Setter
const person = {
  firstName: "Fairuz",
  lastName: "Hanif",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }, // fullName disini menjadi property
  set fullName(val) {
    const array = val.split(" ");
    this.firstName = array[0];
    this.lastName = array[1];
  },
};

person.fullName = "Andi Dadang";

console.log(person);
console.log(person.fullName);
console.log(person.firstName);
console.log(person.lastName);

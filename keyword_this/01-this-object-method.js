/*
 * Kata kunci this adalah referensi ke object milik siapa
 * dalam object method, this merupakan referensi ke object pemilik functionya
 * dalam global scope, this merupakan referensi ke global object (di browser biasanya Window)
 * dalam function scope, this merupakan referensi ke global object (di browser biasanya Window)
 */
// Global
console.log(this); // Window

// this di object method
const person = {
  name: "Fairuz",
  age: 30,
  balane: 150000,
  sayHello: function (name, age) {
    // this.property = akan mengakses property dari object person
    console.log(
      `Hi, My Name is ${name} My age is ${age} : My Name is ${this.name} My age is ${this.age}`,
    );
    // this.name disini mengakses dari name person. karen jika person.name tidak bisa di akses
  },
};
person.sayHello("Ronaldo", "49");
person.sayHello("Messi", "50");

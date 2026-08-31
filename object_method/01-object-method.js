/*
 * Function di object kadang disebut dengan Object Method
 */

// Object Method cara pertama
function sayHello(name) {
  return `Hello Nama saya adalah ${name}`;
}

const person = {
  name: "Fairuz",
  say: sayHello,
};

const resultFirst = person.say("Ronaldo");
const resultSecond = person.say("Messi");

console.log(person.say);
console.log(resultFirst);
console.log(resultSecond);

// Objec Method cara kedua
const user = {
  name: "Fairuz",
  age: 30,

  sayHello() {
    console.log(`Hello, nama saya ${this.name}`);
  },
};

user.sayHello();

// Object Method cara ketiga
const personFirst = {
  name: "Rabbani",
};

personFirst.alamat = function (alamat) {
  console.log(`Alamat Anda Di ${alamat}`);
};

personFirst.alamat("Jakarta Raya");

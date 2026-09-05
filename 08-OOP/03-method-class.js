/*
 * Method adalah function yang dimiliki oleh Class/Object.
 * Method pada Class berfungsi sebagai melakukan sesuatu terhadap data object.
 * this.name pada Method getRas() mengambil property name dari Object yang sedang memanggil Method
 * Kenapa menggunakan this.name ? Karena setiap Object mempunyai name yang berbeda.
 * 
 * Memahami this
 * bulldog.getRas(); sebenernya this = bulldog, maka this.name menjadi bulldog.name yaitu "Bulldog Amerika"
 */
class Dog {
  constructor(name, colour, eyeColour, height) {
    this.name = name;
    this.colour = colour;
    this.eyeColour = eyeColour;
    this.height = height;
  }

  getRas() {
    return `Anjing ini berasal dari Ras ${this.name}`;
  }
}

// Create Instance Object
const bulldog = new Dog("Bulldog Amerika", "black", "blue", "180cm");
const cihuahua = new Dog("Cihuahua Indonesia", "red", "green", "50cm");
const husky = new Dog("Husky Jerman", "blue", "white", "250cm");

console.log(bulldog.getRas());
console.log(cihuahua.getRas());
console.log(husky.getRas());

class Person {
  constructor(firstName, middleName, lastName, age) {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.age = age;
  }

  sayHello(name) {
    return `Hi ${name}, My Name is ${this.firstName} ${this.middleName} ${this.lastName}. My age is ${this.age}th`;
  }
}
// Create Object Instance
const person = new Person("Fairuz", "Hanif", "Rabbani", 30);

// Create Variable for handle Method sayHello
const ronaldo = person.sayHello("Ronaldo");
const messi = person.sayHello("Messi");

console.log(ronaldo);
console.log(messi);

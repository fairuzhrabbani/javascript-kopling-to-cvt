/*
 * Property Class, parameter ini nantinya digunakan untuk memberikan data kepada Object (instance Object).
 * this.name = name -> this.name adalah property milik Object (instance Object). name adalah parameter dari constructor.
 * Artinya ambil nilai name dari parameter, lalu simpan ke property name milik Object ini.
 *
 * Flownya seperti ini
 *
 * Class
 *  ↓
 * constructor
 *  ↓
 * parameter constructor
 *  ↓
 * this.property = parameter
 *  ↓
 * new Class(value1, value2, value3, value4)
 *  ↓
 * Instance Object*
 */

class Dog {
  constructor(name, colour, eyeColour, height) {
    this.name = name;
    this.colour = colour;
    this.eyeColour = eyeColour;
    this.height = height;
  }
}

// Create Instance Object
const bulldog = new Dog("Bulldog Amerika", "black", "blue", "180cm");
const cihuahua = new Dog("Cihuahua Indonesia", "red", "green", "50cm");
const husky = new Dog("Husky Jerman", "blue", "white", "250cm");

console.log(bulldog);
console.log(cihuahua);
console.log(husky);

console.log(`Anjing ini berasal dari ras ${bulldog.name}`);
console.log(`Anjing ini berasal dari ras ${cihuahua.name}`);
console.log(`Anjing ini berasal dari ras ${husky.name}`);

const jsonData = JSON.stringify(bulldog, null, 2);
console.log(jsonData);

const objData = JSON.parse(jsonData);
console.log(objData);

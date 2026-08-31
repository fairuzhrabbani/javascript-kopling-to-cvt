/*
 * Destructuring adalah fitur yang bisa digunakan untuk membongkar value-value di array atau object ke dalam variable-variable
 */

// Mengambil dan menyimpan data dari array secara manual
const names = ["Fairuz", "Budi", "Andi"];
const firstName = names[0];
const middleName = names[1];
const lastName = names[2];

console.log(firstName);
console.log(middleName);
console.log(lastName);

// Menggunakan Destructuring
const fullNames = ["Handoko", "Wahyudi", "Joko", "Susilo", "Prabowo", "Koko", "Kiki"];
const [firstFullName, secondFullName, thirdFullName, ...others] = fullNames;

console.log(firstFullName);
console.log(secondFullName);
console.log(thirdFullName);
console.log(others);
console.log(others[0]);
console.log(others[1]);
console.log(others[2]);
console.log(others[3]);

// Default Value
const fullNamesValue = ["Andi", "Budi"];
const [firstfullNamesValue, secondfullNamesValue, thirdfullNamesValue = "Wahyudi"] = fullNamesValue;
console.log(fullNamesValue);
console.log(firstfullNamesValue);
console.log(secondfullNamesValue);
console.log(thirdfullNamesValue);

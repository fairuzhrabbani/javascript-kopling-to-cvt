/*
 * Arrow Function adalah alternatif pembuatan function yang lebih sederhana dari function biasanya
 * Namun terdapat limitasi dan juga tidak bisa digunakan disemua situasi
 * Jika diperhatikan , Arrow Function sangat mirip dengan Anonymous Function
 */

/* 
! Kekurangan Arrow Function
! tidak memiliki fitur arguments object
! tidak bisa menggunakan function generator
! tidak bisa mengakses this (function object)
! tidak bisa mengakses super (OOP)
*/

// =========================================================
// Anonymous Function
// =========================================================
const sayHelloAnonim = function (name) {
  return `Hello, ${name}`;
};
const resultAnonim = sayHelloAnonim("Fairuz Hanif Rabbani");
console.log(resultAnonim);

// =========================================================
// Arrow Function - dengan block
// =========================================================
const sayHelloArrow = (name) => {
  return `Hello, ${name}`;
};
const resultArrow = sayHelloArrow("Fairuz Hanif Rabbani");
console.log(resultArrow);

// =========================================================
// Arrow Function - tanpa block biasanya isinya sederhana atau hanya 1 baris
// =========================================================
const haiBroFirst = (name) => console.log(`Hello, ${name}`);
haiBroFirst("Ronaldo");

const haiBroSecond = (name) => console.log(`Hello, ${name}`);
haiBroSecond("Messi"); // tanpa tutup kurung pada paremeter karena hanya 1 parameter seperti ini bisa

/*
 * Arrow function return value
 * jika menggunakan block perlu menggunakan return
 * jika tidak menggunakan block , tidak perlu manggil return
 */
const sumWithReturn = (first, second) => {
  const result = first + second;
  return `Hasil pertambahan ${first} + ${second} adalah ${result}`;
};

const resultSum = sumWithReturn(10, 5);
console.log(resultSum);

// =========================================================
// Arrow Function - (secara default arrow function sudah mengembalikan return)
// =========================================================
const sumWithoutReturn = (first, second) => first + second;
console.log(sumWithoutReturn(10, 5));

/*
 * Arrow Function sebagai parameter
 */
function giveMeName(callback) {
  callback("Fairuz");
}
// Versi Arrow Function
giveMeName(name => console.log(`Hello ${name}`));

// Versi Anonymous
giveMeName(function (name) {
  console.log(`Hello ${name}`);
});
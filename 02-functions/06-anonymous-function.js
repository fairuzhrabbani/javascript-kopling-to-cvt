/*
 * Anonymous Function adalah Function tanpa nama
 * Disimpan dalam Variabel: Sering dimasukkan ke dalam variabel agar bisa dipanggil nanti.  
 */

// =========================================================
// Function biasa
// =========================================================
function sayHello(name) {
  return `Hello, ${name}`;
}
const say = sayHello("Fairuz Hanif Rabbani");
console.log(say);

// =========================================================
// Anonymous Function
// =========================================================
const hello = function (name) {
  return `Hello, ${name}`;
};
const hasil = hello("Cristiano Ronaldo");
console.log(hasil);

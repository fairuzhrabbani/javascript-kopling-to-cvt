/*
 * Scope adalah wilayah atau ruang lingkup tempat sebuah variabel dapat diakses.
 * Scope merupakan area akses sebuah data
 * Jenis Scope di JavaScript Ada 2 yang perlu dikuasai.
 * Global Scope
 * Function Scope/Local Scope
 * Setiap kita membuat function, maka kita akan membuat local scope untuk function tersebut
 * Data di Global scope bisa di akses dari Function/Local scope
 * Data di Function/Local scope hanya bisa di akses di Function/Local tersebut atau local scope di bawahnya (function didalam function)
 */

/*
 * Global Scope
 */
// this is global scope
let counter = 0;

function hitMe() {
  // Local Scope function hitMe
  counter++; // can access variable from Global Scope
}

hitMe();
hitMe();
hitMe();

console.log(counter);

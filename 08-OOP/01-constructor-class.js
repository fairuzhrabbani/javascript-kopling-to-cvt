/* 
* OOP atau Object Oriented Programming adalah sudut pandang bahasa pemograman yang berkonsep "object"
* ada beberapa istilah yang perlu di mengerti dalam OOP yaitu : Object dan Class

* Object adalah data yang berisikan field / properties / attribute dan method / function / behaviour
* Class adalah blueprint (prototype) atau cetakan untuk membuat Object

* Class berisikan deklarasi semua properties dan function yang dimiliki oleh Object
* Setiap Object selalu dibuat dari Class
* Dan sebuah Class bisa membuat Object tanpa batas
*/

/*
 * Sejak EcmaScript versi 6, di perkenalkan kata kunci Class
 * Dengan Class, kita tidak perlu lagi menggunakan Constrcutor Function untuk membuat Class
 * Anggap saja Class sebagai cetakan/blueprint untuk membuat Object.
 * Constructor adalah method khusus yang otomatis dijalankan ketika kita membuat Object menggunakan 'new' yang berisikan properties
 * Kata kunci 'new' digunakan untuk membuat Object baru (instance Object) berdasarkan Class Dog.
 */

// Code : Constructor di Class
class Dog {
  constructor() {}
}

const bulldog = new Dog();
console.log(bulldog);

const cihuahua = new Dog();
console.log(cihuahua);

const husky = new Dog();
console.log(husky);

console.log(Dog);
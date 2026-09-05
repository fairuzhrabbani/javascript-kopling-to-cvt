/*
 * Console digunakan untuk menampilkan informasi ke Terminal.
 * Tanpa console, kita tidak bisa menampilkan informasi ke Terminal.
 * Console adalah object bawaan JavaScript dan log adalah method yang digunakan untuk menampilkan informasi ke Terminal.
 */

console.log("Hello World"); //string

console.log(100); //number

console.log(true); // boolean

console.log(false); //boolean

console.log(null); //null

console.log(undefined); //undefined

console.log("Nama", "Fairuz"); //string

console.log("Nama: " + "Fairuz"); //menggabungkan string

console.log("QA", 5, true); //mixed

console.log({
  username: "Fairuz",
  age: 20,
  isStudent: true,
}); //object

console.log([1, 2, 3, 4, 5]); //array

/*
* console.table() digunakan untuk menampilkan data dalam bentuk tabel. 
* Data yang ditampilkan bisa berupa array atau object. 
* Jika data yang ditampilkan berupa array, 
* maka index array akan menjadi kolom pertama dan nilai array akan menjadi kolom kedua.

* Jika data yang ditampilkan berupa object, maka key object 
* akan menjadi kolom pertama dan nilai object akan menjadi kolom kedua.
*/
console.table(["Fairuz", "Rabbani", "QA", 5, true]); // menampilkan array data dalam bentuk tabel
console.table({ username: "Fairuz", age: 20, isStudent: true }); // menampilkan data object dalam bentuk tabel

const firstName = "Fairuz";
const middleName = "Hanif";
const lastName = "Rabbani";

console.log(firstName + " " + middleName + " " + lastName); //TIDAK DI SARANKAN.

console.log(`Nama Saya adalah ${firstName} ${middleName} ${lastName}`); //DISARANKAN menggunakan Template Literal.

console.log(
  `Nama Saya adalah ${firstName} ${middleName} ${lastName}\nSaya berumur ${20 + 7} tahun\nTerimakasih`,
); //DISARANKAN menggunakan Template Literal.

// console.log()	      Menampilkan informasi
// console.error()	    Menampilkan pesan error
// console.warn()	      Menampilkan peringatan
// console.table()	    Menampilkan array/object dalam bentuk tabel
// console.dir()	      Menampilkan struktur object
// console.time()	      Memulai timer
// console.timeEnd()	  Mengakhiri timer dan menampilkan durasi

/*
 * Data Type adalah jenis data yang disimpan di dalam sebuah variable.
 */
const nama = "Fairuz"; //string

const umur = 27; //number

const login = true; //boolean

const foto = null; //sengaja mengosongkan. keunikannya null di javascript adalah object

let myName; //Belum pernah diisi hasilnya akan undefined

const user = {
  nama: "Fairuz",
  umur: 27,
  aktif: true,
}; // object

const buah = ["Apel", "Jeruk", "Mangga"]; // array

console.log(typeof nama); // string
console.log(typeof umur); // number
console.log(typeof login); // boolean
console.log(typeof foto); // object
console.log(typeof myName); // undefined
console.log(typeof user); // object
console.log(typeof buah); // object
console.log(Array.isArray(buah)); // true

/* 

* Perbedaan antara Object dan Array 

? Object	
? - Menyimpan data berdasarkan nama property (key)	
? - Menggunakan { } curly braces
? - Diakses menggunakan nama property
? - Cocok untuk satu entitas/data

? Array
? - Menyimpan data berdasarkan urutan (index)
? - Menggunakan [ ] braces
? - Diakses menggunakan index
? - Cocok untuk kumpulan data

*/

/* 
* Object adalah struktur data yang digunakan untuk menyimpan data dalam bentuk pasangan key/property/attribute : value.
* Index pada Object biasanya disebut attribute/properties bukan INDEX
*/

const orang = {};
console.log(orang);

// Menambah atau mengubah attribute/properties 
orang["nama"] = "Fairuz Hanif Rabbani";
orang["umur"] = 20;
orang["status"] = true;
console.log(orang);

// Mendapat data object
console.log(orang.nama);
console.log(orang.umur);
console.log(orang.status);

// Menghapus
delete orang["status"];
console.log(orang);

console.log('=====PARSE=====')
// Sebelum dilakukan Parse JSON 
const data = '{\"name\":\"Fairuz\",\"age\":27}' // data masih berupa string
console.log(data)

const obj = JSON.parse(data); // data sudah diubah menjadi object 
// Setelah dilakukan Parse JSON
console.log(obj);


console.log('=====STRINGIFY=====')
// Sebelum dilakukan Stringify JSON
const user = {
    name: "Fairuz",
    age: 27
} // data masih berupa object
console.log(user);

// Setelah dilakukan Stringify JSON
const json = JSON.stringify(user);// data sudah diubah menjadi string
console.log(json);

 /*
  * JSON PARSE digunakan untuk mengubah data JSON menjadi OBJECT.
  * JSON STRINGIFY digunakan untuk mengubah data OBJECT menjadi JSON.
  */
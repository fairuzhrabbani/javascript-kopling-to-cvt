/* 
* Array adalah struktur data yang digunakan untuk menyimpan banyak nilai dalam satu variabel secara berurutan.
* Array menggunakan index, dan index dimulai dari 0.
* Array bisa berisi berbagai tipe data
*/
const names = [];
console.log(names);

// Menambahkan data ke dalam array array.push
names.push("Fairuz");
names.push("Andi","Budi","Ronaldo","Messi");
console.table(names);

// Untuk mendapatkan panjang array array.length
console.log(names.length)

// Mendapat data di posisi Index array[index]
console.log(names[3]);

// Mengubah data di posisi Index array[index] = value
const hari = ["Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"]
console.table(hari);

hari[1] = "Minggu";
console.table(hari);

// Menghapus data di posisi index, namun index tidak bergeser delete array[index]
const mobil = ["Suzuki","Toyota","Honda"]
console.table(mobil);

delete mobil[1];
console.table(mobil);
console.table(mobil[1]); //Undefined

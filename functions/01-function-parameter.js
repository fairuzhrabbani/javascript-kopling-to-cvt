/* 
* Function adalah sekumpulan kode/block code yang dibuat untuk melakukan suatu tugas tertentu, dan dapat dipanggil kapan saja ketika dibutuhkan.
* Untuk memanggil Function, cukup namaFunction() contoh login();

*/

// Membuat Function dengan nama login tanpa menggunakan parameter
function login() {
  console.log("1. Login");
  console.log("2. Validasi Username");
  console.log("3. Validasi Password");
  console.log("4. Berhasil Login");
}

// Menjalankan Function Login
login();
login();

/*
 * Parameter digunakan untuk menerima data.
 * Function dengan parameter adalah function yang memiliki inputan untuk memproses data tertentu.
 * Parameter adalah variabel yang hanya di dalam function tersebut.
 * Argument adalah nilai yang dikirim ketika function dipanggil.
 * Jika sebuah parameter tidak dipanggil, maka akan menghasilkan nilai undefined.
 */

// Membuat Function dengan nama sayHappyBirthdayFirst dengan 1 parameter yaitu name
function sayHappyBirthdayFirst(name) {
  console.log(`Happy Birthday, ${name}`);
}

// Menjalankan Function sayHappyBirthdayFirst dengan parameter
sayHappyBirthdayFirst("Alice");
sayHappyBirthdayFirst("Bob");

// Membuat Function dengan nama sayHappyBirthdaySecond lebih dari 1 parameter yaitu name dan age
function sayHappyBirthdaySecond(name, age) {
  console.log(`Happy Birthday, ${name}! You are now ${age}.`);
}

// Menjalankan Function sayHappyBirthdaySecond lebih dari 1 parameter
sayHappyBirthdaySecond("Alice", 25);
sayHappyBirthdaySecond("Bob", 30);

// Menjalankan Function sayHappyBirthdaySecond tanpa ada Argument
sayHappyBirthdaySecond("Fairuz"); // age akan undefined
sayHappyBirthdaySecond(); //name dan age akan undefined

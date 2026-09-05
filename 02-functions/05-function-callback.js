/*
 * Callback Function adalah function yang dikirim sebagai parameter ke function lain,
 * Kemudian dipanggil (di-"call back") oleh function tersebut pada waktu yang tepat.
 * Function bisa menjadi data (value) yang dikirim ke function lain.
 * Tanpa callback function, function hanya bisa mengembalikan satu nilai.
 *
 */

function salam() {
  console.log("Ini Function Salam");
}

function perkenalan() {
  console.log("Ini Function Perkenalan");
}

salam();
perkenalan();
// Di sini kedua function berdiri sendiri.

// =========================================================
// Dengan Callback Function, function bisa mengembalikan lebih dari satu nilai.
// =========================================================
function proses(callback) {
  console.log("Proses dimulai");

  callback();

  console.log("Proses selesai");
}
function selesai() {
  console.log("Data berhasil diproses");
}

proses(selesai);

// =========================================================
// Callback dengan Anonymous Function
// =========================================================
function hello(callback) {
  console.log("Halo Anonymous");

  callback();

  console.log("Selesai Anonymous");
}

hello(function () {
  console.log("Selamat Datang");
});

// =========================================================
// Callback dengan Arrow Function
// =========================================================
function sayHi(callback) {
  console.log("Halo Arrow");

  callback();

  console.log("Selesai Arrow");
}

sayHi(() => {
  console.log("Selamat Datang");
});

// =========================================================
// Callback dengan Parameter
// =========================================================
function hitung(a, b, callback) {
    const hasil = a + b;

    callback(hasil);
}
hitung(10, 5, function (hasil) {
    console.log("Hasilnya:", hasil);
});

// =========================================================
// Callback pada Array
// =========================================================
const buah = ["Apel", "Mangga", "Jeruk"];

buah.forEach(function (item) {
    console.log(item);
}); // Version Anonymous Function

buah.forEach((item) => {
    console.log(item);
});// Versi Arrow Function

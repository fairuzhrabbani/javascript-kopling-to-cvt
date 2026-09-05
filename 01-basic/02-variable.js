/*
 * Variable adalah tempat untuk menyimpan sebuah nilai agar bisa digunakan kembali.
 * Di javascript, variable bisa dibuat menggunakan kata kunci var, let, dan const.
 * - var     : variable yang bisa diubah nilainya dan bisa diakses dari luar blok (tidak disarankan).
 * - let     : variable yang bisa diubah nilainya dan hanya bisa diakses dari dalam blok.
 * - const   : variable yang tidak bisa diubah nilainya dan hanya bisa diakses dari dalam blok.
 */

// CONST
const username = "admin";
const umur = 30;
// const umur = 27; // error karena variable const tidak bisa diisi ulang

console.log(`Username : ${username}`);
console.log(`Umur : ${umur}`);

// const username = "supervisor"; // error karena variable const tidak bisa diisi ulang
// console.log(`Supervisor : ${supervisor}`);

// LET
let saldo = 100000;
saldo = saldo + 50000;
// Jika menggunakan CONST maka akan error karena variable const tidak bisa diisi ulang.
console.log(`Saldo Anda saat ini : Rp${saldo}`);

// VAR - untuk var sudah jarang di gunakan
var angka = 50;
console.log(angka);

/*
 * Aturan penamaan nama variable yang BENAR (gunakan camelCase)
 * - const username = "admin";
 * - const accessToken = "ABC123";
 * - const totalPrice = 50000;
 * - const myFirstName = "Fairuz";
 */

/* 
! Aturan penamaan nama variable yang SALAH
! - const 1username = "admin"; error karena nama variable tidak boleh diawali dengan angka
! - const access-token = "ABC123"; error karena nama variable tidak boleh menggunakan tanda strip (-)
! - const total price = 50000; error karena nama variable tidak boleh menggunakan spasi
*/

/* 
? Keyword           = const	
? Fungsi            = Menyimpan nilai tetap (binding tetap)	
? Bisa diubah?      = ❌ Tidak bisa di-assign ulang	
? Kapan digunakan   = Default untuk hampir semua variable

? Keyword           = let	
? Fungsi            = Menyimpan nilai yang dapat berubah	
? Bisa diubah?      = ✅ Bisa di-assign ulang	
? Kapan digunakan   =  Counter, loop, akumulasi nilai

? Keyword           = var	
? Fungsi            = Cara lama membuat variable	
? Bisa diubah?      = ✅ Bisa, tetapi tidak disarankan	
? Kapan digunakan   = Hampir tidak digunakan pada project modern
*/

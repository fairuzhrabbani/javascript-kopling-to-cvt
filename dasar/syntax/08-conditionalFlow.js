/* 
* Conditional Flow adalah mekanisme pengambilan keputusan dalam program berdasarkan suatu kondisi.

* Jika kondisi benar (true)
* maka lakukan A

* Jika kondisi salah (false)
* maka lakukan B

* if
* else
* else if
* switch
* ternary operator
*/

// IF
let saldoPertama = 1000000;

if (saldoPertama >= 500000) {
  console.log(`Saldo anda adalah ${saldoPertama} Silahkan masukan PIN`);
}

// IF ELSE
let password = 123456;

if (password === 123456) {
  console.log("Login Berhasil");
} else {
  console.log("Password Salah");
}

// ELSE IF
let saldoKedua = 999999;

if (saldoKedua >= 5000000) {
  console.log("Nasabah Platinum");
} else if (saldoKedua >= 3000000) {
  console.log("Nasabah Gold");
} else if (saldoKedua >= 1000000) {
  console.log("Nasabah Silver");
} else {
  console.log("Nasabah Regular");
}

//  SWITCH CASE
let statusTransfer = "monyet";

switch (statusTransfer) {
  case "SUCCESS":
    console.log("Transfer Success");
    break;

  case "PENDING":
    console.log("Transfer Pending");
    break;

  case "FAILED":
    console.log("Transfer Failed");
    break;

  default:
    console.log("Status Transfer Tidak Dikenal");
}

/*
 * TERNARY OPERATOR Ternary adalah versi singkat dari if...else.
 * Sebelum menggunakan Ternary
 * let saldoKetiga = 700000;
 * if (saldoPertama >= 500000) {
 *     console.log("Transfer Berhasil");
 * }
 * else {
 *     console.log("Saldo Kurang");
 * }
 *
 *
 */
// Menggunakan Ternary
let saldoKetiga = 700000;
let hasil = saldoKetiga >= 500000 ? "Transfer Berhasil" : "Saldo Kurang";
console.log(hasil);

/*
 * Return digunakan untuk mengembalikan nilai dari sebuah function.
 * Function yang memiliki return, akan mengembalikan nilai ketika dipanggil,
 * Dedangkan function yang tidak memiliki return, maka tidak akan mengembalikan nilai ketika dipanggil.
 * Perbedaan console.log() dan return adalah console.log() hanya mencetak nilai ke console, sedangkan return mengembalikan nilai ke pemanggil function.
 * Setelah ada kata 'return' , code apapun tidak akan di jalankan oleh mesin.
 */

// =========================================================
// Function tanpa Return
// =========================================================
function addFirst(a, b) {
  a + b;
}
addFirst(5, 10); // hasil tidak akan ditampilkan atau kosong

// =========================================================
// Function tanpa Return lalu dipanggil dengan console.log
// =========================================================
function addSecond(a, b) {
  a + b;
}
console.log(addSecond(5, 10)); // hasil menampilkan undefined

// =========================================================
// Function tanpa Return , tetapi terdapat variable untuk menampung parameter
// =========================================================
function addThird(a, b) {
  c = a + b;
}
addThird(7, 20); // hasil tidak akan ditampilkan atau kosong
console.log(c); // menampilkan pertambahan a + b tetapi tidak di simpan sebenernya

// =========================================================
// Function dengan Return
// =========================================================
function pertambahanFirst(a, b) {
  return a + b; // Mengembalikan hasil penjumlahan a dan b
}
console.log(pertambahanFirst(5, 10));

// =========================================================
// Function dengan Return lalu di buatkan Variable Function
// =========================================================
function pertambahanSecond(a, b) {
  return a + b; // Mengembalikan hasil penjumlahan a dan b
}
let hasil = pertambahanSecond(15, 10);
console.log(hasil);

// =========================================================
// Function dengan Return lalu tanpa dibuatkan Variable
// =========================================================
function sayHelloSecond(firstName, middleName, lastName) {
  const say = `Hello, My name is ${firstName} ${middleName} ${lastName}`;
  return say;
}
sayHelloSecond("Susilo", "Bambang", "Yudhoyono"); // hasil tidak akan ditampilkan atau kosong

// =========================================================
// Function dengan Return Variable
// =========================================================
function sayHelloFirst(firstName, middleName, lastName) {
  const say = `Hello, My name is ${firstName} ${middleName} ${lastName}`;
  return say;
}
const results = sayHelloFirst("Fairuz", "Hanif", "Rabbani");
console.log(results);

// =========================================================
// Function dengan Return lalu di gunakan oleh Variable lain
// =========================================================
function add(a, b) {
  return a + b;
}
let sum = add(5, 10);
console.log(sum);

let resultd = sum + 10;
console.log(resultd);

// =========================================================
// Function dengan Return dengan suatu kondisi (if)
// =========================================================
function checkAge(age) {
  if (age <= 18) {
    return "Your age is Too young";
  }
  return "Access granted";
}
const answer = checkAge(18);
console.log(answer);

// =========================================================
// Function dengan Return dengan suatu kondisi (if-else)
// =========================================================
function getFinalScore(value) {
  if (value > 90) {
    return "A";
  } else if (value > 80) {
    return "B";
  } else if (value > 70) {
    return "C";
  } else if (value > 60) {
    return "D";
  } else {
    return "E";
  }
}
const result = getFinalScore(81);
console.log(result);

// =========================================================
// Function dengan Return dengan suatu kondisi (for of & if)
// =========================================================
function isContains(array, searchValue) {
  for (const element of array) {
    if (element === searchValue) {
      return true;
    }
  }
  return false;
}
const array = [1, 2, 33, 4, 5, 6, 5, 7, 7, 7, 8, 4, 6, 7, 10, 1, 22, 42, 2];
const search = 99;
const found = isContains(array, search);
console.log(found);
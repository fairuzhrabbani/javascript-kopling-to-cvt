/*
 * Rest parameter adalah fitur dimana kita bisa mengirim data sebanyak-banyaknya pada suatu parameter dan secara otomatis akan di konversi menjadi Array.
 * Rest parameter hanya boleh ada satu di function, tidak boleh lebih dari satu
 * Rest parameter hanya boleh berada di posisi paling akhir, tidak boleh di depan ataupun di tengah
 */

function sumFirst(name, ...data) {
  let total = 0;
  for (const item of data) {
    total += item; // total = total + item;
  }
  return `Total ${name} is ${total}`;
}
const resultFirst = sumFirst("Belewah", 10, 20, 30, 40, 50, 60, 70);
console.log(resultFirst);

// ================================================

/*
 * Spread Syntax berguna untuk merubah data Array menjadi Rest Parameter
 */
function sumSecond(name, ...data) {
  let total = 0;
  for (const item of data) {
    total += item; // total = total + item
  }
  return `Total ${name} is ${total}`;
}
const jumlah = [10, 20, 30, 40, 50, 60, 70];

const resultSecond = sumSecond("Belewah", ...jumlah);
console.log(resultSecond);
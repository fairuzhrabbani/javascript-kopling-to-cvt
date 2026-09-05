/*
 * Recursive Function adalah kemampuan function memanggil function dirinya sendiri
 */

// =========================================================
// Contoh kasus factorial tanpa menggunakan Recursive
// =========================================================
function factorial(value) {
  let result = 1;
  for (let i = 1; i <= value; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(5));

// =========================================================
// Contoh kasus factorial menggunakan Recursive
// =========================================================
function factorialRecursive(value) {
  if (value === 1) {
    return 1;
  } else {
    return value * factorialRecursive(value - 1);
  }
}
console.log(factorialRecursive(5));
/*
 * 5 * factorialRecursive(4)
 * 5 * 4 * factorialRecursive(3)
 * 5 * 4 * 3 * factorialRecursive(2)
 * 5 * 4 * 3 * 2 * factorialRecursive(1)
 * 5 * 4 * 3 * 2 * 1
 */

/*
 * Nested Function adalah function didalam function
 * Function yang terdapat di dalam disebut dengan Inner function
 * Inner Function hanya bisa di akses ditempat kita membuat function nya , tidak bisa di akses dari luar functionya
 */

function outer() {
  console.log("Ini adalah Outer Function");

  function inner() {
    console.log("Ini adalah Inner Function");
  }

  inner();
}

outer();
// inner(); // inner is not defined

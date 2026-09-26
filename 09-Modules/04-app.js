import { sum, multiply } from "./math.js"; //Dengan ES Module Node.js, extension biasanya harus ditulis secara eksplisit.
// import { sum as tambah } from "./math.js"; // ini menggunakan alias

import tambah from "./defaultExport.js"; // Default Export , Default export tidak menggunakan {}.
import matematika from "./math2.js";

console.log(sum(10, 20));
console.log(multiply(10, 20));

console.log(tambah(10, 20));
console.log(matematika.sum(10, 4));

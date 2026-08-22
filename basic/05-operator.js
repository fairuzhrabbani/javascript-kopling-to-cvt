/* 
* Operator adalah simbol yang digunakan untuk melakukan operasi terhadap suatu nilai (operand).

* Arithmetic	Perhitungan	
* Assignment	Memberikan nilai	
* Comparison	Perbandingan	
* Logical	    Logika	
* String	    Menggabungkan string	
* Unary	        Menambah/Mengurangi
*/

/*
? Arithmetic Operator
? +	    Tambah
? -	    Kurang
? *	    Kali
? /	    Bagi
? %	    Modulus (Sisa Bagi)
? **	Pangkat
*/

const a = 10;
const b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);


/*
? Assignment Operator
? =	    Assignment
? +=	Tambah lalu simpan
? -=	Kurang lalu simpan? 
? *=	Kali lalu simpan
? /=	Bagi lalu simpan
*/

let saldo1 = 100000;
let saldo2 = 80000;
let saldo3 = 60000;
let saldo4 = 40000;

saldo1 += 50000;    // saldo1 = saldo1 + 50000;
saldo2 -= 25000;    // saldo2 = saldo2 - 25000;
saldo3 *= 2;        // saldo3 = saldo3 * 2;
saldo4 /= 2;        // saldo4 = saldo4 / 2;

console.log(saldo1);
console.log(saldo2);
console.log(saldo3);
console.log(saldo4);


/*
? Comparison Operator
? ==	    Sama dengan (longgar)
? ===	    Sama dengan (ketat)
? !=	    Tidak sama
? !==	    Tidak sama (ketat)
? >	        Lebih besar
? <	        Lebih kecil
? >=	    Lebih besar atau sama
? <=	    Lebih kecil atau sama
* Comparison Operator selalu menghasilkan nilai boolean (true/false)
*/

// console.log(5 == "5"); 
// akan menghasilkan true Karena == akan mencoba mengubah tipe data terlebih dahulu (type coercion).

// console.log(5 === "5"); 
// akan menghasilkan false Karena === membandingkan nilai dan tipe data secara ketat. Number ≠ String

console.log(100 > 50);
console.log(5 < 2);
console.log(100 >= 100);
console.log(80 <= 100);


/*
? Logical Operator
? &&	Logika AND
? ||	Logika OR
? !	    Logika NOT
* Untuk Logika NOT selalu menghasilkan nilai boolean (true/false)
*/

const login = true;
const admin = false;

console.log(login && admin); //true
console.log(login || admin);
console.log(!login);
console.log(!admin);

/* 
* AND (&&)
* | A     | B     |
* | ----- | ----- |
* | true  | true  |  true
* | true  | false |  false
* | false | true  |  false
* | false | false |  false
*/

/*
* OR (||)
* | A     | B     | 
* | ----- | ----- | 
* | true  | true  |  true 
* | true  | false |  true 
* | false | true  |  true
* | false | false |  false
*/

/* 
* NOT (!)
* | A     | Hasil |
* | ----- | ----- |
* | true  | false |
* | false | true  |
*/

/*
? Unary Operator (1 Operand)
? ++	Increment (menambah 1) Increment
? --	Decrement (mengurangi 1) decrement
? +	    Mengubah string menjadi number
? -	    Mengubah string menjadi number dan mengubah tanda menjadi negatif
* Binary Operator (2 Operand) 10 + 5
* Ternary Operator (3 Operand) umur >= 18 ? "Dewasa" : "Anak"; (conditional flow)
*/

let angka = 1;
angka++;
console.log(angka);

let angkaKedua = 5;
angkaKedua--;
console.log(angkaKedua); 

let angkaKetiga = +"100";
console.log(angkaKetiga);
// console.log(typeof angkaKetiga);

let angkaKeempat = -"100";
console.log(angkaKeempat);
// console.log(typeof angkaKeempat);

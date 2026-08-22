/*
* for	        Jumlah perulangan sudah diketahui	
* while	        Perulangan bergantung pada kondisi	
* do...while	Ingin kode dijalankan minimal satu kali	
* for...of      Mengambil nilai dari array
* for...in	    Mengambil property Object	
*/

/* 
* FOR LOOP
* for (inisialisasi; kondisi; increment ++ /decrement --) {
* 
* }
*/
for (let nomor = 1; nomor <= 5; nomor++) {
    console.log(`${nomor}`);
}
// Jika pake const maka akan error


/* 
* WHILE LOOP
* While digunakan ketika jumlah perulangan belum tentu diketahui.
* while (kondisi) {
* 
* }
*/
let i = 1;

while (i <= 5) {
    console.log(`${i}`);
    i++;
}

/* 
* DO WHILE LOOP
* Do While digunakan ketika kita ingin kode dijalankan minimal satu kali. 
* Karena do dijalankan terlebih dahulu, baru kondisi diperiksa.
* Hati-hati dengan Do While bisa menyebabkan infinite loop
*/
let n = 10;

do {
    console.log(`Do While Loop ke-${i}`);
    n++;
}
while (n <= 5);

/* 
 * For Of Digunakan untuk mengambil nilai dari Array.
*/
const transaksi = [
    "Transfer",
    "Top Up",
    "Bayar Listrik"
];

for (const item of transaksi) {
    console.log(`Feature ini bisa melakukan ${item}`);
}

const response = {
    products: [
        {
            id: 1,
            title: "Laptop"
        },
        {
            id: 2,
            title: "Mouse"
        },
        {
            id: 3,
            title: "Keyboard"
        }
    ]
};

for (const item of response.products) {
    console.log(item.title);
    console.log(response.products);
    console.log(response);
}

/* 
 * For In Digunakan untuk mengambil nilai dari Object.
*/
const user = {
    nama: "Fairuz",
    umur: 28,
    kota: "Bandung"
};

for (const item in user) {
    console.log(`${item} : ${user[item]}`);
}

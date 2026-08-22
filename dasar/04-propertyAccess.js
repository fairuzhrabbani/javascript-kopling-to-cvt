// CARA MENGAMBIL DATA DARI OBJECT DAN ARRAY

// Object Berisi Array
const nasabah = 
{
    nama: "Fairuz",
    nomorRekening: "1234567890",
    saldo: 2500000,
    transaksi: [
        "Transfer Masuk", 
        "Tarik Tunai", 
        "Bayar Listrik", 
        "Top Up E-Wallet" 
    ]
};


/*
* 1. Tampilkan nama nasabah. 
* 2. Tampilkan saldo. 
* 3. Tampilkan transaksi pertama. 
* 4. Tampilkan transaksi terakhir. 
* 5. Tampilkan transaksi kedua. 
*/

//  Property Access
console.log(nasabah.nama);
console.log(nasabah.saldo);
console.log(nasabah.transaksi[0]);
console.log(nasabah.transaksi[3]);
console.log(nasabah.transaksi[1]);

// Array Berisi Object
const rekening = [
    {
        id: 1,
        nama: "Ronaldo",
        saldo: 2000000
    },
    {
        id: 2,
        nama: "Andi",
        saldo: 3500000
    },
    {
        id: 3,
        nama: "Budi",
        saldo: 1800000
    }
];
/*
* 1. Tampilkan nama data nasabah pertama. 
* 2. Tampilkan saldo data nasabah kedua. 
* 3. Tampilkan id data nasabah ketiga. 
* 4. Tampilkan seluruh data object pertama. 
*/ 
console.log(rekening[0].nama);
console.log(rekening[1].saldo);
console.log(rekening[2].id);
console.log(rekening[0]);

// Object → Array → Object
const response = 
{
    status: 200,
    success: true,
    data: [
        {
            id: 1,
            nama: "Fairuz", 
            saldo: 2000000
        },
        {
            id: 2,
            nama: "Andi",
            saldo: 3500000
        },
        {
            id: 3,
            nama: "Budi",
            saldo: 1800000
        }
    ]
};
/*
* 1. Tampilkan status response. 
* 2. Tampilkan nama user pertama. 
* 3. Tampilkan saldo user kedua. 
* 4. Tampilkan seluruh object user ketiga. 
*/

console.log(response.status);
console.log(response.data[0].nama);
console.log(response.data[1].saldo);
console.log(response.data[2]);
console.log(response.data);

// Object → Array → Object → Array
const jsonData = {
    status: 200,
    users: [
        {
            id: 1,
            nama: "Fairuz",
            rekening: [
                "BCA",
                "BNI",
                "Mandiri"
            ]
        },
        {
            id: 2,
            nama: "Andi",
            rekening: [
                "BRI",
                "CIMB"
            ]
        }
    ]
};
/*
* 1. Tampilkan nama user pertama. 
* 2. Tampilkan rekening kedua milik Fairuz. 
* 3. Tampilkan rekening pertama milik Andi. 
* 4. Tampilkan nama user kedua. 
* 5. Tampilkan rekening kedua milik Andi. 
*/

console.log(jsonData.users[0].nama);
console.log(jsonData.users[0].rekening[1]);
console.log(jsonData.users[1].rekening[0]);
console.log(jsonData.users[1].nama);
console.log(jsonData.users[1].rekening[1]);
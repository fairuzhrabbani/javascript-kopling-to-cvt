// Membuat Class
class LoginAPI {
  // constructor() adalah method khusus yang otomatis dijalankan ketika kita membuat object menggunakan new LoginAPI(...):
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  // Function doLogin
  // Ini adalah method dari class LoginAPI.
  doLogin() {
    // fetch() mengembalikan Promise.
    const request = fetch("https://api.escuelajs.co/api/v1/auth/login", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },

      body: JSON.stringify({
        email: this.email,
        password: this.password,
      }),
    });
    return request;
  }
}

// Membuat Instance Object bernama login
const login = new LoginAPI("fairuz@mail.com", "changeme");

console.log(login.doLogin()); // Promise { <pending> }

/*
 * fetch() digunakan ketika JavaScript ingin berkomunikasi dengan server melalui HTTP dan akan mengembalikan sebuah Promise.
 * gampangnya fetch berfungsi untuk mengirim HTTP request dan mendapatkan HTTP response dari server.
 * Maka dari itu, ketika dijalankan console.log(login.doLogin()); akan menghasillkan Promise { <pending> } artinya proses Promise masih pending.
 * Promise { <pending> } ini bukan error, melainkan karena HTTP request belum selesai, pending berarti: "Promise sedang menunggu hasil."
 * 
 * Promise mempunyai 3 state :
 * Pending , Fullfilled dan Rejected
 * Dari Promise <pending> nantinya akan menjadi state Fullfilled ataupun state Rejected.
 * Jika Berhasil (pending -> fullfilled) Promise diselesaikan dengan resolve(value) / Resolved Promise
 * Jika Gagal (pending -> rejected) Promise diselesaikan dengan: reject(error) / Rejected Promise
 * Untuk Resolved Promise di handle dengan .then()
 * Untuk Rejected Prpmise di handle dengan .catch()
 * 
 * Perhatikan bagian Resolved Promise .then() bagian pertama
 * login
 * .doLogin()
 * .then(function (response) {
 * Artinya "Kalau Promise berhasil/fulfilled, jalankan function ini." Jadi: .then(function (response) { akan mendapatkan hasil dari Promise. 
 * Dalam kasus fetch(), hasil tersebut adalah: Response 
 * Jadi response bukan body JSON langsung. Response adalah object yang berisi informasi seperti: response.status, response.statusText, response.header dan response.json())
 * Untuk bagian return response.json() Sebenarnya response.json() juga asynchronous dan mengembalikan Promise. 
 * fetch()
 *   ↓
 * Promise
 *  ↓
 * Response
 *   ↓
 * response.json()
 *   ↓
 * Promise
 *   ↓
 * JSON Data  
 * 
 * Perhatikan bagian Resolved Promise .then() bagian kedua
 * .then(function (data) {
 *   console.log("Response Body:", data);
 * Ini disebut Promise chaining. Jadi .then() bagian kedua menerima hasil dari: return response.json(); Hasilnya diteruskan ke .then() berikutnya.
 * 
 * Perhatikan bagian Rejected Promise .catch() 
 * .catch() digunakan untuk menangani Promise yang rejected.
 * Tetapi ada satu hal penting tentang fetch()
 * fetch() tidak otomatis menganggap HTTP 500 sebagai rejected Promise. Contoh : 
 * HTTP 200 → fetch fulfilled 
 * HTTP 201 → fetch fulfilled 
 * HTTP 404 → fetch fulfilled
 * HTTP 500 → fetch fulfilled
 * selama request HTTP-nya berhasil sampai ke server Promise menggap itu sebagai Resolved State.
 * Yang membuat fetch() reject itu error seperti Network error , DNS error , Connection failure . Oleh karena itu kita perlu menambahkan validasi 
* if (!response.status === 201) {
* throw new Error(`HTTP Error: ${response.status}`); Pada bagian Resolved State , Jika HTTP Status bukan 201 maka akan di handle oleh catch/Resolved Promise
}
*/

// Menjalankan login Promise { <pending> }
login
  .doLogin()
  .then(function (response) {
    console.log("HTTP Status Code:", response.status);
    console.log("HTTP Status Text:", response.statusText);
    console.log("Response Header:", response.headers);

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    return response.json();
  })
  .then(function (data) {
    console.log("Response Body:", data);
  })
  .catch(function (error) {
    console.error("Error:", error);
  });

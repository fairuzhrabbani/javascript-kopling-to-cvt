/*
 * resolve() → berhasil Promise saya berhasil dan hasilnya adalah categories
 * reject()  → gagal Promise saya gagal dan error-nya adalah error
 */
import https from "https";

const url = "https://api.escuelajs.co/api/v1/categories";

function getCategories() {
  return new Promise((resolve, reject) => {
    https
      .get(url, (response) => {
        let data = "";

        response.on("data", (chunk) => {
          data += chunk;
        });

        response.on("end", () => {
          try {
            const categories = JSON.parse(data);

            resolve(categories);
          } catch (error) {
            reject(error);
          }
        });
      })
      .on("error", (error) => {
        reject(error);
      });
  });
}

getCategories()
  .then((categories) => {
    console.log(categories);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });

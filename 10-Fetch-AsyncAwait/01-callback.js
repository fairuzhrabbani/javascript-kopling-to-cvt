import https from "https";

const url = "https://api.escuelajs.co/api/v1/categories";

function getCategories(callback) {
  https
    .get(url, (response) => {
      let data = "";

      response.on("data", (chunk) => {
        data += chunk;
      });

      response.on("end", () => {
        try {
          const categories = JSON.parse(data);

          callback(null, categories);
        } catch (error) {
          callback(error, null);
        }
      });
    })
    .on("error", (error) => {
      callback(error, null);
    });
}

getCategories((error, categories) => {
  if (error) {
    console.error("Error:", error.message);
    return;
  }

  console.log(categories);
});

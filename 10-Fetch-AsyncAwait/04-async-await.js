class AuthApi {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  // Method/Function
  doLogin() {
    const urlLogin = "https://api.escuelajs.co/api/v1/auth/login";

    const request = fetch(urlLogin, {
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

// instance object = login
const login = new AuthApi("john@mail.com", "changeme");
// console.log(login);
console.log(login.doLogin());

async function loginUser() {
  try {
    const response = await login.doLogin();
    console.log(response);

    console.log("HTTP Status Code:", response.status);
    console.log("HTTP Status Text:", response.statusText);
    console.log("Response Header:", response.headers);

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);

    console.log("Response Body:", data);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

loginUser();

// Secara Manual
const personFirst = {
  firstName: "Fairuz",
  lastName: "Rabbani",
  address: {
    street: "Jalan Raya",
    city: "Jakarta",
    country: "Indonesia",
  },
  hobby: "Football",
  channel: "Youtube",
};

console.log(personFirst);
const firstNameVal = personFirst.firstName;
const lastNameVal = personFirst.lastName;
console.log(personFirst.firstName);
console.log(personFirst.lastName);

// Menggunakan Destructuring
const person = {
  firstName: "Fairuz",
  lastName: "Rabbani",
  address: {
    street: "Jalan Raya",
    city: "Jakarta",
    country: "Indonesia",
  },
  hobby: "Football",
  channel: "Youtube",
};

console.log(person);
const {
  firstName,
  lastName,
  address: { country, city, street },
  ...others
} = person;

console.log(firstName);
console.log(lastName);
console.log(country);
console.log(city);
console.log(street);
console.log(others);

// Default Value
const orang = {
  firstName: "Fairuz",
  lastName: "Rabbani",
};

const { firstName: firstOrang, lastName: lastOrang, middleName: middleOrang = "Hanif" } = orang;

console.log(firstOrang);
console.log(lastOrang);
console.log(middleOrang);

// Variable
const orangPerson = {
  firstName: "Fairuz",
  lastName: "Rabbani",
  middleName: "Ronaldo",
};

const {
  firstName: namaDepan,
  lastName: namaBelakang,
  middleName: namaTengah = "Hanif",
} = orangPerson;

console.log(namaDepan);
console.log(namaBelakang);
console.log(namaTengah);

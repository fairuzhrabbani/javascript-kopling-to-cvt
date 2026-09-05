// Sebelum menggunakan Destructuring
function displayPersonName(firstName, middleName, lastName) {
  console.log(firstName);
  console.log(middleName);
  console.log(lastName);
}

displayPersonName("Fairuz", "Hanif", "Rabbani");

// Destructuring parameter (1)
function displayPerson({ firstName, middleName, lastName }) {
  console.log(firstName);
  console.log(middleName);
  console.log(lastName);
}

const personFirst = {
  firstName: "Fairuz",
  middleName: "Hanif",
  lastName: "Rabbani",
};

const personSecond = {
  firstName: "Joko",
  middleName: "Widodo",
  lastName: "Prabowo",
};

displayPerson(personFirst);
displayPerson(personSecond);

// Destructuring paramter (2)
function sum([first, second]) {
  return first + second;
}

console.log(sum([10, 20]));
console.log(sum([30, 40]));
console.log(sum([10, 40]));
console.log(sum([20, 40]));
console.log(sum([40, 40]));
console.log(sum([50, 40]));

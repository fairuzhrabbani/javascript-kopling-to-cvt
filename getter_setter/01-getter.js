/*
 * Getter dan Setter adalah kemampuan membuat function yang berbeda
 * Getter untuk mengambil data yang menjadi sebuah property
 * Setter untuk mengubah data pada sebuah property di Object
 */

// Getter
const person = {
  firstName: "Fairuz",
  lastName: "Hanif",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }, // fullName disini menjadi property
};

console.log(person);
console.log(person.fullName); // access getter menjadi seperti akses property

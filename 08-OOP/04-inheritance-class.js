/*
 * Sebuah Class bisa melakukan pewarisan dari Class lainnya dengan menggunakan kata kunci 'extends'
 */

class Employee {
  constructor(role, name) {
    this.role = role;
    this.name = name;
  }

  sayHelloEmployee(name) {
    console.log(`Hello ${name}, My Name is ${this.name} as a ${this.role}`);
  }
}

class Manager extends Employee {
  sayHelloManager(name) {
    console.log(`Hello ${name}, My Name is ${this.name} as a ${this.role}`);
  }
}

const employee = new Employee("Employee", "Budi");
employee.sayHelloEmployee("Ronaldo");

const manager = new Manager("Manager", "Eko");
manager.sayHelloManager("Messi");

/*
 * Perhatikan ini
 * Membuat Object instance bernama staff dari Class Manager
 * Tetapi memanggil function/method dari kepemilikan Class Employee yaitu 'sayHelloEmployee'
 * Karena Manager exteds Employee
 */
const staff = new Manager("Staff", "Haris");
staff.sayHelloEmployee("Mbappe");

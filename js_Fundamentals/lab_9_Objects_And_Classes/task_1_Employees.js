// Task 1 - Employees

function employees(input) {
  // my initial solution:

  // class Employees {
  //   constructor(name) {
  //     this.name = name
  //   }

  //   nameLength() {
  //     console.log(`Name: ${this.name} -- Personal Number: ${this.name.length}`);
  //   }
  // }

  // for (let i of input) {
  //   let employeesRegister = new Employees(i);
  //   employeesRegister.nameLength();
  // }

  //lecturer solution:

  let employeeList = {};

  input.forEach((person) => {
    employeeList[person] = person.length;
  });

  for (const key in employeeList) {
    console.log(`${key} -- Personal number: ${employeeList[key]}`);
  }
}

employees(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);
employees(['Samuel Jackson', 'Will Smith', 'Bruce Willis', 'Tom Holland']);

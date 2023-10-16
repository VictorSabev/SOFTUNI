// Task 6 - Company

class Company {
  constructor() {
    this.departments = {};
  }

  addEmployee(name, salary, position, department) {
    if (!name || !salary || !position || !department) {
      throw new Error('Invalid input!');
    }
    if (salary < 0) {
      throw new Error('Invalid input!');
    }

    if (!this.departments[department]) {
      this.departments[department] = [];
    }

    this.departments[department].push({
      name,
      salary,
      position,
    });

    return `New employee is hired. Name: ${name}. Position: ${position}`;
  }

  // bestDepartment() {
  //   let sortedDepartments = Object.keys(this.departments).sort((a, b) => {
  //     if (a[salary] !== b[salary]) {
  //       return b[salary] - a[salary];
  //     } else {
  //       return a[name].localeCompare(b[name]);
  //     }
  //   });

  //   return;
  // }
}
let c = new Company();

c.addEmployee('Stanimir', 2000, 'engineer', 'Construction');

c.addEmployee('Pesho', 1500, 'electrical engineer', 'Construction');

c.addEmployee('Slavi', 500, 'dyer', 'Construction');

c.addEmployee('Stan', 2000, 'architect', 'Construction');

c.addEmployee('Stanimir', 1200, 'digital marketing manager', 'Marketing');

c.addEmployee('Pesho', 1000, 'graphical designer', 'Marketing');

c.addEmployee('Gosho', 1350, 'HR', 'Human resources');

// console.log(c.bestDepartment());

console.log(this.departments);

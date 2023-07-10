// Task 5 - School Grades

// initial solution -> edge cases not covered - unappropriete method of calulating the avg score of the student

// function schoolGrades(input) {
//   let dataBase = {};
//   for (let i of input) {
//     let entry = i.split(' ');
//     let person = entry.shift();
//     let grades = entry.map(Number);

//     let totalGrades = 0;
//     for (let a = 0; a < grades.length; a++) {
//       totalGrades += grades[a];
//     }
//     let avgGrades = totalGrades / grades.length;

//     if (dataBase[person]) {
//       dataBase[person] = (dataBase[person] + avgGrades) / 2;
//     } else {
//       dataBase[person] = avgGrades;
//     }
//   }

//   let entries = Object.entries(dataBase);
//   entries.sort((a, b) => a[0].localeCompare(b[0]));

//   for (const [name, score] of entries) {
//     console.log(`${name}: ${score.toFixed(2)} `);
//   }
// }

function schoolGrades(input) {
  let dataBase = {};
  for (let i of input) {
    let entry = i.split(' ');
    let person = entry.shift();
    let grades = entry.map(Number);

    if (dataBase[person]) {
      // checking if there is an entry value at the person key
      dataBase[person] = dataBase[person].concat(grades); //  adding (concatinatinmg) the additional grades array to the existing one
    } else {
      dataBase[person] = grades;
    }
  }

  let studentsEntries = Object.entries(dataBase); // adding object entries into a new array in oreder to sort them
  studentsEntries.sort((a, b) => a[0].localeCompare(b[0])); // sorting the array elements

  for (const [name, grades] of studentsEntries) {
    // deconstructing the array, declaring 'name' and 'grade' variables
    let sum = 0;

    for (const grade of grades) {
      // 'grade' is an array cotaining all the grades of the student
      sum += grade; // eterate over all the grades and adding them to the sum
    }

    let avgScore = sum / grades.length; // getting the avg sum

    console.log(`${name}: ${avgScore.toFixed(2)} `);
  }
}

schoolGrades(['Lilly 4 6 6 5', 'Tim 5 6', 'Tammy 2 4 3', 'Tim 6 6']);
console.log('----------');
schoolGrades(['Steven 3 5 6 4', 'George 4 6', 'Tammy 2 5 3', 'Steven 6 3']);

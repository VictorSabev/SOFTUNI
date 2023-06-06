// Task 1 - Format Grade

function grade(grade) {
  let result = '';
  
  // po - dagal nachin za reshenie

  // if (grade < 3) {                                   
  //   result = 'Fail';
  // } else if (grade >= 3 && grade < 3.5) {
  //   result = 'Poor';
  // } else if (grade >= 3.5 && grade < 4.5) {
  //   result = 'Good';
  // } else if (grade >= 4.5 && grade < 5.5) {
  //   result = 'Very good';
  // } else {
  //   result = 'Excellent';
  // }


  // optimiziran nachin na proverka

  if (grade < 3) {
    result = 'Fail';
  } else if (grade < 3.5) {
    result = 'Poor';
  } else if (grade < 4.5) {
    result = 'Good';
  } else if (grade < 5.5) {
    result = 'Very good';
  } else {
    result = 'Excellent';
  }
  
  if (grade < 3) {
    console.log(`${result} (${Math.trunc(grade)})`);
  } else {
    console.log(`${result} (${grade.toFixed(2)})`);
  }
}

grade(3.33);
grade(4.5);
grade(2.99);

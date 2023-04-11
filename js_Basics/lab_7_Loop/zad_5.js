// Salary

function Demo(input) {
  let tabsNumber = Number(input[0]);
  let salary = Number(input[1]);

  for (let i = 2; i <= tabsNumber + 1 || salary <= 0; i++) {
    if (input[i] === 'Facebook') {
      salary -= 150;
    } else if (input[i] === 'Instagram') {
      salary -= 100;
    } else if (input[i] === 'Reddit') {
      salary -= 50;
    } else if (salary <= 0) {
      console.log('You have lost your salary.');
      return;
    }
  }
  console.log(salary.toFixed(0));
}

Demo([
  '10',
  '750',
  'Facebook',
  'Dev.bg',
  'Instagram',
  'Facebook',
  'Reddit',
  'Facebook',
  'Facebook',
]);
console.log('-------------------');
Demo(['3', '500', 'Github.com', 'Stackoverflow.com', 'softuni.bg']);
console.log('-------------------');
Demo(['3', '500', 'Facebook', 'Stackoverflow.com', 'softuni.bg']);

// Zad 5 - Traveling

function Demo(input) {
  let index = 0;
  let command = input[index];
  index++;
  let budget = Number(input[index]);
  index++;
  let savings = Number(input[index]);
  index++;
  let destination = '';
  let totalSavings = 0;

  while (command !== 'End') {
    let check = Number(command);
    if (isNaN(check)) {
      destination = String(command);

      while (!isNaN(savings)) {
        if (isNaN(savings)) {
          break;
        } else {
          totalSavings += Number(savings);
          savings = Number(input[index]);

          if (isNaN(savings)) {
          } else {
            index++;
          }
        }
      }
      if (totalSavings >= budget) {
        console.log(`Going to ${destination}!`);
      }
    }
    command = input[index];
    index++;
    budget = input[index];
    index++;
    savings = Number(input[index]);
    index++;
  }
}

Demo([
  'Greece',
  '1000',
  '200',
  '200',
  '300',
  '100',
  '150',
  '240',
  'Spain',
  '1200',
  '300',
  '500',
  '193',
  '423',
  'End',
]);
console.log('---------------------------');
Demo([
  'France',
  '2000',
  '300',
  '300',
  '200',
  '400',
  '190',
  '258',
  '360',
  'Portugal',
  '1450',
  '400',
  '400',
  '200',
  '300',
  '300',
  'Egypt',
  '1900',
  '1000',
  '280',
  '300',
  '500',
  'End',
]);

// Task 12 - Trade Commissions

function Demo(input) {
  let city = input[0];
  let sales = Number(input[1]);

  if (sales >= 0 && sales <= 500 && city === 'Sofia') {
    console.log((sales * 0.05).toFixed(2));
  } else if (sales > 500 && sales <= 1000 && city === 'Sofia') {
    console.log((sales * 0.07).toFixed(2));
  } else if (sales > 1000 && sales <= 10000 && city === 'Sofia') {
    console.log((sales * 0.08).toFixed(2));
  } else if (sales > 10000 && city === 'Sofia') {
    console.log((sales * 0.12).toFixed(2));
  } else if (sales >= 0 && sales <= 500 && city === 'Varna') {
    console.log((sales * 0.045).toFixed(2));
  } else if (sales > 500 && sales <= 1000 && city === 'Varna') {
    console.log((sales * 0.075).toFixed(2));
  } else if (sales > 1000 && sales <= 10000 && city === 'Varna') {
    console.log((sales * 0.1).toFixed(2));
  } else if (sales > 10000 && city == 'Varna') {
    console.log((sales * 0.13).toFixed(2));
  } else if (sales >= 0 && sales <= 500 && city === 'Plovdiv') {
    console.log((sales * 0.055).toFixed(2));
  } else if (sales > 500 && sales <= 1000 && city === 'Plovdiv') {
    console.log((sales * 0.08).toFixed(2));
  } else if (sales > 1000 && sales <= 10000 && city === 'Plovdiv') {
    console.log((sales * 0.12).toFixed(2));
  } else if (sales > 10000 && city === 'Plovdiv') {
    console.log((sales * 0.145).toFixed(2));
  } else {
    console.log('error');
  }
}

Demo(['Sofia', '1500']);
Demo(['Plovdiv', '499.99']);
Demo(['Varna', '3874.50']);
Demo(['Kaspichan', '-50']);

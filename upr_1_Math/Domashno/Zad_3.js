// Zadacha 3 - Deposit Calcualtor 

function Demo(input) {
  let depositSum = Number(input[0]);
  let depositPeriod = Number(input[1]); 
  let interest = Number(input[2]); 

  let finalSum = depositSum + depositPeriod * ((depositSum * interest/100) / 12);

  console.log(finalSum);
}

Demo(['200', '3', '5.7']);
Demo(['2350', '6', '7']);
// Task 4 - Odd And Even Sum

function oddAndEvenSum(num) {
  
    const strInputNum = num.toString();
    let oddSum = 0;
    let evenSum = 0;

    for (let i = 0; i < strInputNum.length; i++) {
      let int = Number(strInputNum[i]);

      if (int % 2 !== 0) {
        oddSum += int;
      } else {
        evenSum += int;
      }
    }
    
  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);

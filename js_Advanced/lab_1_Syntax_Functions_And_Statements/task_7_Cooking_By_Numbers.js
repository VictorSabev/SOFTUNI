// Task 7 - Cooking by Numbers

function cookingNumbers(input, act1, act2, act3, act4, act5) {
  let result = input;

  let actArr = [act1, act2, act3, act4, act5];

  for (let act of actArr) {
    switch (act) {
      case 'chop':
        result /= 2;
        console.log(result);
        break;
      case 'dice':
        result = Math.sqrt(result);
        console.log(result);
        break;
      case 'spice':
        result++;
        console.log(result);
        break;
      case 'bake':
        result *= 3;
        console.log(result);
        break;
      case 'fillet':
        result = result - result * 0.2;
        console.log(result);
        break;
    }
  }
}

cookingNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');

// Zadacha 8 - Basketball equipment

function Demo(input) {
  let yearlyAddmision = Number(input[0]);
  let shoes = 0.6 * yearlyAddmision; 
  let clothes = shoes - shoes * 0.2;
  let ball = clothes * 0.25;
  let accessories = ball * 0.2;

  let totalPrice = shoes + clothes + ball + accessories + yearlyAddmision;
  
  console.log(totalPrice);
}

Demo(['365']);
Demo(['550']);
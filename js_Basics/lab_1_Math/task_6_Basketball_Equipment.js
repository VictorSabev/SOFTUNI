// Task 6 - Basketball Equipment

function demo(input) {
  let fee = Number(input[0]);
  let shoes = fee * 0.6;
  let clothes = shoes * 0.8;
  let ball = clothes / 4;
  let extraStuff = ball / 5;
  let totalPrice = fee + shoes + clothes + ball + extraStuff;

  console.log(totalPrice);
}

demo(["365"]);

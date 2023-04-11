// Zadacha 1 - Easter Lunch

function Demo(input) {
  let kozunakQ = Number(input[0]);
  let eggsCarts = Number(input[1]);
  let cookiesKG = Number(input[2]);

  let kozunakPrice = 3.2;
  let eggsCartsPrice = 4.35;
  let cookiesKGPrice = 5.4;
  let paintPerEgg = 0.15;

  let totalPaint = paintPerEgg * eggsCarts * 12;
  let subtotal = kozunakQ * kozunakPrice + eggsCarts * eggsCartsPrice + cookiesKG * cookiesKGPrice + totalPaint;

  console.log(subtotal.toFixed(2));
}

Demo(['3', '2', '3']);
Demo(['4', '4', '3']);
Demo(['2', '3', '2']);

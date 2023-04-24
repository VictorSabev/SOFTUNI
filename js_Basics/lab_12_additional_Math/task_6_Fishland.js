// Task 6 - Fishland

function Demo(input) {
  let index = 0;
  let skumriaPrice = Number(input[index]);
  index++;
  let cacaPrice = Number(input[index]);
  index++;
  let palamudQuantity = Number(input[index]);
  index++;
  let safridQuantity = Number(input[index]);
  index++;
  let midiQuantity = Number(input[index]);
  index++;

  let palamudPrice = skumriaPrice * 1.6;
  let safridPrice = cacaPrice * 1.8;
  let midiPrice = 7.5;

  let purchasedSafrid = safridPrice * safridQuantity;
  let purchasedPalamud = palamudPrice * palamudQuantity;
  let purchasedMidi = midiPrice * midiQuantity;

  let totalCost = purchasedMidi + purchasedPalamud + purchasedSafrid;
  console.log(totalCost.toFixed(2));
}

Demo(['6.90', '4.20', '1.5', '2.5', '1']);
Demo(['5.55', '3.57', '4.3', '3.6', '7']);
Demo(['7.79', '5.35', '9.3', '0', '0']);

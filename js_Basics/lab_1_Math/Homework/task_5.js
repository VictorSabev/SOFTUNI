// Zadacha 5 - Supplies for School

function Demo(input) {
  let packetOfPens = Number(input[0]);
  let packetOfMarkers = Number(input[1]);
  let literOfDetergent = Number(input[2]);
  let discountPercentage = Number(input[3]);

  let baseProductSum = packetOfPens * 5.8 + packetOfMarkers * 7.2 + literOfDetergent * 1.2;
  let finalProductSum = baseProductSum - baseProductSum * discountPercentage / 100;
  
  console.log(finalProductSum);
}

Demo(['2', '3', '4', '25']);
Demo(['4', '2', '5', '13']);
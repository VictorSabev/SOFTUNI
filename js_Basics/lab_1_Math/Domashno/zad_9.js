// Zadacha 9 - Fish Tank

function Demo(input) {
  let lenghtInDm = Number(input[0]) / 10;
  let widthInDm = Number(input[1]) / 10;  
  let hightInDm = Number(input[2]) / 10;
  let percentAccesosries = Number(input[3]) / 100;
  
  let fishTankTotalVolume = lenghtInDm * widthInDm * hightInDm;
  let fishTankAvailbleVolume = fishTankTotalVolume - fishTankTotalVolume * percentAccesosries
  
  console.log(fishTankAvailbleVolume);
}

Demo(['85', '75', '47', '17']);
Demo(['105', '77', '89', '18.5']);
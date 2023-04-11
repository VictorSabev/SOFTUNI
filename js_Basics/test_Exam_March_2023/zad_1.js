// Zdacha 1 - Tennis Equipment

function Demo(input) {
  let tennisRacketPrice = input[0];
  let numberOfTennisRackets = input[1];
  let numberOfSnickersParis = input[2];

  let snickersPrice = (1 / 6) * tennisRacketPrice;
  let totalRacketsAndSnickers = numberOfSnickersParis * snickersPrice + numberOfTennisRackets * tennisRacketPrice;
  let otherEquipmentPrice = totalRacketsAndSnickers * 0.2;
  let totalCost = otherEquipmentPrice + totalRacketsAndSnickers;

  let JokovicCut = (totalCost * 1) / 8;
  let sponsorCut = (totalCost * 7) / 8;

  console.log(`Price to be paid by Djokovic ${Math.floor(JokovicCut)}`);
  console.log(`Price to be paid by sponsors ${Math.ceil(sponsorCut)}`);
}

Demo(['850', '4', '2']);
Demo(['1000', '3', '1']);
Demo(['386', '7', '4']);

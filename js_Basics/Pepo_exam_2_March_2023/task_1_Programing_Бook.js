// Task 1 - Programing book

function Book(input) {
  let pricePerPage = Number(input[0]);
  let pricePerCover = Number(input[1]);
  let discount = Number(input[2]);
  let disignerPrice = Number(input[3]);
  let teamCut = Number(input[4]);

  let numberOfPages = 899;
  let numberOFCovers = 2;

  let bookBasePrice = numberOfPages * pricePerPage + numberOFCovers * pricePerCover;
  let bookFinalPrice = bookBasePrice - (bookBasePrice * discount) / 100;

  let totslCost = bookFinalPrice + disignerPrice;
  let autorsCut = totslCost - (totslCost * teamCut) / 100;

  console.log(`Avtonom should pay ${autorsCut.toFixed(2)} BGN.`);
}

Book(['0.01', '1', '10', '20', '20']);
Book(['0.05', '1.20', '40', '19.99', '20']);
Book(['0.02', '0.50', '18', '21', '50']);

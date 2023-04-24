// Task 3 - Oscars week in cinema

function Demo(input) {
  let movieName = input[0];
  let holeType = input[1];
  let numberOfTicketsBought = Number(input[2]);

  let ticketPrice = 0;

  if (movieName === 'A Star Is Born') {
    switch (holeType) {
      case 'normal':
        ticketPrice = 7.5;
        break;
      case 'luxury':
        ticketPrice = 10.5;
        break;
      case 'ultra luxury':
        ticketPrice = 13.5;
        break;
    }
  } else if (movieName === 'Bohemian Rhapsody') {
    switch (holeType) {
      case 'normal':
        ticketPrice = 7.35;
        break;
      case 'luxury':
        ticketPrice = 9.45;
        break;
      case 'ultra luxury':
        ticketPrice = 12.75;
        break;
    }
  } else if (movieName === 'Green Book') {
    switch (holeType) {
      case 'normal':
        ticketPrice = 8.15;
        break;
      case 'luxury':
        ticketPrice = 10.25;
        break;
      case 'ultra luxury':
        ticketPrice = 13.25;
        break;
    }
  } else if (movieName === 'The Favourite') {
    switch (holeType) {
      case 'normal':
        ticketPrice = 8.75;
        break;
      case 'luxury':
        ticketPrice = 11.55;
        break;
      case 'ultra luxury':
        ticketPrice = 13.95;
        break;
    }
  }

  let profit = numberOfTicketsBought * ticketPrice;

  console.log(`${movieName} -> ${profit.toFixed(2)} lv.`);
}
Demo(['A Star Is Born', 'luxury', '42']);
console.log('-----------------------------');
Demo(['Green Book', 'normal', '63']);

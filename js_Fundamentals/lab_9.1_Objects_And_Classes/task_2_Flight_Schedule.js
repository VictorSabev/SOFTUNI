// Task 2 - Flight Schedule

function flight(input) {
  let flightDatabase = [];
  let initialFlights = input.shift();

  for (let i = 0; i < initialFlights.length; i++) {
    let currentFlight = initialFlights[i];
    let [flightNumber, destination] = currentFlight.split(' ');
    let flightInfo = {
      flightNumber: flightNumber,
      destination: destination,
      Status: 'Ready to fly',
    };

    flightDatabase.push(flightInfo);
  }

  let canceledFlights = input.shift();
  for (let a = 0; a < canceledFlights.length; a++) {
    let currentFlight = canceledFlights[a];
    let [flightNumber, flightStatus] = currentFlight.split(' ');

    for (let e = 0; e < flightDatabase.length; e++) {
      if (flightDatabase[e].flightNumber === flightNumber) {
        flightDatabase[e].Status = flightStatus;
        break;
      }
    }
  }

  let sortCriteria = input.shift().join('');

  flightDatabase = flightDatabase.filter((x) => x.Status === sortCriteria);

  let flightInfoStrings = flightDatabase.map(
    (flight) =>
      `{ Destination: '${flight.destination}', Status: '${flight.Status}' }`
  );

  console.log(flightInfoStrings.join('\n'));
}

flight([
  [
    'WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania',
  ],
  [
    'DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK430 Cancelled',
  ],
  ['Cancelled'],
]);

flight([
  [
    'WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania',
  ],
  [
    'DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK330 Cancelled',
  ],
  ['Ready to fly'],
]);

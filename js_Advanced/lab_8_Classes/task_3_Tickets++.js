// Task 3 - Tickets

function ticketSorter(inputArr, sortingCriteria) {
  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = price;
      this.status = status;
    }
  }

  let resultArr = [];

  inputArr.forEach((element) => {
    let [destination, price, status] = element.split('|');
    price = Number(price);

    let currentObj = new Ticket(destination, price, status);
    resultArr.push(currentObj);
  });

   
  return resultArr.sort((a, b) => {
    if (typeof a[sortingCriteria] === 'number') {
      return a[sortingCriteria] - b[sortingCriteria];
    } else {
      return a[sortingCriteria].localeCompare(b[sortingCriteria]);
    }
  });
 
}

ticketSorter(
  [
    'Philadelphia|94.20|available',

    'New York City|95.99|available',

    'New York City|95.99|sold',

    'Boston|126.20|departed',
  ],

  'destination'
);
ticketSorter(
  [
    'Philadelphia|94.20|available',

    'New York City|95.99|available',

    'New York City|95.99|sold',

    'Boston|126.20|departed',
  ],

  'status'
);

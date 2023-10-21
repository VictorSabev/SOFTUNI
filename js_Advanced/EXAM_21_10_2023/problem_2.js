// Problem 2 - flight Booking SAystem

class FlightBookingSystem {
  constructor(agencyName) {
    this.agencyName = agencyName;
    this.flights = [];
    this.bookings = [];
    this.bookingsCount = 0;
  }

  addFlight(flightNumber, destination, departureTime, price) {
    let currenFlight = this.flights.find(
      (x) => x.flightNumber === flightNumber
    );

    if (currenFlight) {
      return `Flight ${flightNumber} to ${destination} is already available.`;
    } else {
      this.flights.push({
        flightNumber,
        destination,
        departureTime,
        price,
      });
      return `Flight ${flightNumber} to ${destination} has been added to the system.`;
    }
  }

  // bookFlight (passengerName, flightNumber) {
  //   let currenFlight2 = this.flights.find(x => x.flightNumber === flightNumber);

  //   if (!currenFlight2) {
  //     return `Flight ${flightNumber} is not available for booking.`
  //   } else {
  //     this.bookings.push({
  //       passengerName,
  //       flightNumber
  //     })
  //     this.bookingsCount++;
  //     return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`
  //   }

  // }

  bookFlight(passengerName, flightNumber) {
    let currentFlight = this.flights.find(
      (x) => x.flightNumber === flightNumber
    );

    if (!currentFlight) {
      return `Flight ${flightNumber} is not available for booking.`;
    } else {
      this.bookings.push({
        passengerName,
        flightNumber,
        price: currentFlight.price, // Store the flight price in the booking
      });
      this.bookingsCount++;
      return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`;
    }
  }

  cancelBooking(passengerName, flightNumber) {
    let currenBooking = this.bookings.find(
      (x) => x.passengerName === passengerName
    );

    if (!currenBooking) {
      throw new Error(
        `Booking for passenger ${passengerName} on flight ${flightNumber} not found.`
      );
    } else {
      let removeIndex = this.bookings.indexOf(currenBooking);
      this.bookings.splice(removeIndex, 1);
      this.bookingsCount--;
      return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`;
    }
  }

  // showBookings (criteria) {
  //   if (this.bookings.length === 0) {
  //     throw new Error(`No bookings have been made yet.`);
  //   }

  //   if (criteria === 'all') {
  //     let result = [`All bookings(${this.bookingsCount})`];
  //     this.bookings.forEach(x => result.push(`${x.passengerName} booked for flight ${x.flightNumber}.`));
  //     return result.join('\n');
  //   }

  //   let cheapBookings = this.bookings.filter(x => x.price <= 100);
  //   let expansveBookings = this.bookings.filter(x => x.price > 100);

  //   if (criteria === 'cheap') {
  //     if (cheapBookings.length === 0) {
  //       return 'No cheap bookings found.';
  //     } else {
  //       let result1 = ['Cheap bookings:'];
  //       cheapBookings.forEach(x => result1.push(`${x.passengerName} booked for flight ${x.flightNumber}.`));
  //       return result1.join('\n');
  //     }

  //   }

  //   if (criteria === 'expensive') {
  //     if (expansveBookings.length === 0) {
  //       return 'No expensive bookings found.'
  //     } else {
  //       let result2 = ['Expensive bookings:'];
  //       expansveBookings.forEach(x => result2.push(`${x.passengerName} booked for flight ${x.flightNumber}.`));
  //       return result2.join('\n');
  //     }
  //   }

  // }

  showBookings(criteria) {
    if (this.bookings.length === 0) {
      throw new Error(`No bookings have been made yet.`);
    }

    if (criteria === 'all') {
      let result = [`All bookings(${this.bookingsCount}):`];
      this.bookings.forEach((booking) =>
        result.push(
          `${booking.passengerName} booked for flight ${booking.flightNumber}.`
        )
      );
      return result.join('\n');
    }

    let cheapBookings = this.bookings.filter((booking) => booking.price <= 100);
    let expensiveBookings = this.bookings.filter(
      (booking) => booking.price > 100
    );

    if (criteria === 'cheap') {
      if (cheapBookings.length === 0) {
        return 'No cheap bookings found.';
      } else {
        let result1 = ['Cheap bookings:'];
        cheapBookings.forEach((booking) =>
          result1.push(
            `${booking.passengerName} booked for flight ${booking.flightNumber}.`
          )
        );
        return result1.join('\n');
      }
    }

    if (criteria === 'expensive') {
      if (expensiveBookings.length === 0) {
        return 'No expensive bookings found.';
      } else {
        let result2 = ['Expensive bookings:'];
        expensiveBookings.forEach((booking) =>
          result2.push(
            `${booking.passengerName} booked for flight ${booking.flightNumber}.`
          )
        );
        return result2.join('\n');
      }
    }
  }
}

const system = new FlightBookingSystem('TravelWorld');
console.log(system.addFlight('AA101', 'Los Angeles', '09:00 AM', 250));
console.log(system.addFlight('BB202', 'New York', '10:30 AM', 180));
console.log(system.bookFlight('Alice', 'AA101'));
console.log(system.bookFlight('Bob', 'BB202'));
console.log(system.showBookings('all'));

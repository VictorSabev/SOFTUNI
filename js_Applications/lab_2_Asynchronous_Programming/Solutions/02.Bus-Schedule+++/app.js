function solve() {
  const departButton = document.getElementById('depart');
  const arriveButton = document.getElementById('arrive');
  let label = document.querySelector('.info');

  let currentStop = {
    next: 'depot',
  };

  async function depart() {
    //get info for next stop
    //display next stop

    const url = `http://localhost:3030/jsonstore/bus/schedule/${currentStop.next}`;

    const response = await fetch(url);
    
    // //check error
    if (response.status !== 200) {
      throw new Error('Stop ID not found');
    }

    currentStop = await response.json();
    label.textContent = `Next stop ${currentStop.name}`;
    
    

    departButton.disabled = true;
    arriveButton.disabled = false;
  }

  function arrive() {
    label.textContent = `Arriving at ${currentStop.name}`;

    departButton.disabled = false;
    arriveButton.disabled = true;
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();

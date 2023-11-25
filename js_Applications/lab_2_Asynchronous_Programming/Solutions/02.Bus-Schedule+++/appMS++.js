function solve() {
  
  const departBtn = document.getElementById('depart');
  const arriveBtn = document.getElementById('arrive');
  
  const infoBox = document.getElementById('info');

  let currentStop = {
    next: 'depot',
  };

  async function depart() {
    const url = `http://localhost:3030/jsonstore/bus/schedule/${currentStop.next}`;
    
    const res = await fetch(url);

    if (res.status !== 200) {
      infoBox.textContent = 'Error';
      departBtn.disabled = true;
      arriveBtn.disabled = true;
    }

    currentStop = await res.json();
    infoBox.textContent = `Next stop: ${currentStop.name}`;
    departBtn.disabled = true;
    arriveBtn.disabled = false;
    
  }

  function arrive() {
    infoBox.textContent = `Arriving at ${currentStop.next}`;
    departBtn.disabled = false;
    arriveBtn.disabled = true;
  }
  return {
    depart,
    arrive,
  };
}
let result = solve();

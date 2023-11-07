async function getInfo() {
  
  //read input value
  const stopNameElement = document.getElementById('stopName');
  const timetableElement = document.getElementById('buses');
  const stopId = document.getElementById('stopId').value;

  const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

  try {
    stopNameElement.textContent = 'Loading...'; // loading text during response
    timetableElement.replaceChildren(); // resetting content

    //request to server
    const response = await fetch(url);

    //check error

    if (response.status !== 200) {
      throw new Error('Stop ID not found');
    }
    //parse data
    const data = await response.json();

    //display data
    stopNameElement.textContent = data.name;

    Object.entries(data.buses).forEach((bus) => {
      let liElement = document.createElement('li');
      liElement.textContent = `Bus ${bus[0]} arrives in ${bus[1]} minutes`;
      timetableElement.appendChild(liElement);
    });

  } catch (error) {
    stopNameElement.textContent = 'Error';
  }
}

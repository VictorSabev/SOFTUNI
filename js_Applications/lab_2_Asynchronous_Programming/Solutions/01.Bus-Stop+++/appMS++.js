async function getInfo() {
  const stopId = document.getElementById('stopId').value;
    const stopNameElement = document.getElementById('stopName');
  const ulElement = document.getElementById('buses');

  
  const url = 'http://localhost:3030/jsonstore/bus/businfo/' + stopId;
  
  try {
    stopNameElement.textContent = 'loading';
    ulElement.replaceChildren();
 
    const response = await fetch(url);

    if (response.status !== 200) {
      throw new Error('Stop ID not found');
    }

    const data = await response.json();
    console.log(data);

    Object.entries(data.buses).forEach(bus => {
      let newLi = document.createElement('li');
      newLi.textContent = `Bus ${bus[0]} arrives in ${bus[1]} minutes`
      ulElement.appendChild(newLi);
      stopNameElement.textContent = data.name;
    }) 

  
  } catch {
    stopNameElement.textContent = 'Error'
  }

}

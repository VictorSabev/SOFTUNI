function attachEvents() {
  const inputLocation = document.getElementById('location');
  const forecastDiv = document.getElementById('forecast');
  const getWeatherBtn = document.getElementById('submit');
  const url = `http://localhost:3030/jsonstore/forecaster`;

  const divElementCurrent = document.getElementById('current');
  const divElementUpcoming = document.getElementById('upcoming');
  
  getWeatherBtn.addEventListener('click', getWeather);

  
  async function getWeather() {
    const locations = await getRequest(url, 'locations');
    const location = locations.find((x) => x.name === inputLocation.value);
    const locationCode = location.code;
    console.log(location);

    const currentConditions = await getRequest(url, 'today', locationCode);
        
    const divForecasts = document.createElement('div');
    divForecasts.classList = 'forecasts';

    const spanConditionSymbol = document.createElement('span');
    spanConditionSymbol.classList = 'condition symbol';
    spanConditionSymbol.innerHTML = symoblTransfromer(currentConditions.forecast.condition);

    const spanCondition = document.createElement('span');
    spanCondition.classList = 'condition';
        
    forecastVisualisation(spanCondition, currentConditions.name, 'forecast-data');

    forecastVisualisation(spanCondition, `${currentConditions.forecast.low}°/${currentConditions.forecast.high}°`, 'forecast-data');
    
    forecastVisualisation(spanCondition, currentConditions.forecast.condition, 'forecast-data');
    
    divForecasts.appendChild(spanConditionSymbol);
    divForecasts.appendChild(spanCondition);
    divElementCurrent.appendChild(divForecasts);
    


    // Object.entries(currentConditions).forEach(x => {
    //     const newSpanElement = document.createElement('span');
      
    // } ) 

    const divForecastInfo = document.createElement('div');
    divForecastInfo.classList = 'forecast-info';

    const spanUpcoming = document.createElement('span');
    spanUpcoming.classList = 'upcoming';

    // TODO
    forecastVisualisation();
    forecastVisualisation();
    forecastVisualisation();



    divForecastInfo.appendChild(spanUpcoming);


   


    const upcomingConditions = await getRequest(url, 'upcoming', locationCode);
    console.log(upcomingConditions);

    forecastDiv.style.display = 'block';
  }

  function forecastVisualisation(element, value, divClass) {
    const newSpanElement = document.createElement('span');
    newSpanElement.classList = divClass;
    newSpanElement.textContent = value;
    element.appendChild(newSpanElement);
}

  async function getRequest(url, subDirectory, locationCode = '') {
    const res = await fetch(`${url}/${subDirectory}/${locationCode}`);
    const data = await res.json();
    return data;
  }

  function symoblTransfromer(weather) {
    switch (weather) {
      case 'Sunny':
        weather = '&#x2600';
        break;
      case 'Partly sunny':
        weather = '&#x26C5;';
        break;
      case 'Overcast':
        weather = '&#x2601;';
        break;
      case 'Rain':
        weather = '&#x2614;';
        break;
      case 'Degrees':
        weather = '&#176;';
        break;
    }
    return weather;
  }

}

attachEvents();

function symoblTransfromer(weather) {
  // let icon;
  switch (weather) {
    case 'Sunny':
      icon = &#x2600;
      break;
    case 'Partly sunny':
      icon = '&#x26C5;';
      break;
    case 'Overcast':
      icon = '&#x2601;';
      break;
    case 'Rain':
      icon = '&#x2614;';
      break;
    case 'Degrees':
      icon = '&#176;';
      break;
  }
  // return weather;
  console.log(icon);
}

symoblTransfromer('Sunny');

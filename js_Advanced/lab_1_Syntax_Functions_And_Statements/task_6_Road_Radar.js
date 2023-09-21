// Task 6 - Road Radar

function roadrRadar(speed, area) {
  const residentialAreaLimit = 20;
  const cityLimit = 50;
  const interstateLimit = 90;
  const motorwayLimit = 130;

  let currentLimits = 0;
  let status = '';
  let speedOVerLimit = 0;

  switch (area) {
    case 'residential':
      currentLimits = residentialAreaLimit;
      break;
    case 'city':
      currentLimits = cityLimit;
      break;
    case 'interstate':
      currentLimits = interstateLimit;
      break;
    case 'motorway':
      currentLimits = motorwayLimit;
      break;
  }

  speedOVerLimit = Math.abs(currentLimits - speed);

  if (speedOVerLimit > 0 && speedOVerLimit <= 20) {
    status = 'speeding';
  } else if (speedOVerLimit > 20 && speedOVerLimit <= 40) {
    status = 'excessive speeding';
  } else if (speedOVerLimit > 40) {
    status = 'reckless driving';
  }

  if (speed > currentLimits) {
    console.log(
      `The speed is ${speedOVerLimit} km/h faster than the allowed speed of ${currentLimits} - ${status}`
    );
  } else {
    console.log(`Driving ${speed} km/h in a ${currentLimits} zone`);
  }
}

roadrRadar(40, 'city');
roadrRadar(21, 'residential');
roadrRadar(120, 'interstate');
roadrRadar(200, 'motorway');

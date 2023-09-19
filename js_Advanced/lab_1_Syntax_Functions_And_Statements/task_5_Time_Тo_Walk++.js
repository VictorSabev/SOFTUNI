// Task 5 - Time to Walk

function travelTiming(totalSteps, footprint, speed) {
  const totalDistanceMeters = totalSteps * footprint;
  const totalDistanceKM = totalDistanceMeters / 1000;
  const breakTime = 60;
  const numberOfBrakes = Math.floor(totalDistanceMeters / 500);
  const totalBreakTimeSec = numberOfBrakes * breakTime;

  let timeTravelingHr = totalDistanceKM / speed;
  let totalTimeTravelingSec = timeTravelingHr * 3600 + totalBreakTimeSec;

  let hours = Math.floor(totalTimeTravelingSec / 3600);
  let minutes = Math.floor((totalTimeTravelingSec % 3600) / 60);
  let seconds = Math.ceil(totalTimeTravelingSec % 60);

  if (hours < 10) {
    hours = '0' + hours;
  }

  if (minutes < 10) {
    minutes = '0' + minutes;
  }

  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  console.log(`${hours}:${minutes}:${seconds}`);
}

travelTiming(4000, 0.6, 5);
travelTiming(2564, 0.7, 5.5);

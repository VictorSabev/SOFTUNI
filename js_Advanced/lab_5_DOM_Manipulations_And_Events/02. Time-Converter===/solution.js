function attachEventsListeners() {
  let inputDays = document.getElementById('days');
  let inputHours = document.getElementById('hours');
  let inputMinutes = document.getElementById('minutes');
  let inputSeconds = document.getElementById('seconds');

  let daysButton = document.getElementById('daysBtn');
  let hoursButton = document.getElementById('hoursBtn');
  let minutesButton = document.getElementById('minutesBtn');
  let secondsButton = document.getElementById('secondsBtn');

  daysButton.addEventListener('click', () => {
    if (isNaN(inputDays.value) || inputDays.value === '') {
      inputDays.value = '';
      return;
    }
    inputHours.value = inputDays.value * 24;
    inputMinutes.value = inputDays.value * 1440;
    inputSeconds.value = inputDays.value * 86400;
  });

  hoursButton.addEventListener('click', () => {
    if (isNaN(inputHours.value) || inputHours.value === '') {
      inputHours.value = '';
      return;
    }
    inputDays.value = inputHours.value / 24;
    inputMinutes.value = inputHours.value * 60;
    inputSeconds.value = inputHours.value * 3600;
  });

  minutesButton.addEventListener('click', () => {
    if (isNaN(inputMinutes.value) || inputMinutes.value === '') {
      inputMinutes.value = '';
      return;
    }
    inputDays.value = inputMinutes.value / 3600;
    inputHours.value = inputMinutes.value / 60;
    inputSeconds.value = inputMinutes.value * 60;
  });

  secondsButton.addEventListener('click', () => {
    if (isNaN(inputSeconds.value) || inputSeconds.value === '') {
      inputSeconds.value = '';
      return;
    }
    inputDays.value = inputSeconds.value / 86400;
    inputHours.value = inputSeconds.value / 3600;
    inputMinutes.value = inputSeconds.value / 60;
  });
}

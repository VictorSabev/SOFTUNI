import { monthSwitch } from './months.js';
import { hideCalenders, displayAs } from './display.js';


window.addEventListener('load', hideCalenders());
const yearsCalender = document.getElementById('years');

const years = document.querySelectorAll('td.day');

years.forEach((year) => {
  year.addEventListener('click', () => {
    const currentYear = year.querySelector('div').textContent;
    let selectedYear = document.getElementById(`year-${currentYear}`);
    if (selectedYear) {
    hideCalenders();
    displayAs(selectedYear, 'block');
    displayAs( yearsCalender, 'none'); 
    }
    const months = selectedYear.querySelectorAll('td.day');
    months.forEach((month) =>
      month.addEventListener('click', () => {
        const currentMonth = month.querySelector('div').textContent;
        let currentMonthNumber;
        currentMonthNumber = monthSwitch(currentMonth);
        let selectedMonth = document.getElementById(`month-${currentYear}-${currentMonthNumber}`);
        hideCalenders();
        displayAs(selectedMonth, 'block');
      })
    );
  });
});

// function buttonLocator(timePeriod, element,  ) {
//   timePeriod.forEach((x) => {
//     x.addEventListener('click' () => {
//       const currentTextValue = x.querySelector(`${element}`.textContent;)
//     })
//   })
// }

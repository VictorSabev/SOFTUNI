export function displayAs(currentSelection, displayStyle) {
  currentSelection.style.display = displayStyle;
}

export function hideCalenders() {
  document
    .querySelectorAll('.monthCalendar, .daysCalendar')
    .forEach((x) => (x.style.display = 'none'));
    
}



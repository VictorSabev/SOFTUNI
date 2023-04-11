// Zadacha 2 - Hospital

function Demo(input) {
  let period = Number(input[0]);
  let dailyPatiens;

  let daycount = 1;
  let untreatedPatiens = 0;
  let treatedPatiens = 0;
  let doctors = 7;

  for (let i = 1; i <= period; i++) {
    if (daycount % 3 === 0) {
      if (untreatedPatiens > treatedPatiens) {
        doctors++;
      }
    }
    daycount++;
    dailyPatiens = Number(input[i]);

    if (dailyPatiens > doctors) {
      untreatedPatiens = untreatedPatiens + dailyPatiens - doctors;
      treatedPatiens += doctors;
    } else treatedPatiens += dailyPatiens;
  }
  console.log(`Treated patients: ${treatedPatiens}.`);
  console.log(`Untreated patients: ${untreatedPatiens}.`);
}

Demo(['4', '7', '27', '9', '1']);
Demo(['6', '25', '25', '25', '25', '25', '2']);

// Task 7 - Trekking Mania

function Demo(input) {
  let groupsNumber = Number(input[0]);
  let totalAmountOfPeople = 0;
  let gP1 = 0;
  let gP2 = 0;
  let gP3 = 0;
  let gP4 = 0;
  let gP5 = 0;
  let currentGroupMembers = 0;

  for (let i = 1; i <= groupsNumber; i++) {
    currentGroupMembers = Number(input[i]);
    totalAmountOfPeople += Number(input[i]);

    if (currentGroupMembers <= 5) {
      gP1 += currentGroupMembers;
    } else if (currentGroupMembers >= 6 && currentGroupMembers <= 12) {
      gP2 += currentGroupMembers;
    } else if (currentGroupMembers >= 13 && currentGroupMembers <= 25) {
      gP3 += currentGroupMembers;
    } else if (currentGroupMembers >= 26 && currentGroupMembers <= 40) {
      gP4 += currentGroupMembers;
    } else if (currentGroupMembers >= 40) {
      gP5 += currentGroupMembers;
    }
  }
  let Musala = (gP1 / totalAmountOfPeople) * 100;
  let Monblan = (gP2 / totalAmountOfPeople) * 100;
  let Kilimandjaro = (gP3 / totalAmountOfPeople) * 100;
  let K2 = (gP4 / totalAmountOfPeople) * 100;
  let Everest = (gP5 / totalAmountOfPeople) * 100;

  console.log(Musala.toFixed(2) + '%');
  console.log(Monblan.toFixed(2) + '%');
  console.log(Kilimandjaro.toFixed(2) + '%');
  console.log(K2.toFixed(2) + '%');
  console.log(Everest.toFixed(2) + '%');
}

Demo(['10', '10', '5', '1', '100', '12', '26', '17', '37', '40', '78']);
console.log('-------------------');
Demo(['5', '25', '41', '31', '250', '6']);

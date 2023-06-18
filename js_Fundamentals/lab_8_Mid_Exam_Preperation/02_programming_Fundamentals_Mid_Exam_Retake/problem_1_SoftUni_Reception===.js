// Problem 1 - SoftUni Reception

function softUniHelpDesk(input) {
  const firstEmployeeEEfficiency = Number(input.shift());
  const secondEmployeeEEfficiency = Number(input.shift());
  const thirdEmployeeEEfficiency = Number(input.shift());
  const totalAmountOFStudents = Number(input.shift());

  let studentsProcesed = 0;
  let horusSpent = 0;
  let totalEfficiencyPerHour = firstEmployeeEEfficiency + secondEmployeeEEfficiency + thirdEmployeeEEfficiency;
  let brekaCountdown = 0;

  while (studentsProcesed === totalAmountOFStudents) {
    horusSpent++;
    brekaCountdown++;
    studentsProcesed += totalEfficiencyPerHour;
    if (studentsProcesed >= totalAmountOFStudents) {
      studentsProcesed = totalAmountOFStudents;
      break;
    }
    if (brekaCountdown === 3) {
      horusSpent++;
      brekaCountdown = 0;
    }
  }

   console.log(`Time needed: ${horusSpent}h.`);
}

softUniHelpDesk(['5', '6', '4', '20']);
softUniHelpDesk(['1', '2', '3', '45']);
softUniHelpDesk(['3', '2', '5', '40']);

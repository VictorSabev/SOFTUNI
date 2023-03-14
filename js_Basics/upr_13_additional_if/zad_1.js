// Zadacha 1 - Pipes In Pool

function Demo(input) {
  let index = 0;
  let V = Number(input[index]);
  index++;
  let P1 = Number(input[index]);
  index++;
  let P2 = Number(input[index]);
  index++;
  let H = Number(input[index]);
  index++;

  let pipe1Volume = P1 * H;
  let pipe2Volume = P2 * H;

  let totalVolume = pipe1Volume + pipe2Volume;

  let pipe1TotalPercentage = (pipe1Volume / totalVolume) * 100;
  let pipe2TotalPercentage = (pipe2Volume / totalVolume) * 100;

  let totalPercentage = (pipe1Volume / V) * 100 + (pipe2Volume / V) * 100;

  let difference = Math.abs(V - totalVolume);

  if (totalVolume <= V) {
    console.log(
      `The pool is ${totalPercentage.toFixed(
        2
      )}% full. Pipe 1: ${pipe1TotalPercentage.toFixed(
        2
      )}%. Pipe 2: ${pipe2TotalPercentage.toFixed(2)}%.`
    );
  } else {
    console.log(
      `For ${H.toFixed(2)} hours the pool overflows with ${difference} liters.`
    );
  }
}

Demo(['1000', '100', '120', '3']);
Demo(['100', '100', '100', '2.5']);

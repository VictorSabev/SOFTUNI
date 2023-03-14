// Zadacha 4 - Even Powers of 2

function Demo(input) {
  let num = Number(input[0]);

  for (i=0; i<=num; i++){
    if ((i % 2) === 0) {
      console.log(2 ** i);
    }
  }
}

Demo(['3']);
Demo(['4']);
Demo(['5']);
Demo(['6']);
Demo(['7']);
// Task 4 - Sequence 2k+1

function Demo(input) {
  let num = Number(input[0]);
  let log = 1;

  while (log <= num) {
    console.log(log);
    log = log * 2 + 1;
  }
}

Demo(['3']);
Demo(['8']);
Demo(['17']);
Demo(['31']);

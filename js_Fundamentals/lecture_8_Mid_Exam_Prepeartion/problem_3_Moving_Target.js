// Problem 3 - Moving Target

function movingTarget(input) {
  let targetSequence = input.shift().split(' ').map(Number);

  for (let i of input) {    // better executed with while loop
    let instructions = i.split(' ');
    let command = instructions.shift(); 
    let index = Number(instructions.shift());
    let secondParameter = Number(instructions.shift());

    let target = targetSequence[index];

    switch (command) {
      case 'Shoot':
        if (index >= 0 && index < targetSequence.length) {
          if (target > secondParameter) {
            target -= secondParameter;
            targetSequence[index] = target;
          } else {
            targetSequence.splice(index, 1);
          }
        }
        break;
      case 'Add':
        if (index >= 0 && index < targetSequence.length) {   // if (targetSequence[index]) - check if there is a valid element on that position (index) 
          targetSequence.splice(index, 0, secondParameter);
        } else {
          console.log('Invalid placement!');
        }
        break;
      case 'Strike':
        if (index - secondParameter >= 0 && index + secondParameter < targetSequence.length) {
          targetSequence.splice(index - secondParameter, secondParameter * 2 + 1); /// IMPORTANT TO SET SPLICE() RANGE CORRECTLY!
        } else {
          console.log('Strike missed!');
        }
        break;
      case 'End':
        break;
    }
  }
  console.log(targetSequence.join('|'));
}

movingTarget(['52 74 23 44 96 110', 'Shoot 5 10', 'Shoot 1 80', 'Strike 2 1', 'Add 22 3', 'End']);
console.log('-------------');
movingTarget(['1 2 3 4 5', 'Strike 0 1', 'End']);

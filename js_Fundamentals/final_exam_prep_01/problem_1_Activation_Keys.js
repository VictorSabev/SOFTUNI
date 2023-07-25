// Problem 1 - Activation Keys

function keyGen(input) {
  let activationKey = input.shift();

  let instructions = input.shift();

  while (instructions !== 'Generate') {
    instructions = instructions.split('>>>');
    const command = instructions.shift();

    switch (command) {
      case 'Contains':
        const subString = instructions.shift();
        if (activationKey.includes(subString)) {
          console.log(`${activationKey} contains ${subString}`);
        } else {
          console.log('Substring not found!');
        }
        break;

      case 'Flip':
        const letterCase = instructions.shift();
        const startIndex = instructions.shift();
        const endIndex = instructions.shift();
        const subSample = activationKey.substring(startIndex, endIndex);
        let subReplace;

        if (letterCase === 'Upper') {
          subReplace = subSample.toUpperCase();
        } else if (letterCase === 'Lower') {
          subReplace = subSample.toLowerCase();
        }
        activationKey = activationKey.replace(subSample, subReplace);
        console.log(activationKey);
        break;

      case 'Slice':
        const startInd = instructions.shift();
        const endInd = instructions.shift();
        activationKey =
          activationKey.slice(0, startInd) + activationKey.slice(endInd);
        console.log(activationKey);
        break;
    }

    instructions = input.shift();
  }
  console.log(`Your activation key is: ${activationKey}`);
}

keyGen([
  'abcdefghijklmnopqrstuvwxyz',

  'Slice>>>2>>>6',

  'Flip>>>Upper>>>3>>>14',

  'Flip>>>Lower>>>5>>>7',

  'Contains>>>def',

  'Contains>>>deF',

  'Generate',
]);

console.log('------');

keyGen([
  '134softsf5ftuni2020rockz42',

  'Slice>>>3>>>7',

  'Contains>>>-rock',

  'Contains>>>-uni-',

  'Contains>>>-rocks',

  'Flip>>>Upper>>>2>>>8',

  'Flip>>>Lower>>>5>>>11',

  'Generate',
]);

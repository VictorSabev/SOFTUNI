// Task 3 - Deserialize String

function deserializeString(input) {
  let index = 0;
  let command = input[index];
  index++;
  let resultArr = [];

  while (command !== 'end') {
    let [char, indexChar] = command.split(':');
    indexChar = indexChar.split('/');

    for (const element of indexChar) {
      resultArr[element] = char;
    }

    command = input[index];
    index++;
  }
  console.log(resultArr.join(''));
}

deserializeString(['a:0/2/4/6', 'b:1/3/5', 'end']);
deserializeString([
  'a:0/3/5/11',

  'v:1/4',

  'j:2',

  'm:6/9/15',

  's:7/13',

  'd:8/14',

  'c:10',

  'l:12',

  'end',
]);

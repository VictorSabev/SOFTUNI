// Problem 2 - Boss Rush

function randomBullshit(input) {
  const numberOfInputs = Number(input.shift());

  const pattern = /(?<boss>\|[A-Z]{4,}\|):(?<title>#[A-Za-z]+ [A-Za-z]+#)/gi;

  for (let i = 0; i < numberOfInputs; i++) {
    let currentInput = input.shift();

    if (!pattern.test(currentInput)) {
      console.log('Access denied!');
    } else {
      currentInput = currentInput.match(pattern);

      for (const match of currentInput) {
        let bossName = match.split('|')[1];
        let title = match.split('#')[1];
        let strength = bossName.length;
        let armor = title.length;
        console.log(`${bossName}, The ${title}`);
        console.log(`>> Strength: ${strength}`);
        console.log(`>> Armor: ${armor}`);
      }
    }
  }
}

randomBullshit([
  '3',
  '|PETER|:#Lead architect#',
  '|GEORGE|:#High Overseer#',
  '|ALEX|:#Assistant Game Developer#',
]);
console.log('---------');
randomBullshit([
  '3',

  '|STEFAN|:#H1gh Overseer#',

  '|IVAN|:#Master detective#',

  '|KARL|: #Marketing lead#',
]);

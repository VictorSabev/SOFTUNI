// Problem 6 - Mirror Words

function mirrorWords(input) {
  let text = input.shift();
  const patternPairs = /([@\|#])([A-Za-z]{3,})\1{2}[A-Za-z]{3,}\1/g;
  const pattern = /([A-Za-z]{3,})/g;
  // const pattern = /([@\|#])([A-Za-z]{3,})\1/g;
  let matchingPairs = text.match(patternPairs);
  if (matchingPairs !== null) {
    let validPairs = matchingPairs.join('');

    let matches = validPairs.match(pattern);

    let resultArr = [];
    if (matchingPairs.length !== 0) {
      console.log(`${matchingPairs.length} word pairs found!`);
    } else {
      console.log('No word pairs found!');
    }

    if (matches !== null) {
      for (let i = 0; i < matches.length; i = i + 2) {
        let currentString = matches[i];
        let testObject = '';
        for (let a = currentString.length - 1; a >= 0; a--) {
          testObject += currentString[a];
        }
        if (matches[i + 1] === testObject) {
          resultArr.push(`${matches[i]} <=> ${matches[i + 1]}`);
        }
      }
    }
    if (resultArr.length !== 0 && resultArr !== null) {
      console.log('The mirror words are:');
      console.log(`${resultArr.join(', ')}`);
    } else {
      console.log('No mirror words!');
    }
  } else {
    console.log('No word pairs found!');
    console.log('No mirror words!');
  }
}

mirrorWords([
  '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r',
]);
mirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);
mirrorWords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#']);

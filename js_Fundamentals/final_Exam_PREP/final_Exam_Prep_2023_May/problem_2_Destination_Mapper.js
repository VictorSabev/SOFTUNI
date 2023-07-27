// Problem 2 - Destination Mapper

function destinationMapper(text) {
  const pattern = /(=|\/){1}[A-Z]{1}[a-zA-Z]{2,}\1/g;
  let matches = text.match(pattern);
  let points = 0;
  let resultArr = [];

  if (matches !== null) {
    for (let match of matches) {
      match = match.split(/[\/=]/);
      match = match[1];
      resultArr.push(match);
      points += match.length;
    }
  }
  console.log(`Destinations: ${resultArr.join(', ')}`);
  console.log(`Travel Points: ${points}`);
}

destinationMapper('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=');
destinationMapper('ThisIs some InvalidInput');

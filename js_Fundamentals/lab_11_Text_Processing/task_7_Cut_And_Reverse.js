// Task 7 - Cut and Reverse

function cutAndReverse(text) {
  // my initial solution

  // let startingINdex = 0;
  // let endIndex = Math.floor(text.length / 2);

  // let firstHalf = text.substring(startingINdex, endIndex);
  // let firstArr = [];
  // let secondArr = [];

  // for (const letter of firstHalf) {
  //   firstArr.unshift(letter);
  // }

  // console.log(firstArr.join(''));
  // startingINdex = endIndex;

  // let secondHalf = text.substring(startingINdex);

  // for (const letter of secondHalf) {
  //   secondArr.unshift(letter);
  // }

  // console.log(secondArr.join(''));

  // lecturer solution:

  const middle = Math.floor(text.length / 2);

  const firstPart = text.substring(0, middle).split('').reverse().join('');

  const sceondPart = text.substring(middle).split('').reverse().join('');

  console.log(firstPart);
  console.log(sceondPart);
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');

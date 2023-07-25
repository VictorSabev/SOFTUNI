// Problem 2 - Emoji Detector

function emojiDetector(input) {
  const text = input.shift();

  let coolThresholdPattern = /\d/g;
  const emojiPattern = /(:{2}|\*{2})[A-Z][a-z]{2,}\1/g;

  // Threshold
  const coolThresholdArr = text.match(coolThresholdPattern).map(Number);
  let coolThresholSum = coolThresholdArr.reduce((x, y) => x * y, 1);

  //Emoji
  const coolEmojies = text.match(emojiPattern);
  const numberOfEmojies = coolEmojies.length;

  console.log(`Cool threshold: ${coolThresholSum}`);
  console.log(
    `${numberOfEmojies} emojis found in the text. The cool ones are:`
  );

  for (const emojy of coolEmojies) {
    let coolness = 0;
    for (const char of emojy) {
      if (char !== ':' && char !== '*') {
        coolness += char.charCodeAt();
      }
    }

    if (coolness > coolThresholSum) {
      console.log(emojy);
    }
  }
}

emojiDetector([
  'In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**',
]);
emojiDetector([
  "It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using)'Content here, content 99 here', making it look like readable **English**.",
]);

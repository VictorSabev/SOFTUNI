// Task 1 - Words Tracker

function wordsTracker(input) {
  let testSubject = {};

  let samples = input.shift().split(' ');

  for (const word of samples) {
    // loop over the samples array in order to initialize occurrence value
    testSubject[word] = 0;
  }

  for (const entry of input) {
    let testWord = entry;

    if (testSubject.hasOwnProperty(testWord)) {
      // in this scenerio if statemnt "testsubject[testword]" will not be siutable This condition checks if the testWord property exists in the testSubject object, but it doesn't account for the initial setup where the values are set to 0.
      testSubject[testWord]++;
    }
  }

  let sortArray = Object.entries(testSubject);
  sortArray.sort((a, b) => b[1] - a[1]);

  for (const [word, count] of sortArray) {
    console.log(`${word} - ${count}`);
  }
}

wordsTracker([
  'this sentence',

  'In',
  'this',
  'sentence',
  'you',
  'have',

  'to',
  'count',
  'the',
  'occurrences',
  'of',

  'the',
  'words',
  'this',
  'and',
  'sentence',

  'because',
  'this',
  'is',
  'your',
  'task',
]);
wordsTracker([
  'is the',

  'first',
  'sentence',
  'Here',
  'is',

  'another',
  'the',
  'And',
  'finally',
  'the',

  'the',
  'sentence',
]);

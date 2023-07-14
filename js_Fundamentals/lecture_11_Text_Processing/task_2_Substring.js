// Task 2 - Substring

function substringPrint(string, startinIndex, indexCount) {
  let result = string.substring(startinIndex, startinIndex + indexCount);
  console.log(result);
}

substringPrint('ASentence', 1, 8);
substringPrint('SkipWord', 4, 7);

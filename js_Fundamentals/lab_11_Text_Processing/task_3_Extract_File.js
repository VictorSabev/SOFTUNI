// Task 3 - Extract File

function extractingFile(path) {
  let file = path.split('\\').pop();

  let extensionIndex = file.lastIndexOf('.');
  let extension = file.substring(extensionIndex + 1);

  let fileName = file.split('.');
  fileName.pop();
  fileName = fileName.join('.');

  console.log(`File name: ${fileName}`);
  console.log(`File extension: ${extension}`);
}

extractingFile('C:\\Internal\\training-internal\\Template.bbk.pptx');
extractingFile('C:\\Projects\\Data-Structures\\LinkedList.cs');

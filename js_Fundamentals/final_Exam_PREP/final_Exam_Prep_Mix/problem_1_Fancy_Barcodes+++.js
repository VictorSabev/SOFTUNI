// Problem 1 - Fancy Barcodes

function barcodeCheck(input) {
  const numberOfBarcodes = input.shift();
  const barcodePattern = /@#+[A-Z]{1}[A-Za-z0-9]{4,}[A-Z]{1}@#+/; // NO FLAG FOR THIS REGEX!
  const productPattern = /\d/g;

  for (let i = 0; i < numberOfBarcodes; i++) {
    let currentBarcode = input[i];

    let currentProductGroup = '';

    if (barcodePattern.test(currentBarcode)) {
      let validDigits = currentBarcode.match(productPattern);
      if (validDigits !== null) {
        for (const digit of validDigits) {
          currentProductGroup += digit;
        }
      }
      if (currentProductGroup === '') {
        currentProductGroup = '00';
      }
      console.log(`Product group: ${currentProductGroup}`);
    } else {
      console.log('Invalid barcode');
    }
  }
}

barcodeCheck(['3', '@#FreshFisH@#', '@###Brea0D@###', '@##Che4s6E@##']);
console.log('---------');
barcodeCheck([
  '6',
  '@###Val1d1teM@###',
  '@#ValidIteM@#',
  '##InvaliDiteM##',
  '@InvalidIteM@',
  '@#Invalid_IteM@#',
  '@#ValiditeM@#',
]);

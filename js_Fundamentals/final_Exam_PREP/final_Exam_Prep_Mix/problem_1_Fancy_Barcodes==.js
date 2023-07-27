// Problem 1 - Fancy Barcodes

function barcodeCheck(input) {
  const numberOfBarcodes = Number(input.shift());
  const barcodePattern = /@#+[A-Z]{1}[A-Za-z0-9]{4,}[A-Z]{1}@#+/g;
  const productPattern = /\d/g;

  for (let i = 0; i < numberOfBarcodes; i++) {
    let currentBarcode = input[i];
    // if (barcodePattern.test(currentBarcode)) {
    //   console.log(currentBarcode);
    // }
    let matches = currentBarcode.match(barcodePattern);
    for (const match of matches) {
      console.log(match);
    }
  }
  let currentProductGroup = '';

  //   if (barcodePattern.test(currentBarcode)) {
  //     let validDigits = currentBarcode.match(productPattern);
  //     if (validDigits !== null) {
  //       for (const digit of validDigits) {
  //         currentProductGroup += digit;
  //       }
  //     }
  //     if (currentProductGroup === '') {
  //       currentProductGroup = '00';
  //     }
  //     console.log(`Product group: ${currentProductGroup}`);
  //   } else {
  //     console.log('Invalid barcode');
  //   }
  // }
}

// barcodeCheck(['3', '@#FreshFisH@#', '@###Brea0D@###', '@##Che4s6E@##']);
// console.log('---------');
barcodeCheck([
  '6',
  '@###Val1d1teM@###',
  '@#ValidIteM@#',
  '##InvaliDiteM##',
  '@InvalidIteM@',
  '@#Invalid_IteM@#',
  '@#ValiditeM@#',
]);

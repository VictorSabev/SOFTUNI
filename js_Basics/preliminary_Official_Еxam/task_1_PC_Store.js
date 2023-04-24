// Task 1 - PC Store

function Demo(input) {
  let CPUPrice = Number(input[0]);
  let GPUPrice = Number(input[1]);
  let RAMPrice = Number(input[2]);
  let RAMQuantity = Number(input[3]);
  let discount = Number(input[4]);

  let CPUPriceInBGN = CPUPrice * 1.57;
  let GPUPriceInBGN = GPUPrice * 1.57;
  let RAMPriceINBGN = RAMPrice * 1.57;

  let ones = CPUPriceInBGN + GPUPriceInBGN;
  let total = ones - ones * discount + RAMPriceINBGN * RAMQuantity;

  console.log(`Money needed - ${total.toFixed(2)} leva.`);
}

Demo(['500', '200', '80', '2', '0.05']);
Demo(['1200', '850', '120', '4', '0.1']);
Demo(['200', '100', '80', '1', '0.01']);

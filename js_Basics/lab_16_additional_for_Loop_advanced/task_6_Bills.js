// Task 6 - Bills

function Demo(input) {
  let period = Number(input[0]);
  let electricityBill = 0;
  let elBillCount = 0;

  let waterBill = 20;
  let internetBill = 15;
  let otherBills = 0;
  let otherBillsCount = 0;

  for (let i = 1; i <= period; i++) {
    electricityBill = Number(input[i]);
    elBillCount += electricityBill;
    otherBills = (waterBill + internetBill + electricityBill) * 1.2;
    otherBillsCount += otherBills;
  }

  let totalWater = waterBill * period;
  let totalInternet = internetBill * period;
  let avgBills = (totalWater + totalInternet + elBillCount + otherBillsCount) / period;

  console.log(`Electricity: ${elBillCount.toFixed(2)} lv`);
  console.log(`Water: ${totalWater.toFixed(2)} lv`);
  console.log(`Internet: ${totalInternet.toFixed(2)} lv`);
  console.log(`Other: ${otherBillsCount.toFixed(2)} lv`);
  console.log(`Average: ${avgBills.toFixed(2)} lv`);
}

Demo(['5', '68.63', '89.25', '132.53', '93.53', '63.22']);
console.log('-------------------');
Demo(['8', '123.54', '231.54', '140.23', '100', '122.4', '430', '178.52', '64.2']);

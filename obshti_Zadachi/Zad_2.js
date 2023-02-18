/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let buy = Infinity;
  let sell = 0;
  let arr = [];

  for (let price of prices) {
    if (price < buy) {
      buy = price;
      sell = 0;
    }
    if (price > sell) {
      sell = price;
    }
    arr.push(sell - buy);
  }
  console.log(arr);
};

maxProfit([7, 1, 5, 3, 6, 4]);
maxProfit([7, 6, 4, 3, 1]);

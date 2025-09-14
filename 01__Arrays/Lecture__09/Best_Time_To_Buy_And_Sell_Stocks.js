// LeetCode Link --> https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

// Optimal Solution with DP
function maxProfit(prices) {
  let maxProfit = 0, minPrices = Infinity;
  for (let i = 0, len = prices.length; i < len; i++) {
    minPrices = Math.min(minPrices, prices[i]);
    let profit = prices[i]-minPrices;
    maxProfit = Math.max(maxProfit, profit);
  }
  return maxProfit;
}
//Test-Case
let arr = [7,1,5,3,6,4];
console.log(maxProfit(arr));
// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0

// Input: prices = [7,1,5,3,6,4]
// Output: 5
const prices = [7, 1, 5, 3, 6, 4]

function bestStock(prices) {

    let maxProfit = 0;
    let left = prices[0] //buy
    let right = prices[1] // sell
    let j = 1;
    for (let i = 0; i < prices.length - 1; i++) {

        right = prices[j];
        if (right < left) {
            left = right
        }
        j++;

        maxProfit = Math.max(maxProfit, (right - left))
    }
    return maxProfit;
}
const res = bestStock(prices)

console.log("res:", res);
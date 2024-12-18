/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    const length = prices.length
    const stack = []
    const answer = new Array(length).fill(-1)

    for (let i = 0; i < prices.length; i++) {
        while (stack.length !== 0 && prices[i] <= prices[stack[stack.length - 1]]) {
            const index = stack.pop()
            let finalPrice = prices[index] - prices[i]
            answer[index] = finalPrice
        }
        stack.push(i)
    }
     return answer.map((price, i) => price === -1 ? prices[i] : price);

};
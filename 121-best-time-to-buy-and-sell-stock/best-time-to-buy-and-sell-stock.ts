function maxProfit(prices: number[]): number {
    let minPrice: number = Infinity
    let maxProfit: number = 0

    for (const price of prices) {
        if (price < minPrice) {
            minPrice = price
        } else {
            const profit: number = price - minPrice
            if (profit > maxProfit) {
                maxProfit = profit
            }
        }
    }

    return maxProfit
};
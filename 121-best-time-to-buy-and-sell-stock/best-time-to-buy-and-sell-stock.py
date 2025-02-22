class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        min_price = float('inf')
        max_profit = 0

        for price in prices:
            profit = price - min_price
            if profit > max_profit:
                max_profit = profit

            min_price = min(price, min_price)

        return max_profit
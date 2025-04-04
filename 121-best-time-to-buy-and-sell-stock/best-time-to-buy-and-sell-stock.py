class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        min_buying_price = float('inf')
        max_profit = float('-inf')

        for price in prices:
            min_buying_price = min(price, min_buying_price)
            profit = price - min_buying_price

            max_profit = max(max_profit, profit)

        return max_profit
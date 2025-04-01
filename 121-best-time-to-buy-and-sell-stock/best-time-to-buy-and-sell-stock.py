class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        max_profit = float('-inf')
        min_buying_price = prices[0]

        for price in prices:
            min_buying_price = min(min_buying_price, price)
            profit = price - min_buying_price

            max_profit = max(max_profit, profit)

        return max_profit
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        max_profit = 0
        min_buying_price = prices[0]

        for price in prices:
            min_buying_price = min(min_buying_price, price)
            max_profit = max(max_profit, price - min_buying_price)

        return max_profit 
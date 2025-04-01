class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        min_buying_price = prices[0]
        max_profit = float('-inf')

        for price in prices:
            if price < min_buying_price:
                min_buying_price = price
            
            profit = price - min_buying_price
            max_profit = max(max_profit, profit)

        return max_profit
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        max_profit = 0
        min_buying_price = prices[0]

        for price in prices:
            curr_profit = price - min_buying_price
            max_profit = max(max_profit, curr_profit)
            
            if price < min_buying_price:
                min_buying_price = price

        return max_profit


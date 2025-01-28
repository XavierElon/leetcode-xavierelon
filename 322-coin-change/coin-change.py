class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        dp = [float('inf')] * (amount + 1)
        dp[0] = 0

        for t in range(1, amount + 1):
            for coin in coins:
                if coin <= t:
                    dp[t] = min(dp[t], 1 + dp[t-coin])
        
        return dp[amount] if dp[amount] != float('inf') else -1
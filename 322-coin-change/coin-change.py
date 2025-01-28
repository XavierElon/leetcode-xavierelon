class Solution:
    def coinChange(self, coins: List[int], target: int) -> int:
        dp = [float('inf')] * (target + 1)
        dp[0] = 0

        for t in range(1, target + 1):
            for coin in coins:
                if coin <= t:
                    dp[t] = min(dp[t], 1 + dp[t-coin])
        
        return dp[target] if dp[target] != float('inf') else -1
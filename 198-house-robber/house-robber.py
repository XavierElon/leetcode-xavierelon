class Solution:
    def rob(self, houses: List[int]) -> int:
        if not houses:
            return 0
        if len(houses) == 1:
            return houses[0]
        
        dp = [0] * len(houses)
        dp[0] = houses[0]
        dp[1] = max(houses[0], houses[1])

        for i in range(2, len(houses)):
            dp[i] = max(dp[i-1], houses[i] + dp[i-2])
        
        return dp[len(houses) - 1]
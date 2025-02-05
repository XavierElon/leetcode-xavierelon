class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        dp = [0] * (len(cost) + 1)

        for i in range(2, len(cost) + 1):
            one_step = dp[i-1] + cost[i-1]
            two_steps = dp[i-2] + cost[i-2]
            dp[i] = min(one_step, two_steps)
        return dp[-1]
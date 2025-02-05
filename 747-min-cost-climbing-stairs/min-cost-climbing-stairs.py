class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        def min_cost(i):
            if i <= 1:
                return 0

            if i in memo:
                return memo[i]

            down_one = cost[i-1] + min_cost(i-1)
            down_two = cost[i-2] + min_cost(i-2)
            memo[i] = min(down_one, down_two)
            return memo[i]

        memo = {}
        return min_cost(len(cost))
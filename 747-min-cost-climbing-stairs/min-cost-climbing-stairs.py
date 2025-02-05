class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        minimum_cost = [0] * (len(cost) + 1)

        for i in range(2, len(cost) + 1):
            one_step = minimum_cost[i-1] + cost[i-1]
            two_step = minimum_cost[i-2] + cost[i-2]
            minimum_cost[i] = min(one_step, two_step)

        return minimum_cost[-1]
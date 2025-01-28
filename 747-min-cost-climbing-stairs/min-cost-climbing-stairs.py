class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        minimum_cost = [0] * (len(cost) + 1)

        for i in range(2, len(cost) + 1):
            take_one_step = minimum_cost[i-1] + cost[i-1]
            take_two_steps = minimum_cost[i-2] + cost[i-2]
            minimum_cost[i] = min(take_one_step, take_two_steps)

        return minimum_cost[-1]
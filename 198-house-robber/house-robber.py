class Solution:
    def rob(self, houses: List[int]) -> int:
        if not houses:
            return 0
        n = len(houses)
        dp = [0] * n

        if n == 1:
            return houses[0]
        
        prev_house = houses[0]
        curr_house = max(houses[0], houses[1])

        for i in range(2, n):
            curr_max_profit = max(curr_house, houses[i] + prev_house)
            prev_house = curr_house
            curr_house = curr_max_profit

        return curr_house

    
class Solution:
    def climbStairs(self, n: int) -> int:
        memo = [0] * (n+1)
        return self.climb_stairs(0, n, memo)

    def climb_stairs(self, i: int, n: int, memo: List[int]) -> int:
        if i > n:
            return 0
        if i == n:
            return 1
        if memo[i] > 0:
            return memo[i]

        memo[i] = self.climb_stairs(i+1, n, memo) + self.climb_stairs(i + 2, n, memo)

        return memo[i]
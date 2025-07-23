class Solution:
    def climbStairs(self, n: int) -> int:
        memo = [0] * (n + 1)
        return self.climbing_stairs_top_down(n, memo)

    def climbing_stairs_top_down(self, n: int, memo:List[int]) -> int:
        if n <= 2:
            return n
        if n in memo:
            return memo[n]

        memo[n] = (
            self.climbing_stairs_top_down(n - 1, memo) + self.climbing_stairs_top_down(n - 2, memo)
        )

        return memo[n]
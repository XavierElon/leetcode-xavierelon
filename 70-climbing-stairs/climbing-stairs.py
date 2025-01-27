class Solution:
    def climbStairs(self, n: int) -> int:
        if n <= 2:
            return n

        dp = [0] * (n + 1)

        one_before, two_before = 2, 1

        for i in range(3, n+1):
            current = one_before + two_before
            two_before = one_before
            one_before = current
        return one_before
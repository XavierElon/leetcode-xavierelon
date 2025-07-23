class Solution:
    def climbStairs(self, n: int) -> int:
        if n <= 2:
            return n

        one_step_before, two_steps_before = 2, 1

        for i in range(3, n + 1):
            current = one_step_before + two_steps_before
            two_steps_before = one_step_before
            one_step_before = current

        return one_step_before
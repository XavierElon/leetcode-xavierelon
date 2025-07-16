class Solution:
    def missingNumber(self, arr: List[int]) -> int:
        n = len(arr)

        expected_sum = n * (n + 1) // 2

        actual_sum = sum(arr)

        return expected_sum - actual_sum
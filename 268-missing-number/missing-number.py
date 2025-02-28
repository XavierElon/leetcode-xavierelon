class Solution:
    def missingNumber(self, arr: List[int]) -> int:
        num_set = set(arr)
        n = len(arr) + 1

        for number in range(n):
            if number not in num_set:
                return number
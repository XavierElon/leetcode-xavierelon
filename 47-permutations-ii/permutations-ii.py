class Solution:
    def permuteUnique(self, nums: List[int]) -> List[List[int]]:
        def backtrack(counter, current):
            if len(current) == len(nums):
                res.append(current.copy())

            for num in counter:
                if counter[num] > 0:
                    current.append(num)
                    counter[num] -= 1
                    backtrack(counter, current)
                    current.pop()
                    counter[num] += 1

        res = []
        backtrack(Counter(nums), [])
        return res
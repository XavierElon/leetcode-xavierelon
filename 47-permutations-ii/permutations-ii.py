class Solution:
    def permuteUnique(self, nums: List[int]) -> List[List[int]]:
        
        def backtrack(counter, path):
            if len(path) == len(nums):
                res.append(path.copy())
                return
            for num in counter:
                if counter[num] > 0:
                    counter[num] -= 1
                    path.append(num)
                    backtrack(counter, path)
                    path.pop()
                    counter[num] += 1

        res = []
        backtrack(Counter(nums), [])
        return res
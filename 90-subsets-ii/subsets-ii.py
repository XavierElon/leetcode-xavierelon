class Solution:
    def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:
        res = []
        nums.sort()
        
        def backtrack(start, curr_subset):
            res.append(curr_subset[:])
            for i in range(start, len(nums)):
                if i > start and nums[i] == nums[i - 1]:
                    continue
                curr_subset.append(nums[i])
                backtrack(i + 1, curr_subset)
                curr_subset.pop()

        backtrack(0, [])
        return res
            
class Solution:
    def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        res = []
        self.backtrack(0, [], nums, res)
        return res

    def backtrack(self, i: int, current_subset: List[int], nums: List[int], res: List[List[int]]):
        if i == len(nums):
            res.append(current_subset.copy())
            return

        current_subset.append(nums[i])
        self.backtrack(i+1, current_subset, nums, res)
        current_subset.pop()

        while i + 1 < len(nums) and nums[i] == nums[i+1]:
            i += 1
        self.backtrack(i + 1, current_subset, nums, res)
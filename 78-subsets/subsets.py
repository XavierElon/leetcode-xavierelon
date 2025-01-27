class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        res = []
        self.backtrack(0, [], nums, res)
        return res

    def backtrack(self, i: int, current_subset: List[int], nums: List[int], res: List[List[int]]) -> None:
        if i == len(nums):
            res.append(current_subset.copy())
            return
        
        current_subset.append(nums[i])
        self.backtrack(i+1, current_subset, nums, res)
        current_subset.pop()
        self.backtrack(i+1, current_subset, nums, res)
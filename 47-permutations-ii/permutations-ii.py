class Solution:
    def permuteUnique(self, nums: List[int]) -> List[List[int]]:
        res = []
        nums.sort()
        used = [False] * len(nums)
        self.backtrack(nums, [], used, res)
        return res

    def backtrack(self, nums, path, used, res):
        if len(path) == len(nums):
            res.append(path.copy())
            return

        for i in range(len(nums)):
            if used[i]:
                continue

            if i > 0 and nums[i] == nums[i-1] and not used[i-1]:
                continue

            used[i] = True
            path.append(nums[i])
            self.backtrack(nums, path, used, res)
            used[i] = False
            path.pop()
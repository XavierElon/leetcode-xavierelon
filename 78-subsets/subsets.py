class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        res = []

        def dfs(path, idx):
            if (idx == len(nums)):
                res.append(path)
            else:
                dfs(path.copy(), idx + 1)
                path.append(nums[idx])
                dfs(path.copy(), idx + 1)

        dfs([], 0)
        return res
class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        res = []
        self.backtrack(nums, [], set(), res)
        return res

    def backtrack(self, nums: List[int], candidate: List[int], used: Set[int], res: List[List[int]]) -> None:
        if len(candidate) == len(nums):
            res.append(candidate.copy())
            return

        for num in nums:
            if num not in used:
                candidate.append(num)
                used.add(num)
                self.backtrack(nums, candidate, used, res)
                candidate.pop()
                used.remove(num)
                
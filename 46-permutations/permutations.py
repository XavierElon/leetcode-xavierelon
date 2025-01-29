class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        res = []
        self.backtrack(nums, [], set(), res)
        return res

    def backtrack(self, nums: List[int], current: List[int], used: Set[int], res: List[List[int]]) -> None:
        if len(current) == len(nums):
            res.append(current.copy())
            return

        for num in nums:
            if num not in used:
                used.add(num)
                current.append(num)

                self.backtrack(nums, current, used, res)

                used.remove(num)
                current.pop()
        
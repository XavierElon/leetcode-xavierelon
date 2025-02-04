class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        def backtrack(current, used) -> None:
            if len(current) == len(nums):
                res.append(current.copy())
                return

            for num in nums:
                if num not in used:
                    current.append(num)
                    used.add(num)
                    backtrack(current, used)
                    current.pop()
                    used.remove(num)

        res = []
        backtrack([], set())
        return res
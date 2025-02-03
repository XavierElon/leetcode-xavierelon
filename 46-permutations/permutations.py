class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        res = []

        def backtrack(nums, res, current, used) -> None:
            if len(current) == len(nums):
                res.append(current.copy())
                return

            for num in nums:
                if num not in used:
                    used.add(num)
                    current.append(num)

                    backtrack(nums, res, current, used)
                    used.remove(num)
                    current.pop()
        
        backtrack(nums, res, [], set())
        return res

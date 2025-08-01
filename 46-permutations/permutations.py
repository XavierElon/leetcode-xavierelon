class Solution:
    def permute(self, nums):
        

        def backtrack(nums, candidate, used, res):
            if len(candidate) == len(nums):
                res.append(candidate[:])
                return

            for num in nums:
                if num not in used:
                    candidate.append(num)
                    used.add(num)

                    backtrack(nums, candidate, used, res)

                    candidate.pop()
                    used.remove(num)

        res = []
        backtrack(nums, [], set(), res)
        return res
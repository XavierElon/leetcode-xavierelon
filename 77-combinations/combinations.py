class Solution:
    def combine(self, n: int, k: int) -> List[List[int]]:
        ans = []

        def backtrack(curr: List[int], first_num: int) -> None:
            if len(curr) == k:
                ans.append(curr.copy())
                return

            for num in range(first_num, n + 1):
                curr.append(num)

                backtrack(curr, num+1)

                curr.pop()

        backtrack([], 1)
        return ans
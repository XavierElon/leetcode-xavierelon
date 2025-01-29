class Solution:
    def combine(self, n: int, k: int) -> List[List[int]]:
        res = []

        def backtrack(start: int, current: List[int]) -> None:
            if len(current) == k:
                res.append(current.copy())
                return

            for i in range(start, n + 1):
                current.append(i)
                backtrack(i + 1, current)
                current.pop()
        
        backtrack(1, [])
        return res
class Solution:
    def maxLength(self, ribbons: List[int], k: int) -> int:
        start = 1
        end = max(ribbons)

        while start <= end:
            mid = (start + end) // 2
            res = 0

            for i in ribbons:
                res += i // mid
            if res >= k:
                start = mid + 1
            else:
                end = mid -1
        return end
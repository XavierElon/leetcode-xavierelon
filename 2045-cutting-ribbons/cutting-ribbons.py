class Solution:
    def maxLength(self, ribbons: List[int], k: int) -> int:
        low,high = 1, max(ribbons)
        ans = 0

        while low <= high:
            mid = (low + high) // 2
            count = 0

            for ribbon in ribbons:
                count += ribbon // mid

            if count >= k:
                ans = mid
                low = mid + 1
            else:
                high = mid - 1

        return ans


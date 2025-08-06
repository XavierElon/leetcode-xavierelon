class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        low, high = 1, max(piles)

        while low < high:
            mid = (low + high) // 2
            if self.canFinish(piles, mid, h):
                high = mid
            else:
                low = mid + 1

        return low

    def canFinish(self, piles, mid, h):
        hours = 0

        for pile in piles:
            hours += (pile + mid - 1) // mid

            if hours > h:
                return False

        return hours <= h
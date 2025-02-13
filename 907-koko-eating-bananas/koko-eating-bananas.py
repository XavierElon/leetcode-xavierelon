class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        low = 1
        high = max(piles)

        while low < high:
            mid = (low + high) // 2
            if self.can_finish(piles, mid, h):
                high = mid
            else:
                low = mid + 1

        return low


    def can_finish(self, piles, mid, h):
        hours = 0

        for pile in piles:
            hours += (pile + mid -1) // mid

            if hours > h:
                return False

        return hours <= h


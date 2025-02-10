class Solution:
    def shipWithinDays(self, weights: List[int], days: int) -> int:
        low, high = max(weights), sum(weights)

        def can_ship(capacity: int) -> bool:
            total, days_needed = 0, 1

            for weight in weights:
                if total + weight > capacity:
                    days_needed += 1
                    total = 0
                total += weight
            return days_needed <= days

        while low < high:
            mid = (low + high) // 2
            if can_ship(mid):
                high = mid
            else: 
                low = mid + 1
        
        return low
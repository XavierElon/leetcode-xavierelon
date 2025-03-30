class Solution:
    def checkSubarraySum(self, nums: List[int], k: int) -> bool:
        prefix_hash = defaultdict(int)
        current_sum = 0
        prefix_hash[0] = -1    

        for i, num in enumerate(nums):
            current_sum += num
            remainder = current_sum % k

            if remainder in prefix_hash and i - prefix_hash[remainder] >= 2:
                return True

            if remainder not in prefix_hash:
                prefix_hash[remainder] = i


        return False
class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        count = 0
        prefix_sum_map = defaultdict(int)
        prefix_sum_map[0] = 1
        curr_prefix_sum = 0

        for num in nums:
            curr_prefix_sum += num
            remainder = curr_prefix_sum - k
            if remainder in prefix_sum_map:
                count += prefix_sum_map[remainder]
            prefix_sum_map[curr_prefix_sum] += 1

        return count
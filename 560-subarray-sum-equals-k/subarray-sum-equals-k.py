class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        count = 0
        prefix_sum_map = {0: 1}
        curr_prefix_sum = 0

        for num in nums:
            curr_prefix_sum += num

            if curr_prefix_sum - k in prefix_sum_map:
                count += prefix_sum_map[curr_prefix_sum - k]
            freq = prefix_sum_map.get(curr_prefix_sum, 0)
            prefix_sum_map[curr_prefix_sum] = freq + 1

        return count
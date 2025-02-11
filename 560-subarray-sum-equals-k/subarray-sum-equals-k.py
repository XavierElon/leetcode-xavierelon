class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        count = 0
        prefix_sum = 0
        prefix_freq_map = {0: 1}

        for num in nums:
            prefix_sum += num
            if prefix_sum - k in prefix_freq_map:
                count += prefix_freq_map[prefix_sum - k]
            prefix_freq_map[prefix_sum] = prefix_freq_map.get(prefix_sum, 0) + 1

        return count
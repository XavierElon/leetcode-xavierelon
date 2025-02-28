class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        count = 0
        sum_ = 0
        prefix_counts = {0: 1}

        for num in nums:
            sum_ += num

            if sum_ - k in prefix_counts:
                count += prefix_counts[sum_ - k]

            prefix_counts[sum_] = prefix_counts.get(sum_, 0) + 1

        return count
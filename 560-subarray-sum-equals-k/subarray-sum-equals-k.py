class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        prefix_sums = defaultdict(int)
        current_sum = 0
        count = 0
        prefix_sums[0] = 1

        for num in nums:
            current_sum += num
            difference = current_sum - k
            count += prefix_sums[difference]
            prefix_sums[current_sum] += 1

        return count
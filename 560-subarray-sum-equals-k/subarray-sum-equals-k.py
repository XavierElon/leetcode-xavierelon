class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        count = 0
        prefix_sums = defaultdict(int)
        prefix_sums[0] = 1
        current_sum = 0

        for num in nums:
            current_sum += num
            difference = current_sum - k
            count += prefix_sums[difference]
            prefix_sums[current_sum] += 1

        return count
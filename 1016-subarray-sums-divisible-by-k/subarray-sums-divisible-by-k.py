class Solution:
    def subarraysDivByK(self, nums: List[int], k: int) -> int:
        count = 0
        current_sum = 0
        remainder_counts = defaultdict(int)
        remainder_counts[0] = 1

        for num in nums:
            current_sum += num
            remainder = current_sum % k

            count += remainder_counts[remainder]

            remainder_counts[remainder] += 1

        return count
class Solution:
    def checkSubarraySum(self, nums: List[int], k: int) -> bool:
        prefix_mod = defaultdict(int)
        prefix_mod[0] = -1
        current_sum = 0

        for i, num in enumerate(nums):
            current_sum += num
            mod = current_sum % k

            if mod in prefix_mod and i - prefix_mod[mod] >= 2:
                return True
            if mod not in prefix_mod:
                prefix_mod[mod] = i

        return False
class Solution:
    def maximumSubarraySum(self, nums: List[int], k: int) -> int:
        state = defaultdict(int)
        curr_sum = 0

        for i in range(k):
            curr_sum += nums[i]
            state[nums[i]] += 1

        max_sum = curr_sum if len(state) == k else 0

        for end in range(k, len(nums)):
            curr_sum += nums[end]
            state[nums[end]] += 1

            start = end - k
            curr_sum -= nums[start]
            state[nums[start]] -= 1

            if state[nums[start]] == 0:
                del state[nums[start]]

            if len(state) == k:
                max_sum = max(max_sum, curr_sum)

        return max_sum
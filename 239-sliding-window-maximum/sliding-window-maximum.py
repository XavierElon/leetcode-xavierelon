class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        if not nums or k == 0:
            return []

        res = []

        queue = deque()

        for i in range(len(nums)):
            if queue and queue[0] == i - k:
                queue.popleft()

            while queue and nums[queue[-1]] <= nums[i]:
                queue.pop()

            queue.append(i)

            if i >= k - 1:
                res.append(nums[queue[0]])

        return res

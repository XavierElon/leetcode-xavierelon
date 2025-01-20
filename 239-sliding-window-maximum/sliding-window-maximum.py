class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        res = []
        dq = deque()

        for right in range(len(nums)):
            if dq and dq[0] < right - k + 1:
                dq.popleft()
            
            while dq and nums[dq[-1]] <= nums[right]:
                dq.pop()
            
            dq.append(right)

            if right >= k - 1:
                res.append(nums[dq[0]])
        
        return res
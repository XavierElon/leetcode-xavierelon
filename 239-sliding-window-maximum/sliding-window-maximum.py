class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        res = []
        dq = deque()
        left = right = 0

        while right < len(nums):
            while dq and dq[-1][0] <= nums[right]:
                dq.pop()

            dq.append((nums[right], right))
            if right - left + 1 == k:
                if dq and dq[0][1] < left:
                    dq.popleft()

                res.append(dq[0][0])
                left += 1
            right += 1
        return res
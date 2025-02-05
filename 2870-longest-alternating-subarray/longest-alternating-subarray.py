class Solution:
    def alternatingSubarray(self, nums: List[int]) -> int:
        lth=len(nums)
        mx=left=0
        right=1
        while right<lth:
            diff=1
            while right<lth and nums[right]-nums[right-1]==diff:
                diff*=-1
                right+=1
            mx=max(mx,right-left)
            left+=1
            if left!=right:
                left=right-1
            right=left+1
        return mx if mx>1 else -1
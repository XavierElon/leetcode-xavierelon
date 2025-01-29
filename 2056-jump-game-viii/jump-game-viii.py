class Solution:
    def minCost(self, nums: List[int], costs: List[int]) -> int:
        # we maintain two monotonic stacks to keep the next largest element and the next smallest element
        # we are basically allowed to jump into either the next largest or the next smallest index
        # we will use a dp array to keep track of the costs so far
        smallStack = []
        largeStack = []
        dp = [0]*len(nums)

        for i in range(len(nums)-1, -1, -1):
            # cleanup stacks
            while smallStack and nums[smallStack[-1]] >= nums[i]:
                smallStack.pop()
            
            while largeStack and nums[largeStack[-1]] < nums[i]:
                largeStack.pop()

            nxtCost = []
            if largeStack:
                lid = largeStack[-1]
                nxtCost.append(dp[lid]+costs[lid])
            if smallStack:
                sid = smallStack[-1]
                nxtCost.append(dp[sid]+costs[sid])
            
            dp[i] = min(nxtCost) if nxtCost else 0
            largeStack.append(i)
            smallStack.append(i)
        return dp[0]
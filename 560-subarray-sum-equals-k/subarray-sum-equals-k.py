class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        count = 0
        prefixSum = 0
        prefixCount = {0: 1}

        for num in nums:
            prefixSum += num
            if prefixSum - k in prefixCount:
                count += prefixCount[prefixSum - k]
            prefixCount[prefixSum] = prefixCount.get(prefixSum, 0) + 1

        return count
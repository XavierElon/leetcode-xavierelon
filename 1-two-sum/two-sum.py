class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hashmap = {}

        for i, num in enumerate(nums):
            complement = target - nums[i]
            if complement in hashmap:
                return [hashmap[complement], i]
            
            hashmap[num] = i
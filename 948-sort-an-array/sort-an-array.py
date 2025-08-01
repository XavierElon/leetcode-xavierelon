class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        if not nums:
            return []

        min_val = min(nums)
        max_val = max(nums)

        # The size of the counts array is the range of the numbers
        counts = [0] * (max_val - min_val + 1)

        # Offset each number to fit into the counts array
        for num in nums:
            counts[num - min_val] += 1

        res = []
        # Reconstruct the sorted array
        for i, count in enumerate(counts):
            # Add the offset back to get the original number
            res.extend([i + min_val] * count)

        return res
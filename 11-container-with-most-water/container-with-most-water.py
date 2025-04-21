class Solution:
    def maxArea(self, heights: List[int]) -> int:
        l, r = 0, len(heights) - 1
        max_water = 0

        while l < r:
            min_height = min(heights[l], heights[r])
            water = min_height * (r - l)
            max_water = max(max_water, water)

            if heights[l] < heights[r]:
                l += 1
            else:
                r -= 1

        return max_water
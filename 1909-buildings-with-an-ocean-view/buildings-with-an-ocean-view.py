class Solution:
    def findBuildings(self, heights: List[int]) -> List[int]:
        n = len(heights)
        res = []
        max_height = 0

        for i in range(n-1, -1, -1):
            if heights[i] > max_height:
                max_height = heights[i]
                res.append(i)

        return res[::-1]
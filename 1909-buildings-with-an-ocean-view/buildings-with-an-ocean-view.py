class Solution:
    def findBuildings(self, heights: List[int]) -> List[int]:
        n = len(heights)
        result = []
        max_height = 0

        for i in range(n-1, -1, -1):
            if heights[i] > max_height:
                max_height = heights[i]
                result.append(i)
        
        return result[::-1]
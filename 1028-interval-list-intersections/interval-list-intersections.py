class Solution:
    def intervalIntersection(self, firstList: List[List[int]], secondList: List[List[int]]) -> List[List[int]]:
        if not firstList or not secondList:
            return []
            
        m, n = len(firstList), len(secondList)
        i = j = 0
        
        merged = []

        while i < m and j < n:
            first_interval = firstList[i]
            second_interval = secondList[j]

            start = max(first_interval[0], second_interval[0])
            end = min(first_interval[1], second_interval[1])

            if start <= end:
                merged.append([start, end])
            if first_interval[1] < second_interval[1]:
                i += 1
            else:
                j += 1


        return merged
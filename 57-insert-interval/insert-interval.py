class Solution:
    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
        result = []
        i = 0
        n = len(intervals)

        while i < n and intervals[i][1] < newInterval[0]:
            result.append(intervals[i])
            i += 1

        merged_interval = list(newInterval)
        while i < n and intervals[i][0] <= merged_interval[1]:
            merged_interval[0] = min(merged_interval[0], intervals[i][0])
            merged_interval[1] = max(merged_interval[1], intervals[i][1])
            i += 1

        result.append(merged_interval)

        while i < n:
            result.append(intervals[i])
            i += 1

        return result
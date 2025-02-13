class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        if len(intervals) == 1:
            return intervals

        intervals.sort(key = lambda x: x[0])
        index = 0

        for i in range(1, len(intervals)):
            if intervals[index][1] >= intervals[i][0]:
                intervals[index][1] = max(intervals[index][1], intervals[i][1])
            else:
                index += 1
                intervals[index] = intervals[i]

        return intervals[:index + 1]
class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        if len(intervals) == 1:
            return intervals

        intervals.sort(key = lambda x: x[0])

        merged = [intervals[0]]
        for interval in intervals:
            prev_interval = merged[-1]
            if prev_interval[1] >= interval[0]:
                merged[-1][1] = max(interval[1], prev_interval[1])
            else:
                merged.append(interval)

        return merged
class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        if len(intervals) == 0:
            return intervals

        intervals.sort(key=lambda x: x[0])

        merged = [intervals[0]]

        for interval in intervals:
            last_merged = merged[-1]

            if last_merged[1] >= interval[0]:
                last_merged[1] = max(last_merged[1], interval[1])
            else:
                merged.append(interval)

        return merged
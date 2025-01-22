class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        if len(intervals) == 1:
            return intervals

        intervals.sort(key=lambda x: x[0])

        res = []
        merged = [intervals[0]]

        for i in range(1, len(intervals)):
            last_merged = merged[-1]
            current_interval = intervals[i]

            if last_merged[1] >= current_interval[0]:
                last_merged[1] = max(last_merged[1], current_interval[1])
            else:
                merged.append(current_interval)

        return merged

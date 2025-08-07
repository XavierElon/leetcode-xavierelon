class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        if not intervals:
            return []

        n = len(intervals)
        intervals.sort(key=lambda x: x[0])
        merged = [intervals[0]]

        for i in range(1, n):
            prev_start, prev_end = merged[-1]
            curr_start, curr_end = intervals[i]

            if prev_end >= curr_start:
                end = max(prev_end, curr_end)
                merged[-1][1] = end
            else:
                merged.append(intervals[i])

        return merged

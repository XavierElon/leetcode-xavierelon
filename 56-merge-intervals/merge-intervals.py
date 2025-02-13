class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        if len(intervals) == 1:
            return intervals

        intervals.sort(key=lambda x: x[0])

        merged = [intervals[0]]
        print(merged)

        for interval in intervals:
            prev_inter = merged[-1]
            print(prev_inter)

            if prev_inter[1] >= interval[0]:
                merged[-1] = [prev_inter[0], max(prev_inter[1], interval[1])]
            else:
                merged.append(interval)

        return merged
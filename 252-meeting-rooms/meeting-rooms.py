class Solution:
    def canAttendMeetings(self, intervals: List[List[int]]) -> bool:
        if not intervals or len(intervals) == 0:
            return True

        intervals.sort()

        for i in range(1, len(intervals)):
            if intervals[i-1][1] > intervals[i][0]:
                return False

        return True
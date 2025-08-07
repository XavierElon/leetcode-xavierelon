class Solution:
    def minMeetingRooms(self, intervals: List[List[int]]) -> int:
        if not intervals:
            return 0

        start_times = sorted(i[0] for i in intervals)
        end_times = sorted(i[1] for i in intervals)

        rooms = 0
        max_rooms = 0
        end_ptr = 0

        for start_time in start_times:
            rooms += 1

            if start_time >= end_times[end_ptr]:
                rooms -= 1
                end_ptr += 1

            max_rooms = max(max_rooms, rooms)

        return max_rooms
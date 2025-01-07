/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    if (!intervals || intervals.length === 0) return true

    intervals.sort((a, b) => a[0] - b[0])

    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i-1][1] > intervals[i][0]) {
            return false
        }
    }

    return true
};
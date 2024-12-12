/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    if (intervals.length === 1) return 0

    intervals.sort((a, b) => a[0] - b[0])
    let prevEnd = intervals[0][1]
    let count = 0

    for (let i = 1; i < intervals.length; i++) {
        if (prevEnd > intervals[i][0]) {
            count++
            prevEnd = Math.min(prevEnd, intervals[i][1])
        } else {
            prevEnd = intervals[i][1]
        }
    }

    return count
};
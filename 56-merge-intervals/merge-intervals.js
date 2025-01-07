/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length <= 1) return intervals

    intervals.sort((a,b) => a[0] - b[0])

    let writeIndex = 0

    for (let i = 1; i < intervals.length; i++) {
        if (intervals[writeIndex][1] >= intervals[i][0]) {
            intervals[writeIndex][1] = Math.max(intervals[writeIndex][1], intervals[i][1])
        } else {
            writeIndex++
            intervals[writeIndex] = intervals[i]
        }
    }

    intervals.length = writeIndex + 1

    return intervals
};

/*
[[1,2], [3,4],[4,5],[5,6]]
*/
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    if (intervals.length === 0) return [newInterval]

    const merged = []
    let i = 0
    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
        merged.push(intervals[i++])
    }

    let mergedInterval = newInterval
    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
        mergedInterval = [
            Math.min(intervals[i][0], mergedInterval[0]),
            Math.max(intervals[i][1], mergedInterval[1])
        ]
        i++
    }
    merged.push(mergedInterval)

    while (i < intervals.length) {
        merged.push(intervals[i++])
    }

    return merged
};
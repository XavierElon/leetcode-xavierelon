/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    if (intervals.length === 0) return [newInterval]
    
    let inserted = false
    const merged = []
    intervals.sort((a, b) => a[0] - b[0])

    for (let i = 0; i < intervals.length; i++) {
        const current = intervals[i]

        if (current[1] < newInterval[0]) {
            merged.push(current)
        } else if (current[0] > newInterval[1]) {
            if (!inserted) {
                merged.push(newInterval)
                inserted = true
            }
            merged.push(current)
        } else {
            newInterval = [
                Math.min(current[0], newInterval[0]),
                Math.max(current[1], newInterval[1])
            ]
        }
    }

    if (!inserted) {
        merged.push(newInterval)
    }

    return merged
};
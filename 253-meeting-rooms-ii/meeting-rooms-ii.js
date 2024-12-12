/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    if (intervals.length === 1) return 1

    const starts = intervals.map(start => start[0])
    const ends = intervals.map(end => end[1])
    starts.sort((a, b) => a - b)
    ends.sort((a, b) => a - b)

    let rooms = 0
    let endPtr = 0
    
    for (let startPtr = 0; startPtr < starts.length; startPtr++) {
        if (starts[startPtr] >= ends[endPtr]) {
            rooms--
            endPtr++
        }
        rooms++
    }
    return rooms
};
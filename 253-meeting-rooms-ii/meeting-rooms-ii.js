/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0])

    let rooms = [intervals[0]]
    console.log(rooms)

    for (let i = 1; i < intervals.length; i++) {
        let room = getEarliestRoom(rooms)
        console.log(room)
        let current = intervals[i]

        if (room[1] <= current[0]) {
            room[1] = current[1]
        } else {
            rooms.push(current)
        }
    }
    return rooms.length
};

const getEarliestRoom = (room) => {
    room.sort((a, b) => a[1] - b[1])
    return room[0]
}
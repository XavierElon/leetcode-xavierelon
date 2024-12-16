/**
 * @param {number[][]} events
 * @return {number}
 */
var buttonWithLongestTime = function (events) {
    let map = new Map();
    let prev = 0;
    for (let i = 0; i < events.length; i++) {
        map.set(events[i][0], Math.max((map.get(events[i][0]) || 0), events[i][1] - prev));
        prev = events[i][1];
    }
   //console.log(map)
    return [...map].sort((a, b) => b[1] - a[1] || a[0] - b[0])[0][0];
};
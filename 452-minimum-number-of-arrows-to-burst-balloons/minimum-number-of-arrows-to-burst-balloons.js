/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    if (points.length === 0) return 0
    if (points.length === 1) return 1

    let arrows = 1
    points.sort((a, b) => a[0] - b[0])
    let currentEnd = points[0][1]

    for (let i = 1;i < points.length; i++) {
        if (currentEnd < points[i][0]) {
            arrows++
            currentEnd = points[i][1]
        } else {
            currentEnd = Math.min(currentEnd, points[i][1])
        }
    }

    return arrows
};
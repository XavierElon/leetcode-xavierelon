/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
    if (!rooms || !rooms.length || !rooms[0].length) return

    const m = rooms.length
    const n = rooms[0].length

    const queue = []

    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (rooms[row][col] === 0) {
                queue.push([row, col])
            }
        }
    }

    const directions = [[-1,0], [0,1], [1,0], [0,-1]]

    while (queue.length > 0) {
        const [row, col] = queue.shift()

        for (const [dx, dy] of directions) {
            const newRow = row + dx
            const newCol = col + dy

            if (newRow >= 0 && newRow < m && newCol >= 0 && newCol < n && rooms[newRow][newCol] === 2147483647) {
                rooms[newRow][newCol] = rooms[row][col] + 1
                queue.push([newRow, newCol])
            }
        }
    }
};
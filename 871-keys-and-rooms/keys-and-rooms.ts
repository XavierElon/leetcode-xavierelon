function canVisitAllRooms(rooms: number[][]): boolean {
    const n: number = rooms.length
    const visited: boolean[] = new Array(n).fill(false)
    const queue: number[] = [0]
    visited[0] = true
    let visitedCount: number = 1

    while (queue.length > 0) {
        const currentRoom = queue.shift() as number

        for (const key of rooms[currentRoom]) {
            if (!visited[key]) {
                visited[key] = true
                queue.push(key)
                visitedCount++
            }
        }
    }

    return visitedCount === n
};
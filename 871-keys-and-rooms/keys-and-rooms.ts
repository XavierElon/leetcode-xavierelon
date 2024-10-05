function canVisitAllRooms(rooms: number[][]): boolean {
    const n: number = rooms.length
    const visited: boolean[] = new Array(n).fill(false)
    const queue: number[] = [0]
    visited[0] = true

    while (queue.length > 0) {
        const currentRoom = queue.shift()

        for (const key of rooms[currentRoom]) {
            if (!visited[key]) {
                visited[key] = true
                queue.push(key)
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (!visited[i]) return false
    }
    return true
};
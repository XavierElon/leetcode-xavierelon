function canVisitAllRooms(rooms: number[][]): boolean {
    const visited: boolean[] = new Array(rooms.length).fill(false)
    let count: number = 0

    function dfs(room: number): void {
        visited[room] = true
        count++
        for (const key of rooms[room]) {
            if (!visited[key]) dfs(key)
        }
    }

    dfs(0)
    return count === rooms.length
};
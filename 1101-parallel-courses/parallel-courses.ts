function minimumSemesters(n: number, relations: number[][]): number {
    const graph: number[][] = Array.from({ length: n + 1 }, () => [])
    const inDegree: number[] = new Array(n + 1).fill(0)
    const queue: number[] = []
    let semesters: number = 0
    let coursesTaken: number = 0

    for (const [prev, next] of relations) {
        graph[prev].push(next)
        inDegree[next]++
    }

    for (let i = 1; i <= n; i++) {
        if (inDegree[i] === 0) queue.push(i)
    }

    while (queue.length > 0) {
        const levelSize: number = queue.length
        semesters++

        for (let i = 0; i < levelSize; i++) {
            const course: number = queue.shift()
            coursesTaken++

            for (const nextCourse of graph[course]) {
                inDegree[nextCourse]--
                if (inDegree[nextCourse] === 0) {
                    queue.push(nextCourse)
                }
            }
        }
    }

    return coursesTaken === n ? semesters : -1
};
function minimumTime(n: number, relations: number[][], time: number[]): number {
    const graph: number[][] = Array.from({ length: n }, () => [])
    const inDegree: number[] = new Array(n).fill(0)
    const queue: number[] = []

    for (const [prev, next] of relations) {
        graph[prev - 1].push(next - 1)
        inDegree[next - 1]++
    }

    const dp: number[] = [...time]

    for (let i = 0; i < n; i++) {
        if (inDegree[i] === 0) {
            queue.push(i)
        }
    }

    while (queue.length > 0) {
        const course = queue.shift()
        for (const nextCourse of graph[course]) {
            dp[nextCourse] = Math.max(dp[nextCourse], dp[course] + time[nextCourse])
            inDegree[nextCourse]--
            if (inDegree[nextCourse] === 0) {
                queue.push(nextCourse)
            }
        }
    }
    
    return Math.max(...dp)

};
function minimumTime(n: number, relations: number[][], time: number[]): number {
    const graph: number[][] = Array.from({ length: n }, () => [])
    const indegree: number[] = new Array(n).fill(0)
    const dp: number[] = [...time]
    const queue: number[] = []

    for (let [prev, next] of relations) {
         graph[prev-1].push(next - 1)
         indegree[next-1]++
    }

    for (let i = 0; i < n; i++) {
        if (indegree[i] === 0) queue.push(i)
    }

    while (queue.length > 0) {
        const course = queue.shift()
        for (const nextCourse of graph[course]) {
            dp[nextCourse] = Math.max(dp[nextCourse], dp[course] + time[nextCourse])
            indegree[nextCourse]--
            if (indegree[nextCourse] === 0) queue.push(nextCourse)
        }
    }

    return Math.max(...dp)
};
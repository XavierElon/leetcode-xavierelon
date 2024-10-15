function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    if (numCourses === 0) return []
    const indegree: number[] = new Array(numCourses).fill(0)
    const adjList: number[][] = Array.from({ length: numCourses }, () => [])
    const queue: number[] = []
    const result: number[] = []

    for (const [course, prereq] of prerequisites) {
        indegree[course]++
        adjList[prereq].push(course)
    }

    for (let i = 0; i < numCourses; i++) {
        if (indegree[i] === 0) {
            queue.push(i)
            result.push(i)
        }
    }

    while (queue.length > 0) {
        const course: number = queue.shift()
        for (const nextCourse of adjList[course]) {
            indegree[nextCourse]--
            if (indegree[nextCourse] === 0) {
                queue.push(nextCourse)
                result.push(nextCourse)
            }
        }
    }

    return result.length === numCourses ? result : []
}; 
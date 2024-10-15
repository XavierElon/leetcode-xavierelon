function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const indegree: number[] = new Array(numCourses).fill(0)
    const adjList: number[][] = Array.from({ length: numCourses}, () => [])
    const queue: number[] = []
    let count: number = 0

    for (const [course, prereq] of prerequisites) {
        indegree[course]++
        adjList[prereq].push(course)
    }

    for (let i = 0; i < numCourses; i++) {
        if (indegree[i] === 0) {
            queue.push(i)
        }
    }

    while (queue.length > 0) {
        const course: number = queue.shift()
        count++
        for (let nextCourse of adjList[course]) {
            indegree[nextCourse]--
            if (indegree[nextCourse] === 0) {
                queue.push(nextCourse)
            }
        }
    }

    return count === numCourses
};
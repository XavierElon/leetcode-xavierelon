/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const indegrees = new Array(numCourses).fill(0)
    const adjList = new Array(numCourses).fill(null).map(() => [])

    for (const [course, prereq] of prerequisites) {
        indegrees[course]++
        adjList[prereq].push(course)
    }

    const queue = []
    let count = 0

    for (let i = 0; i < numCourses; i++) {
        if (indegrees[i] === 0) {
            queue.push(i)
            count++
        }
    }

    while (queue.length > 0) {
        const course = queue.shift()
        for (const nextCourse of adjList[course]) {
            indegrees[nextCourse]--
            if (indegrees[nextCourse] === 0) {
                queue.push(nextCourse)
                count++
            }
        }
    }

    return count === numCourses
};
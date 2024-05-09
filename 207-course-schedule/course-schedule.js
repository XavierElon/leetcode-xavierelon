/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const indegree = new Array(numCourses).fill(0)
    const adjList = new Array(numCourses).fill(null).map(() => [])

    for (const [course, prereq] of prerequisites) {
        indegree[course]++
        adjList[prereq].push(course)
    }

    const queue = []

    for (let i = 0; i < numCourses; i++) {
        if (indegree[i] === 0) {
            queue.push(i)
        }
    }

    let count = 0
    
    while (queue.length > 0) {
        const course = queue.shift()
        count++
        for (const nextCourse of adjList[course]) {
            indegree[nextCourse]--
            if (indegree[nextCourse] === 0) {
                queue.push(nextCourse)
            }
        }
    }

    return count === numCourses
};
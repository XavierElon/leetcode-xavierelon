/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const indegree = new Array(numCourses).fill(0)

    for (const [course, prereq] of prerequisites) {
        indegree[course]++
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

        for (const [c, p] of prerequisites) {
            if (p === course) {
                indegree[c]--
                if (indegree[c] === 0) {
                    queue.push(c)
                }
            }
        }
    }
    return count === numCourses
};
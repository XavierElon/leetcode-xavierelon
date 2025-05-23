/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const indegree = new Array(numCourses).fill(0)
    const adjList = new Array(numCourses).fill(null).map(() => [])

    for (const [course, prereq] of prerequisites) {
        indegree[course]++
        adjList[prereq].push(course)
    }

    const queue = []
    const order = []
    for (let i = 0; i < numCourses; i++) {
        if (indegree[i] === 0) {
            order.push(i)
            queue.push(i)
        }
    }    

    while (queue.length > 0) {
        const course = queue.shift()

        for (nextCourse of adjList[course]) {
            indegree[nextCourse]--
            if (indegree[nextCourse] === 0) {
                queue.push(nextCourse)
                order.push(nextCourse)
            }
        }
    }

    return order.length === numCourses ? order : []
};
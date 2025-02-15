class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        indegree = [0] * numCourses
        adj_list = [[] for _ in range(numCourses)]
        count = 0
         
        for course, prereq in prerequisites:
            indegree[course] += 1
            adj_list[prereq].append(course)

        queue = deque([i for i in range(numCourses) if indegree[i] == 0])

        while queue:
            current = queue.popleft()
            count += 1
            for nextCourse in adj_list[current]:
                indegree[nextCourse] -= 1
                if indegree[nextCourse] == 0:
                    queue.append(nextCourse)
        
        return count == numCourses
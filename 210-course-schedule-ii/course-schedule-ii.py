class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        indegree = [0 for i in range(numCourses)]
        adj_list = [[] for _ in range(numCourses)]
        res = []

        for course, prereq in prerequisites:
            indegree[course] += 1
            adj_list[prereq].append(course)

        queue = deque()

        for i in range(numCourses):
            if indegree[i] == 0:
                queue.append(i)

        while queue:
            current = queue.popleft()
            res.append(current)
            for next_course in adj_list[current]:
                indegree[next_course] -= 1
                if indegree[next_course] == 0:
                    queue.append(next_course)

        return res if len(res) == numCourses else []
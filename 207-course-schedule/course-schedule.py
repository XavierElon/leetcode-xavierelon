class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        indegree = [0] * numCourses
        adj_list = [[] for _ in range(numCourses)]

        for course, prereq in prerequisites:
            indegree[course] += 1
            adj_list[prereq].append(course)

        queue = deque([i for i in range(numCourses) if indegree[i] == 0])

        count = 0

        while queue:
            course = queue.popleft()
            count += 1

            for next_course in adj_list[course]:
                indegree[next_course] -= 1
                if indegree[next_course] == 0:
                    queue.append(next_course)

        return count == numCourses
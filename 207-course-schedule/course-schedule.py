class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        indegree = [0] * numCourses
        adj_list = [[] for _ in range(numCourses)]
        count = 0

        for prereq, course in prerequisites:
            indegree[course] += 1
            adj_list[prereq].append(course)

        queue = deque()

        for i in range(numCourses):
            if indegree[i] == 0:
                queue.append(i)
                count += 1

        while queue:
            current = queue.popleft()

            for course in adj_list[current]:
                indegree[course] -= 1
                if indegree[course] == 0:
                    queue.append(course)
                    count += 1

        return count == numCourses
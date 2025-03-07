class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        indegree = [0] * numCourses
        adj_list =[[] for _ in range(numCourses)]
        count = 0

        for prereq, course in prerequisites:
            indegree[course] += 1
            adj_list[prereq].append(course)

        queue = deque()

        for i in range(numCourses):
            if indegree[i] == 0:
                count += 1
                queue.append(i)

        while queue:
            current = queue.popleft()

            for course in adj_list[current]:
                indegree[course] -= 1
                if indegree[course] == 0:
                    count += 1
                    queue.append(course)

        return count == numCourses
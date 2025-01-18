class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        indegree = [0] * numCourses
        adj_list = [[] for _ in range(numCourses)]

        for course, prereq in prerequisites:
            indegree[course] += 1
            adj_list[prereq].append(course)

        queue = deque()
        order = []

        for i in range(numCourses):
            if indegree[i] == 0:
                queue.append(i)
                order.append(i)

        while queue:
            current = queue.popleft()

            for next_course in adj_list[current]:
                indegree[next_course] -= 1
                if indegree[next_course] == 0:
                    queue.append(next_course)
                    order.append(next_course)

        return order if len(order) == numCourses else []
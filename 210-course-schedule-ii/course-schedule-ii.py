class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        indegree = [0] * numCourses
        graph = defaultdict(list)
        order = []

        for course, prereq in prerequisites:
            indegree[course] += 1
            graph[prereq].append(course)

        queue = deque()

        for i in range(numCourses):
            if indegree[i] == 0:
                queue.append(i)

        while queue:
            current = queue.popleft()
            order.append(current)

            for next_course in graph[current]:
                indegree[next_course] -= 1
                if indegree[next_course] == 0:
                    queue.append(next_course)
        
        return order if len(order) == numCourses else []
class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        adj_list = [[] for _ in range(numCourses)]
        for course, prereq in prerequisites:
            adj_list[prereq].append(course)

        state = [0] * numCourses

        def dfs(course):
            if state[course] == 1:
                return False
            if state[course] == 2:
                return True

            state[course] = 1

            for neighbor in adj_list[course]:
                if not dfs(neighbor):
                    return False
            
            state[course] = 2
            return True

        for i in range(numCourses):
            if state[i] == 0:
                if not dfs(i):
                    return False

        return True
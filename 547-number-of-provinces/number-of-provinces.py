class Solution:
    def findCircleNum(self, isConnected: List[List[int]]) -> int:
        n = len(isConnected)
        visited = set()
        count = 0

        def dfs(node):
            for neighbor in range(n):
                if isConnected[node][neighbor] == 1 and neighbor not in visited:
                    visited.add(neighbor)
                    dfs(neighbor)

        for i in range(n):
            if i not in visited:
                visited.add(i)
                count += 1
                dfs(i)

        return count
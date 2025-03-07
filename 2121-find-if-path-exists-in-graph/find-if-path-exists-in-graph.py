class Solution:
    def validPath(self, n: int, edges: List[List[int]], source: int, destination: int) -> bool:
        if source == destination:
            return True

        graph = [[] for _ in range(n)]

        for u, v in edges:
            graph[u].append(v)
            graph[v].append(u)

        visited = set()

        def dfs(current):
            if current == destination:
                return True

            visited.add(current)

            for neighbor in graph[current]:
                if neighbor not in visited:
                    if dfs(neighbor):
                        return True

            return False

        return dfs(source)
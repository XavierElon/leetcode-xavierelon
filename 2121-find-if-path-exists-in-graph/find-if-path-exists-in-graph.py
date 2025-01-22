class Solution:
    def validPath(self, n: int, edges: List[List[int]], source: int, destination: int) -> bool:
        if source == destination:
            return True

        graph =[[] for _ in range(n)]

        for u, v in edges:
            graph[u].append(v)
            graph[v].append(u)

        queue = deque([source])
        visited = set()
        visited.add(source)

        while queue:
            current = queue.popleft()
            if current == destination:
                return True

            for neighbor in graph[current]:
                if neighbor not in visited:
                    queue.append(neighbor)
                    visited.add(neighbor)

        return False
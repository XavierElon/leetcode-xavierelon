class Solution:
    def validPath(self, n: int, edges: List[List[int]], source: int, destination: int) -> bool:
        if source == destination:
            return True

        adj_list = [[] for _ in range(n)]

        for u, v in edges:
            adj_list[u].append(v)
            adj_list[v].append(u)

        visited = set()
        queue = deque([source])

        while queue:
            current = queue.popleft()
            if current == destination:
                return True
            
            for node in adj_list[current]:
                if node not in visited:
                    queue.append(node)
                    visited.add(node)


        return False
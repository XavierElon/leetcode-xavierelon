class Solution:
    def isBipartite(self, graph: List[List[int]]) -> bool:
        n, color = len(graph), {}

        for i in range(n):
            if i not in color:
                color[i] = 1
                queue = collections.deque([i])
                
                while queue:
                    u = queue.popleft()
                    for v in graph[u]:
                        if v not in color:
                            color[v] = -color[u]
                            queue.append(v)
                        elif color[v] == color[u]:
                            return False

        return True
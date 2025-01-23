class Solution:
    def isBipartite(self, graph: List[List[int]]) -> bool:
        colors = [0] * len(graph)

        for i in range(len(graph)):
            if colors[i] == 0 and not self.dfs(i, 1, graph, colors):
                return False
        return True

    def dfs(self, node: int, color: int, graph: List[List[int]], colors: List[int]) -> bool:
        colors[node] = color

        for neighbor in graph[node]:
            if colors[neighbor] == color:
                return False
            
            if (colors[neighbor] == 0 and not self.dfs(neighbor, -color, graph, colors)):
                return False
        return True
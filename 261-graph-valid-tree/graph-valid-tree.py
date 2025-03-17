class Solution:
    def validTree(self, n: int, edges: List[List[int]]) -> bool:
        adj_list = [[] for _ in range(n)]
        for u, v in edges:
            adj_list[u].append(v)
            adj_list[v].append(u)

        visited = [False] * n
        if self.hasCycle(adj_list, 0, visited,  -1):
            return False
        
        return all(visited)

    def hasCycle(self, adj_list, node, visited, parent):
        visited[node] = True
        for neighbor in adj_list[node]:
            if visited[neighbor] and parent != neighbor:
                return True
            elif not visited[neighbor] and self.hasCycle(adj_list, neighbor, visited, node):
                return True
        
        return False
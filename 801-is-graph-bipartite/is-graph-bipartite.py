class Solution:
    def isBipartite(self, graph: List[List[int]]) -> bool:
        visited = [False] * len(graph)
        node_color = [False] * len(graph)  # False and True represent two colors

        queue = deque()

        for i in range(len(graph)):
            # If the node is already visited or has no neighbors, skip it
            if visited[i] or not graph[i]:
                continue

            # Start BFS from node i
            queue.append(i)
            visited[i] = True
            node_color[i] = True  # Assign the first color

            while queue:
                node = queue.popleft()
                current_color = node_color[node]

                for neighbor in graph[node]:
                    if not visited[neighbor]:
                        queue.append(neighbor)
                        visited[neighbor] = True
                        node_color[neighbor] = not current_color  # Assign opposite color
                    else:
                        if node_color[neighbor] == current_color:
                            return False  # Found same color on adjacent nodes

        return True  # All nodes processed without conflicts
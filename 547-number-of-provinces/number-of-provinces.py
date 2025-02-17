class Solution:
    def findCircleNum(self, isConnected: List[List[int]]) -> int:
        n = len(isConnected)
        visited = set()
        count = 0

        def bfs(start):
            queue = deque([start])

            while queue:
                current = queue.popleft()
                visited.add(current)

                for neighbor in range(n):
                    if isConnected[current][neighbor] == 1 and neighbor not in visited:
                        visited.add(neighbor)
                        queue.append(neighbor)
        
        for i in range(n):
            if i not in visited:
                count += 1
                bfs(i)

        return count

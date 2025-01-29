class Solution:
    def minJumps(self, arr: List[int]) -> int:
        n = len(arr)
        if n <= 1:
            return 0
            
        # Create graph of same-value indices
        graph = defaultdict(list)
        for i in range(n):
            graph[arr[i]].append(i)
            
        # BFS queue stores (index, steps)
        queue = deque([(0, 0)])
        visited = {0}
        
        while queue:
            index, steps = queue.popleft()
            
            # If we reached the last index, return steps
            if index == n - 1:
                return steps
            
            # Try all three possible jumps:
            # 1. Jump to same value indices
            for next_idx in graph[arr[index]]:
                if next_idx not in visited:
                    visited.add(next_idx)
                    queue.append((next_idx, steps + 1))
            # Clear the list of same-value indices to prevent revisiting
            graph[arr[index]].clear()
            
            # 2. Jump to index + 1
            if index + 1 < n and index + 1 not in visited:
                visited.add(index + 1)
                queue.append((index + 1, steps + 1))
            
            # 3. Jump to index - 1
            if index - 1 >= 0 and index - 1 not in visited:
                visited.add(index - 1)
                queue.append((index - 1, steps + 1))
        
        return -1  # Should never reach here given constraints
"""
# Definition for a Node.
class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []
"""

from typing import Optional
class Solution:
    def cloneGraph(self, node: Optional['Node']) -> Optional['Node']:
        if not node:
            return node

        visited = {}
        queue = deque([node])
        clone = Node(node.val)
        visited[node] = clone

        while queue:
            current = queue.popleft()

            for neighbor in current.neighbors:
                if neighbor not in visited:
                    queue.append(neighbor)
                    visited[neighbor] = Node(neighbor.val)
                visited[current].neighbors.append(visited[neighbor])

        return clone
                    
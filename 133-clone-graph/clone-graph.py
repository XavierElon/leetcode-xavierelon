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

        queue = deque([node])
        visited = {}
        clone = Node(node.val)
        visited[node] = clone

        while queue:
            node = queue.popleft()

            for neighbor in node.neighbors:
                if neighbor not in visited:
                    queue.append(neighbor)
                    visited[neighbor] = Node(neighbor.val)
                visited[node].neighbors.append(visited[neighbor])

        return clone
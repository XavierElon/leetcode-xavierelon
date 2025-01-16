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

        def bfs(node):
            if node in visited:
                return visited[node]

            clone = Node(node.val, [])
            visited[node] = clone

            clone.neighbors = [bfs(neighbor) for neighbor in node.neighbors]

            return clone

        return bfs(node)
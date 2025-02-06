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
            return None

        visited = {}

        def dfs(node):
            if not node:
                return None

            clone = Node(node.val, [])
            visited[node] = clone

            for neighbor in node.neighbors:
                if neighbor in visited:
                    visited[node].neighbors.append(visited[neighbor])
                else:
                    visited[node].neighbors.append(dfs(neighbor))

            return clone

        return dfs(node)
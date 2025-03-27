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

        def dfs(node):
            clone = Node(node.val)
            visited[node] = clone

            for neighbor in node.neighbors:
                if neighbor not in visited:
                    clone.neighbors.append(dfs(neighbor))
                else:
                    clone.neighbors.append(visited[neighbor])        
            
            return clone

        return dfs(node)
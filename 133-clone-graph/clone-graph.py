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
        def dfs(node, old_to_new):
            if node in old_to_new:
                return old_to_new[node]

            old_to_new[node] = Node(node.val)

            for neighbor in node.neighbors:
                old_to_new[node].neighbors.append(dfs(neighbor, old_to_new))

            return old_to_new[node]
        
        if node is None:
            return None
        old_to_new = {}
        return dfs(node, old_to_new)
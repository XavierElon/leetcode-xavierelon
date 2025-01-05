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
        if not node: return node

        q, clones = deque([node]), {node.val: Node(node.val, [])}

        while q:
            cur = q.popleft()
            cur_clone = clones[cur.val]

            for neighbor in cur.neighbors:
                if neighbor.val not in clones:
                    clones[neighbor.val] = Node(neighbor.val, [])
                    q.append(neighbor)
                cur_clone.neighbors.append(clones[neighbor.val])

        return clones[node.val]
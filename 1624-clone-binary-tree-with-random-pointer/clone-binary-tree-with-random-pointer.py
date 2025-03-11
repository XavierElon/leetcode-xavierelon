# Definition for Node.
# class Node:
#     def __init__(self, val=0, left=None, right=None, random=None):
#         self.val = val
#         self.left = left
#         self.right = right
#         self.random = random

class Solution:
    def copyRandomBinaryTree(self, root: 'Optional[Node]') -> 'Optional[NodeCopy]':
        if not root:
            return None

        old_to_new = {}

        def dfs(node):
            if not node:
                return None

            if node in old_to_new:
                return old_to_new[node]

            copy = NodeCopy(node.val)
            old_to_new[node] = copy

            copy.left = dfs(node.left)
            copy.right = dfs(node.right)
            copy.random = dfs(node.random)

            return copy

        return dfs(root)
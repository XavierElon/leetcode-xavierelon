# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def goodNodes(self, root: TreeNode) -> int:
        def dfs(node, max_):
            if not node:
                return 0

            count = 0
            if node.val >= max_:
                count += 1
                max_ = node.val

            left = dfs(node.left, max_)
            right = dfs(node.right, max_)

            return left + right + count
        return dfs(root, float('-inf'))
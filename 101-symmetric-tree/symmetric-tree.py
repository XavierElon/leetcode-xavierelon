# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
        if not root:
            return True

        return self.dfs(root.left, root.right)

    def dfs(self, left: TreeNode, right: TreeNode) -> bool:
        if not left and not right:
            return True

        if not left or not right:
            return False
        if left.val != right.val:
            return False

        return self.dfs(left.right, right.left) and self.dfs(left.left, right.right)
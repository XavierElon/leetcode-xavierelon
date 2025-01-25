# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        if not root:
            return True

        if not self.isBalanced(root.left) or not self.isBalanced(root.right):
            return False
        
        left_height = self.get_height(root.left)
        right_height = self.get_height(root.right)

        return abs(left_height - right_height) <= 1

    def get_height(self, node: TreeNode) -> int:
        if not node:
            return 0

        return 1 + max(self.get_height(node.left), self.get_height(node.right))
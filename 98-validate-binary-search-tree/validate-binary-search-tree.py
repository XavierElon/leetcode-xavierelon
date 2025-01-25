# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        if not root:
            return True

        return self.validateBST(root, float('-inf'), float('inf'))

    def validateBST(self, node: TreeNode, lower_bound: float, upper_bound: float) -> bool:
        if not node:
            return True

        if not (lower_bound < node.val < upper_bound):
            return False

        return (self.validateBST(node.left, lower_bound, node.val) and self.validateBST(node.right, node.val, upper_bound))
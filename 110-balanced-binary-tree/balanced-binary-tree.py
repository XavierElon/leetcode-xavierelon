# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        return self.getHeightImbalance(root) != -1

    def getHeightImbalance(self, node: TreeNode) -> int:
        if not node:
            return 0

        left_height = self.getHeightImbalance(node.left)
        right_height = self.getHeightImbalance(node.right)

        if left_height == -1 or right_height == -1:
            return -1

        if abs(left_height - right_height) > 1:
            return -1

        return 1 + max(right_height, left_height)
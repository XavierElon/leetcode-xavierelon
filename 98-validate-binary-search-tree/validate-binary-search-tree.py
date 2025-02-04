# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        def isValid(node, low, high) -> bool:
            if not node:
                return True

            if not low < node.val < high:
                return False

            return (isValid(node.left, low, node.val) and isValid(node.right, node.val, high))

        return isValid(root, float('-inf'), float('inf'))
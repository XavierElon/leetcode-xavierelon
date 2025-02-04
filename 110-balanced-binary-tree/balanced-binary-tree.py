# Definition for a binary tree node.
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
# class TreeNode:
#         self.left = left
#         self.right = right
class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        balanced, _ = self.checkBalanced(root)
        return balanced        

    def checkBalanced(self, node: Optional[TreeNode]) -> Tuple[bool, int]:
        if not node:
            return True, 0

        left_balanced, left_height = self.checkBalanced(node.left)
        if not left_balanced:
            return False, 0

        right_balanced, right_height = self.checkBalanced(node.right)
        if not right_balanced:
            return False, 0

        current_balanced = abs(left_height - right_height) <= 1
        current_height = 1 + max(left_height, right_height)

        return current_balanced, current_height

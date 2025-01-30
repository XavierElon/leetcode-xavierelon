# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
        def check_path(node: TreeNode, remaining: int) -> bool:
            if not node:
                return False

            current_remaining = remaining - node.val

            if not node.left and not node.right:
                return current_remaining == 0

            return (check_path(node.left, current_remaining) or
                    check_path(node.right, current_remaining))

        return check_path(root, targetSum)
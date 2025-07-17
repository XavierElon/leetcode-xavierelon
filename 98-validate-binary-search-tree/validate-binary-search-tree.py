# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        def is_valid_bst_helper(node, min_val, max_val):
            if not node:
                return True

            if not (min_val < node.val < max_val):
                return False

            left_is_valid = is_valid_bst_helper(node.left, min_val, node.val)

            right_is_valid = is_valid_bst_helper(node.right, node.val, max_val)

            return left_is_valid and right_is_valid

        return is_valid_bst_helper(root, -math.inf, math.inf)
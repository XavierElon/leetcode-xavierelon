# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        if not root:
            return None

        if root == p or root == q:
            return root

        found_in_left = self.lowestCommonAncestor(root.left, p, q)
        found_in_right = self.lowestCommonAncestor(root.right, p, q)

        if found_in_left and found_in_right:
            return root

        if found_in_left:
            return found_in_left

        else:
            return found_in_right
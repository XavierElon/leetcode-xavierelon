# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        if not root:
            return root

        if root.val == p.val or root.val == q.val:
            return root

        left_found = self.lowestCommonAncestor(root.left, p, q)
        right_found = self.lowestCommonAncestor(root.right, p, q)

        if left_found and right_found:
            return root

        if left_found:
            return left_found
        else:
            return right_found
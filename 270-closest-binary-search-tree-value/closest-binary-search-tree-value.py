# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def closestValue(self, root: Optional[TreeNode], target: float) -> int:
        if not root:
            return float('inf')
        if root.val > target:
            return min(root.val, self.closestValue(root.left, target), key = lambda x: (abs(x - target), x))
        else:
            return min(root.val, self.closestValue(root.right, target), key = lambda x: (abs(x - target), x))
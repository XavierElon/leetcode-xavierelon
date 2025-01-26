# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
        if not root:
            return False

        if not root.left and not root.right:
            return targetSum == root.val
        
        remaining_sum = targetSum - root.val

        return (self.hasPathSum(root.left, remaining_sum) if root.left else False) or \
        (self.hasPathSum(root.right, remaining_sum) if root.right else False)
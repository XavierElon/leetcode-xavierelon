# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def closestValue(self, root: Optional[TreeNode], target: float) -> int:
        closest = root.val

        while root:
            # Update closest if the current node is closer to the target
            if (abs(root.val - target) < abs(closest - target)) or \
               (abs(root.val - target) == abs(closest - target) and root.val < closest):
                closest = root.val
            # Move left or right based on target value
            root = root.left if target < root.val else root.right
        
        return closest
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def closestValue(self, root: Optional[TreeNode], target: float) -> int:
        closest_distance = float('inf')
        result = None

        while root:
            current_val = root.val
            distance = abs(root.val - target)

            if distance < closest_distance or (distance == closest_distance and current_val < result):
                closest_distance = distance
                result = current_val
            if distance == 0:
                return result
            if current_val < target:
                root = root.right
            else:
                root = root.left

        return result
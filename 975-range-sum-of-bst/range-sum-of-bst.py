# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def rangeSumBST(self, root: Optional[TreeNode], low: int, high: int) -> int:
        res = 0
        stack = [root]
        range_sum = 0

        while stack:
            node = stack.pop()

            if low <= node.val <= high:
                range_sum += node.val
            if node.val > low and node.left:
                stack.append(node.left)
            if node.val < high and node.right:
                stack.append(node.right)

        return range_sum
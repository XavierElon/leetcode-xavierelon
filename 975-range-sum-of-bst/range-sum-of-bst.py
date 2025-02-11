# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def rangeSumBST(self, root: Optional[TreeNode], low: int, high: int) -> int:
        sum = 0
        stack = []
        stack.append(root)

        while stack:
            current = stack.pop()

            if current.val >= low and current.val <= high:
                sum += current.val
            if current.right and current.val < high:
                stack.append(current.right)
            if current.left and current.val > low:
                stack.append(current.left)

        return sum
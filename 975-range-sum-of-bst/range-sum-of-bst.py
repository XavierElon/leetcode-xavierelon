# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def rangeSumBST(self, root: Optional[TreeNode], low: int, high: int) -> int:
        sum_val = 0
        stack = []

        if root:
            stack.append(root)

        while stack:
            curr = stack.pop()

            if low <= curr.val <= high:
                sum_val += curr.val
            
            if curr.right and curr.val < high:
                stack.append(curr.right)

            if curr.left and curr.val > low:
                stack.append(curr.left)

        return sum_val
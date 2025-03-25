# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sumNumbers(self, root: Optional[TreeNode]) -> int:
        total_sum = 0
        queue = deque([(root, root.val)])

        while queue:
            node, current_sum = queue.popleft()

            if not node.left and not node.right:
                total_sum += current_sum

            if node.left:
                queue.append((node.left, current_sum * 10 + node.left.val))

            if node.right:
                queue.append((node.right, current_sum * 10 + node.right.val))

        return total_sum
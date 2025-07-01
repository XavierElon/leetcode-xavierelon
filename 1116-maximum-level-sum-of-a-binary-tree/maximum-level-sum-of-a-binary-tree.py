# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxLevelSum(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0

        max_sum = float('-inf')
        result_level = 0
        current_level = 1

        queue = deque([root])

        while queue:
            level_size = len(queue)
            current_level_sum = 0

            for _ in range(level_size):
                node = queue.popleft()
                current_level_sum += node.val

                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)

            if current_level_sum > max_sum:
                max_sum = current_level_sum
                result_level = current_level
            
            current_level += 1

        return result_level
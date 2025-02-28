# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> int:
        prefix_sums = defaultdict(int)
        prefix_sums[0] = 1
        count = 0

        def dfs(node, total):
            nonlocal count
            if not node:
                return

            total += node.val
            count += prefix_sums[total - targetSum]

            prefix_sums[total] += 1
            dfs(node.left, total)
            dfs(node.right, total)
            prefix_sums[total] -= 1

        dfs(root, 0)
        return count
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> int:
        if not root:
            return 0

        self.count = 0

        prefix_sum = {0: 1}

        self.dfs(root, 0, targetSum, prefix_sum)

        return self.count

    def dfs(self, node, current_sum, target, prefix_sum):
        if not node:
            return

        current_sum += node.val

        self.count += prefix_sum.get(current_sum - target, 0)

        prefix_sum[current_sum] = prefix_sum.get(current_sum, 0) + 1

        self.dfs(node.left, current_sum, target, prefix_sum)
        self.dfs(node.right, current_sum, target, prefix_sum)

        prefix_sum[current_sum] -= 1
        if prefix_sum[current_sum] == 0:
            del prefix_sum[current_sum]
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> List[List[int]]:
        res = []

        def dfs(node: TreeNode, remaining_sum: int, current_path: List[int]) -> None:
            if not node:
                return

            current_path.append(node.val)

            if not node.left and not node.right:
                if remaining_sum == node.val:
                    res.append(current_path.copy())

            dfs(node.left, remaining_sum - node.val, current_path)
            dfs(node.right, remaining_sum - node.val, current_path)

            current_path.pop()

        dfs(root, targetSum, [])
        return res
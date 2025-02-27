# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> List[List[int]]:
        res = []

        def dfs(node, remainingSum, current):
            if not node:
                return

            current.append(node.val)

            if not node.left and not node.right and remainingSum == node.val:
                res.append(current.copy())


            dfs(node.left, remainingSum - node.val, current)
            dfs(node.right, remainingSum - node.val, current)

            current.pop()

        
        dfs(root, targetSum, [])
        return res
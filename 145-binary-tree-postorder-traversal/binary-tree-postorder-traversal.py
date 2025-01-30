# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def postorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        if not root:
            return []

        res = []
        stack = [root]

        while stack:
            current = stack.pop()
            res.append(current.val)

            if current.left:
                stack.append(current.left)
            
            if current.right:
                stack.append(current.right)
        res.reverse()
        return res
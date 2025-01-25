# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        self.max_diameter = 0

        self.height(root)
        return self.max_diameter


    def height(self, node: TreeNode) -> int:
        if not node:
            return 0

        left_height = self.height(node.left)
        right_height = self.height(node.right)
        self.max_diameter = max(self.max_diameter, left_height + right_height)

        return 1 + max(left_height, right_height)

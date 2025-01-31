# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        longest_path = 0

        def measure_subtree(node: TreeNode) -> int:
            nonlocal longest_path

            if not node:
                return 0

            left_height = measure_subtree(node.left)
            right_height = measure_subtree(node.right)

            path_through_node = left_height + right_height

            longest_path = max(longest_path, path_through_node)

            return 1 + max(left_height, right_height)

        measure_subtree(root)
        return longest_path
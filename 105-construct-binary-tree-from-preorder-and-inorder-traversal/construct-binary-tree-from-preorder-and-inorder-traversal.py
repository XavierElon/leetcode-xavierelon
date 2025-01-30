# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
        inorder_indexes_map = {}
        for i, val in enumerate(inorder):
            inorder_indexes_map[val] = i

        preorder_index = [0]

        def build(left: int, right: int) -> Optional[TreeNode]:
            if left > right:
                return None

            val = preorder[preorder_index[0]]

            node = TreeNode(val)

            inorder_index = inorder_indexes_map[val]

            preorder_index[0] += 1

            node.left = build(left, inorder_index - 1)

            node.right = build(inorder_index + 1, right)

            return node

        return build(0, len(inorder) - 1)
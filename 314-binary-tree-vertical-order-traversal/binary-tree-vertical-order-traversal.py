# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def verticalOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if not root:
            return []

        column_map = defaultdict(list)
        leftmost_column = rightmost_column = 0
        queue = deque([(root, 0)])

        while queue:
            node, column = queue.popleft()

            column_map[column].append(node.val)

            leftmost_column = min(leftmost_column, column)
            rightmost_column = max(rightmost_column, column)

            if node.left:
                queue.append((node.left, column - 1))

            if node.right:
                queue.append((node.right, column + 1))

        return [column_map[i] for i in range(leftmost_column, rightmost_column + 1)]
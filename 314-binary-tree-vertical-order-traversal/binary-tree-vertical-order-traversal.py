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

        queue = deque([(root, 0)])
        min_col = max_col = 0

        while queue:
            node, column = queue.popleft()

            column_map[column].append(node.val)

            if node.left:
                queue.append((node.left, column - 1))
                if column - 1 < min_col:
                    min_col = column - 1
            if node.right:
                queue.append((node.right, column + 1))
                if column + 1 > max_col:
                    max_col = column + 1

        return [column_map[i] for i in range(min_col, max_col + 1)]
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def verticalTraversal(self, root: Optional[TreeNode]) -> List[List[int]]:
        if not root:
            return []

        column_map = defaultdict(list)
        min_col = max_col = 0
        queue = deque([(root, 0, 0)])

        while queue:
            node, row, col = queue.popleft()

            min_col = min(min_col, col)
            max_col = max(max_col, col)

            column_map[col].append((row, node.val))

            if node.left:
                queue.append((node.left, row + 1, col - 1))
            if node.right:
                queue.append((node.right, row + 1, col + 1))

        res = []

        for i in range(min_col, max_col + 1):
            column = [val for _, val in sorted(column_map[i], key=lambda x: (x[0], x[1]))]
            res.append(column)

        return res
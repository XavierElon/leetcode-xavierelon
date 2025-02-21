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
        queue = deque([(root, 0, 0)])

        while queue:
            node, row, col = queue.popleft()
            column_map[col].append((row, node.val))

            if node.left:
                queue.append((node.left, row+1, col-1))
            if node.right:
                queue.append((node.right, row+1, col+1))

        result = []
        for col in sorted(column_map.keys()):
            sorted_column = [val for _, val in sorted(column_map[col], key=lambda x: (x[0], x[1]))]
            result.append(sorted_column)

        return result
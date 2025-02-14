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

        while queue:
            current, column = queue.popleft()
            column_map[column].append(current.val)

            if (current.left):
                queue.append((current.left, column - 1))
            if (current.right):
                queue.append((current.right, column + 1))

        return [column_map[x] for x in sorted(column_map.keys())]
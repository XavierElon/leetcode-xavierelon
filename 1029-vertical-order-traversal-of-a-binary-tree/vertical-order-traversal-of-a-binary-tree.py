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

        # Dictionary to store nodes by column
        column_map = defaultdict(list)
        
        # Track the boundary columns
        min_col, max_col = 0, 0
        
        # BFS traversal with position tracking
        queue = deque([(root, 0, 0)])  # (node, row, col)
        
        while queue:
            node, row, col = queue.popleft()
            
            # Store the node with its row for later sorting
            column_map[col].append((row, node.val))
            
            # Update column boundaries
            min_col = min(min_col, col)
            max_col = max(max_col, col)
            
            # Add children to queue
            if node.left:
                queue.append((node.left, row+1, col-1))
            if node.right:
                queue.append((node.right, row+1, col+1))

        # Build result using the known column boundaries
        result = []
        for col in range(min_col, max_col + 1):
            # Sort nodes in this column first by row, then by value
            sorted_column = [val for _, val in sorted(column_map[col], key=lambda x: (x[0], x[1]))]
            result.append(sorted_column)
        
        return result

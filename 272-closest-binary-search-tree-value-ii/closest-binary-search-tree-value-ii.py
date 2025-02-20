# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def closestKValues(self, root: Optional[TreeNode], target: float, k: int) -> List[int]:
        queue = deque()

        def dfs(node):
            if node:
                dfs(node.left)
                if len(queue) == k:
                    if node.val - target > target - queue[0]:
                        return
                    queue.popleft()
                queue.append(node.val)
                dfs(node.right)
        dfs(root)
        return list(queue)
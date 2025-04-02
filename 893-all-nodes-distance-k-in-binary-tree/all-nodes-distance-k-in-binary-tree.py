# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def distanceK(self, root: TreeNode, target: TreeNode, k: int) -> List[int]:
        if not root:
            return []

        parent_map = defaultdict(None)

        def build_parent_map(node, parent=None):
            if not node:
                return
            parent_map[node] = parent
            build_parent_map(node.left, node)
            build_parent_map(node.right, node)

        build_parent_map(root)
        visited = {target}
        res = []
        queue = deque([(target, 0)])

        while queue:
            node, distance = queue.popleft()

            if distance == k:
                res.append(node.val)
            elif distance < k:
                for neighbor in [node.left, node.right, parent_map[node]]:
                    if neighbor and neighbor not in visited:
                        visited.add(neighbor)
                        queue.append((neighbor, distance + 1))

        return res
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

        parent_map = {}

        def build_parent_map(node, parent=None):
            if node:
                parent_map[node] = parent
                build_parent_map(node.left, node)
                build_parent_map(node.right, node)

        build_parent_map(root)
        visited = {target}
        queue = deque([target])

        while queue:
            if k == 0:
                return [node.val for node in queue]

            for _ in range(len(queue)):
                curr = queue.popleft()

                for neighbor in (curr.left, curr.right, parent_map[curr]):
                    if neighbor and neighbor not in visited:
                        visited.add(neighbor)
                        queue.append(neighbor)

            k -= 1
        
        return []
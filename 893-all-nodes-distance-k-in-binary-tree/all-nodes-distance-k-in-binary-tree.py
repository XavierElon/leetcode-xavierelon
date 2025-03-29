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

        parent = {}
        queue_parent = deque([root])

        while queue_parent:
            node = queue_parent.popleft()
            if node.left:
                if node.left:
                    parent[node.left] = node
                    queue_parent.append(node.left)
            if node.right:
                if node.right:
                    parent[node.right] = node
                    queue_parent.append(node.right)

        queue = deque([(target, 0)])
        visited = {target}
        res = []

        while queue:
            curr_node, distance = queue.popleft()

            if distance == k:
                res.append(curr_node.val)
                continue

            neighbors = []

            if curr_node.left:
                neighbors.append(curr_node.left)
            if curr_node.right:
                neighbors.append(curr_node.right)
            if curr_node in parent:
                neighbors.append(parent[curr_node])

            for neighbor in neighbors:
                if neighbor not in visited:
                    visited.add(neighbor)
                    queue.append((neighbor, distance + 1))

        return res
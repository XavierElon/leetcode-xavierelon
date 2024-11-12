/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function distanceK(root: TreeNode | null, target: TreeNode | null, k: number): number[] {
    if (!root) return []

    const parentMap: Map<TreeNode, TreeNode | null> = new Map()

    let targetNode: TreeNode | null = null

    function dfs(node: TreeNode | null, parent: TreeNode | null) {
        if (!node) return

        parentMap.set(node, parent)
        
        if (node.val === target.val) {
            targetNode = node
        }

        dfs(node.left, node)
        dfs(node.right, node)
    }

    dfs(root, null)

    if (!targetNode) return []

    const queue: TreeNode[] = []
    const visited: Set<TreeNode> = new Set()

    queue.push(targetNode)
    visited.add(targetNode)

    let currentDistance: number = 0

    while (queue.length > 0) {
        const size: number = queue.length

        if (currentDistance === k) {
            return queue.map(node => node.val)
        }

        for (let i = 0; i < size; i++) {
            const currentNode: TreeNode = queue.shift()

            const neighbors: (TreeNode | null)[] = [currentNode.left, currentNode.right, parentMap.get(currentNode)]

            for (const neighbor of neighbors) {
                if (neighbor && !visited.has(neighbor)) {
                    visited.add(neighbor)
                    queue.push(neighbor)
                }
            }
        }

        currentDistance++
    }
    return []
};
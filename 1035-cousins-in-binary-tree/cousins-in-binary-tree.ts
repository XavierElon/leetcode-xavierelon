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

function isCousins(root: TreeNode | null, x: number, y: number): boolean {
    if (!root) return false;

    const queue: [TreeNode, TreeNode | null, number][] = [[root, null, 0]];
    let xInfo: [TreeNode | null, number] | null = null;
    let yInfo: [TreeNode | null, number] | null = null;

    while (queue.length > 0) {
        const length = queue.length;

        // Process all nodes at the current depth level
        for (let i = 0; i < length; i++) {
            const [node, parent, depth] = queue.shift()!;

            if (node.val === x) xInfo = [parent, depth];
            if (node.val === y) yInfo = [parent, depth];

            if (node.left) queue.push([node.left, node, depth + 1]);
            if (node.right) queue.push([node.right, node, depth + 1]);
        }

        // After processing the whole level, check if both x and y were found
        if (xInfo && yInfo) {
            const [xParent, xDepth] = xInfo;
            const [yParent, yDepth] = yInfo;
            return xDepth === yDepth && xParent !== yParent; // Return true if they are cousins
        }

        // If one of x or y was found at this level but not both, they can't be cousins
        if (xInfo || yInfo) return false;
    }

    return false; // In case neither x nor y was found
}
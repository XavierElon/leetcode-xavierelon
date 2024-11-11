/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     left: _Node | null
 *     right: _Node | null
 *     random: _Node | null
 * 
 *     constructor(val?: number, left?: _Node | null, right?: _Node | null, random?: _Node | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */


function copyRandomBinaryTree(root: _Node | null): NodeCopy | null {
    if (!root) return null;

    let queue: Node[] = [root];
    let mapNodeCopy = new Map<Node, NodeCopy>();
    mapNodeCopy.set(root, new NodeCopy(root.val));

    while (queue.length > 0) {
        const node: Node = queue.shift();
        // since the newNodeCopy is a reference to an object,
        // all data that changes in one iteration will change
        // the object in the hash map
        const newNodeCopy: NodeCopy = mapNodeCopy.get(node);
        
        if (node.left) {
            if (!mapNodeCopy.get(node.left)) {
                mapNodeCopy.set(node.left, new NodeCopy(node.left.val));
                queue.push(node.left);
            }
            newNodeCopy.left = mapNodeCopy.get(node.left);
        }

        if (node.right) {
            if (!mapNodeCopy.get(node.right)) {
                mapNodeCopy.set(node.right, new NodeCopy(node.right.val));
                queue.push(node.right);
            }
            newNodeCopy.right = mapNodeCopy.get(node.right);
        }

        if (node.random) {
            if (!mapNodeCopy.get(node.random)) {
                mapNodeCopy.set(node.random, new NodeCopy(node.random.val));
                queue.push(node.random);
            }
            newNodeCopy.random = mapNodeCopy.get(node.random);
        }
    }
    
    return mapNodeCopy.get(root);
};
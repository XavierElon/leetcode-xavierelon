/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     neighbors: _Node[]
 * 
 *     constructor(val?: number, neighbors?: _Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 * 
 */


function cloneGraph(node: _Node | null): _Node | null {
	if (node === null) return null

    const visited = new Map<_Node, _Node>()
    const queue: _Node[] = []

    const clone = new _Node(node.val)
    visited.set(node, clone)
    queue.push(node)

    while (queue.length > 0) {
        const n = queue.shift()

        for (const neighbor of n.neighbors) {
            if (!visited.has(neighbor)) {
                visited.set(neighbor, new _Node(neighbor.val))
                queue.push(neighbor)
            }
            visited.get(n).neighbors.push(visited.get(neighbor))
        }
    }

    return clone
};
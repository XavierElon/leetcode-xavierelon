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
	const visited: Map<_Node, _Node> = new Map<_Node, _Node>()
    return clone(node, visited)
};

function clone(node: _Node | null, visited: Map<_Node, _Node>): _Node | null {
    if (node === null) return null

    if (visited.has(node)) return visited.get(node)

    const copy: _Node = new _Node(node.val)

    visited.set(node, copy)

    for (const neighbor of node.neighbors) {
        copy.neighbors.push(clone(neighbor, visited))
    }

    return copy
}
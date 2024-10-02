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
	if (node === null) return

    const map: Map<_Node, _Node> = new Map();

    const dfs = (n: _Node): _Node => {
        if (map.has(n)) return map.get(n)

        const clone: _Node = new _Node(n.val)
        map.set(n, clone)

        for (const neighbor of n.neighbors) {
            clone.neighbors.push(dfs(neighbor))
        }
        return clone
    }

    return dfs(node)
};
/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     children: _Node[]
 * 
 *     constructor(val?: number, children?: _Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = (children===undefined ? [] : children)
 *     }
 * }
 */


function cloneTree(root: _Node | null): _Node | null {
    return dfs(root)
};

function dfs(node: _Node | null): _Node | null {
    if (node === null) return null

    const copy: _Node = new _Node(node.val)

    for (const child of node.children) {
        copy.children.push(dfs(child))
    } 

    return copy
}
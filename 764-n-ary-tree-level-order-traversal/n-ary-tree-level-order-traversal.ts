/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     children: _Node[]
 *     
 *     constructor(v: number) {
 *         this.val = v;
 *         this.children = [];
 *     }
 * }
 */


function levelOrder(root: _Node | null): number[][] {
	if (!root) return []

    const result: number[][] = []
    const queue: _Node[] = [root]

    while (queue.length > 0) {
        const levelSize: number = queue.length
        const level: number[] = []

        for (let i = 0; i < levelSize; i++) {
            const currentNode: _Node = queue.shift()
            level.push(currentNode.val)

            for (const child of currentNode.children) {
                queue.push(child)
            }
        }
        result.push(level)
    }
    return result
};
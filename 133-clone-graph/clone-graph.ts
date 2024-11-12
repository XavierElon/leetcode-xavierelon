function cloneGraph(node: _Node | null): _Node | null {
    const visited = new Map<_Node, _Node>();
    return clone(node, visited);
};

function clone(node: _Node | null, visited: Map<_Node, _Node>): _Node | null {
    if(node === null){
        return node;
    }

    if(visited.has(node)){
        return visited.get(node);
    }

    const copy = new Node(node.val);
    visited.set(node, copy);

    for(const neighbor of node.neighbors){
        copy.neighbors.push(clone(neighbor, visited));
    }
    
    return copy;
}
function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
    const graph = new Map<string, Map<string, number>>();

    // Build the graph
    for (let i = 0; i < equations.length; i++) {
        const [A, B] = equations[i];
        const value = values[i];

        if (!graph.has(A)) {
            graph.set(A, new Map<string, number>());
        }
        if (!graph.has(B)) {
            graph.set(B, new Map<string, number>());
        }

        graph.get(A)!.set(B, value);
        graph.get(B)!.set(A, 1 / value);
    }

    const results: number[] = [];

    // Evaluate queries
    for (const [C, D] of queries) {
        if (!graph.has(C) || !graph.has(D)) {
            results.push(-1.0);
        } else {
            const visited = new Set<string>();
            const result = dfs(C, D, 1.0, visited);
            results.push(result);
        }
    }

    function dfs(
        current: string,
        target: string,
        accProduct: number,
        visited: Set<string>
    ): number {
        if (current === target) {
            return accProduct;
        }

        visited.add(current);

        const neighbors = graph.get(current)!;

        for (const [neighbor, value] of neighbors) {
            if (!visited.has(neighbor)) {
                const result = dfs(
                    neighbor,
                    target,
                    accProduct * value,
                    visited
                );
                if (result !== -1.0) {
                    return result;
                }
            }
        }

        return -1.0;
    }

    return results;
};
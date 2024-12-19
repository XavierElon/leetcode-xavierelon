/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    // **1. Initialize Parent and Weight Maps**
    const parent = {}; // Maps variable to its parent
    const weight = {}; // Maps variable to the ratio between the variable and its parent

    /**
     * Initializes the DSU for a variable if it's not already present.
     * @param {string} x - The variable to initialize.
     */
    function initialize(x) {
        if (!(x in parent)) {
            parent[x] = x;
            weight[x] = 1.0;
        }
    }

    /**
     * Finds the root parent of a variable with path compression.
     * Also updates the weight to the root parent.
     * @param {string} x - The variable to find the root parent for.
     * @return {string} - The root parent of the variable.
     */
    function find(x) {
        if (parent[x] !== x) {
            const originalParent = parent[x];
            parent[x] = find(originalParent); // Path Compression
            weight[x] *= weight[originalParent]; // Update weight to root
        }
        return parent[x];
    }

    /**
     * Unites two variables based on the given ratio.
     * @param {string} x - The numerator variable.
     * @param {string} y - The denominator variable.
     * @param {number} value - The value of the equation x / y = value.
     */
    function union(x, y, value) {
        initialize(x);
        initialize(y);
        
        const rootX = find(x);
        const rootY = find(y);
        
        if (rootX !== rootY) {
            parent[rootX] = rootY;
            // Adjust the weight to maintain the ratio: x / y = value
            // weight[x] * (x's new parent / y's parent) = value
            weight[rootX] = (weight[y] * value) / weight[x];
        }
    }

    /**
     * Checks if two variables are connected and computes their ratio.
     * @param {string} x - The numerator variable.
     * @param {string} y - The denominator variable.
     * @return {number} - The value of x / y if connected, else -1.0.
     */
    function isConnected(x, y) {
        if (!(x in parent) || !(y in parent)) {
            return -1.0;
        }
        
        const rootX = find(x);
        const rootY = find(y);
        
        if (rootX !== rootY) {
            return -1.0;
        }
        
        return weight[x] / weight[y];
    }

    // **2. Process All Equations to Build DSU Structure**
    for (let i = 0; i < equations.length; i++) {
        const [A, B] = equations[i];
        const value = values[i];
        union(A, B, value);
    }

    // **3. Process All Queries and Collect Results**
    const results = [];
    for (const [C, D] of queries) {
        const result = isConnected(C, D);
        results.push(result);
    }

    return results;
};
/**
 * @param {string} source
 * @param {string} target
 * @param {string[]} original
 * @param {string[]} changed
 * @param {number[]} cost
 * @return {number}
 */
function minimumCost(source, target, original, changed, cost) {
    // Step 1: Initialize necessary data structures and variables
    const uniqueSubstrings = Array.from(new Set(original.concat(changed)));
    const substringIdMap = createSubstringIdMap(uniqueSubstrings);
    const numberOfSubstrings = Object.keys(substringIdMap).length;
    const substringDistances = initializeDistanceMatrix(numberOfSubstrings);
    const dp = new Array(source.length + 1).fill(Infinity);

    // Step 2: Populate substring distances matrix
    for (let i = 0; i < original.length; i++) {
        const originalId = substringIdMap[original[i]];
        const changedId = substringIdMap[changed[i]];
        substringDistances[originalId][changedId] = Math.min(
            substringDistances[originalId][changedId],
            cost[i]
        );
    }

    // Step 3: Floyd-Warshall algorithm to calculate minimum distances between substrings
    for (let k = 0; k < numberOfSubstrings; k++) {
        for (let i = 0; i < numberOfSubstrings; i++) {
            for (let j = 0; j < numberOfSubstrings; j++) {
                if (substringDistances[i][k] < Infinity && substringDistances[k][j] < Infinity) {
                    substringDistances[i][j] = Math.min(
                        substringDistances[i][j],
                        substringDistances[i][k] + substringDistances[k][j]
                    );
                }
            }
        }
    }

    // Step 4: Dynamic programming to find minimum cost
    dp[0] = 0;
    for (let i = 0; i < source.length; i++) {
        if (dp[i] === Infinity) {
            continue;
        }
        const sourceChar = source[i];
        const targetChar = target[i];
        if (sourceChar === targetChar) {
            dp[i + 1] = Math.min(dp[i + 1], dp[i]);
        }
        for (const substring of uniqueSubstrings) {
            const substringLength = substring.length;
            if (i + substringLength > source.length) {
                continue;
            }
            const subSource = source.substring(i, i + substringLength);
            const subTarget = target.substring(i, i + substringLength);
            if (!substringIdMap.hasOwnProperty(subSource) || !substringIdMap.hasOwnProperty(subTarget)) {
                continue;
            }
            const sourceId = substringIdMap[subSource];
            const targetId = substringIdMap[subTarget];
            if (substringDistances[sourceId][targetId] !== Infinity) {
                dp[i + substringLength] = Math.min(
                    dp[i + substringLength],
                    dp[i] + substringDistances[sourceId][targetId]
                );
            }
        }
    }

    // Step 5: Return the final result
    return dp[source.length] === Infinity ? -1 : dp[source.length];
}

function createSubstringIdMap(originalAndChangedSubstrings) {
    const substringIdMap = {};
    for (const substring of originalAndChangedSubstrings) {
        if (!(substring in substringIdMap)) {
            substringIdMap[substring] = Object.keys(substringIdMap).length;
        }
    }
    return substringIdMap;
}

function initializeDistanceMatrix(size) {
    return Array.from({ length: size }, () => Array.from({ length: size }, () => Infinity));
}
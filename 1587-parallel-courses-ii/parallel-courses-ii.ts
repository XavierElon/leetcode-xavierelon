function minNumberOfSemesters(n: number, relations: number[][], k: number): number {
    const inDegree: number[] = new Array(n).fill(0);
    const graph: number[][] = Array.from({ length: n }, () => []);
    
    for (const [prev, next] of relations) {
        graph[prev - 1].push(next - 1);
        inDegree[next - 1]++;
    }
    
    const dp: number[] = new Array(1 << n).fill(n);
    dp[0] = 0;
    
    for (let mask = 0; mask < (1 << n); mask++) {
        let canTake = 0;
        for (let i = 0; i < n; i++) {
            if (!(mask & (1 << i)) && (mask & ((1 << n) - 1)) === mask) {
                let prereqMet = true;
                for (const prereq of graph[i]) {
                    if (!(mask & (1 << prereq))) {
                        prereqMet = false;
                        break;
                    }
                }
                if (prereqMet) {
                    canTake |= (1 << i);
                }
            }
        }
        
        for (let subset = canTake; subset > 0; subset = (subset - 1) & canTake) {
            if (countBits(subset) <= k) {
                dp[mask | subset] = Math.min(dp[mask | subset], dp[mask] + 1);
            }
        }
    }
    
    return dp[(1 << n) - 1];
}

function countBits(n: number): number {
    let count = 0;
    while (n) {
        count += n & 1;
        n >>= 1;
    }
    return count;
}
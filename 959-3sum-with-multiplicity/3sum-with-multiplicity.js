/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
function threeSumMulti(arr, target) {
    const MOD = 1e9 + 7;
    const count = new Array(101).fill(0);
    
    // Step 1: Count the frequency of each number in arr
    for (let num of arr) {
        count[num]++;
    }
    
    let result = 0;
    
    // Step 2: Iterate through all possible combinations of a, b, c
    for (let a = 0; a <= 100; a++) {
        if (count[a] === 0) continue; // Skip if a is not present in arr
        
        for (let b = a; b <= 100; b++) {
            if (count[b] === 0) continue; // Skip if b is not present in arr
            
            let c = target - a - b;
            if (c < 0 || c > 100) continue; // c must be within [0,100]
            
            if (c < b) continue; // Ensure a <= b <= c to avoid duplicates
            
            if (count[c] === 0) continue; // Skip if c is not present in arr
            
            if (a === b && b === c) {
                // Case 1: All numbers are the same
                if (count[a] >= 3) {
                    result += (count[a] * (count[a] - 1) * (count[a] - 2)) / 6;
                    result %= MOD;
                }
            } else if (a === b && b !== c) {
                // Case 2: a == b != c
                if (count[a] >= 2) {
                    result += ((count[a] * (count[a] - 1)) / 2) * count[c];
                    result %= MOD;
                }
            } else if (a !== b && b === c) {
                // Case 3: a != b == c
                if (count[b] >= 2) {
                    result += count[a] * ((count[b] * (count[b] - 1)) / 2);
                    result %= MOD;
                }
            } else {
                // Case 4: a < b < c
                result += count[a] * count[b] * count[c];
                result %= MOD;
            }
        }
    }
    
    return result;
}
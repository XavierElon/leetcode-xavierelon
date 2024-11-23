function takeCharacters(s: string, k: number): number {
    const n = s.length;

    // Step 1: Count total occurrences of 'a', 'b', 'c'
    const totalCount = { a: 0, b: 0, c: 0 };
    for (const char of s) {
        totalCount[char]++;
    }

    // If any character count is less than k, it's impossible
    if (totalCount['a'] < k || totalCount['b'] < k || totalCount['c'] < k) {
        return -1;
    }

    // Step 2: Sliding window to find the largest valid middle window
    let start = 0;
    let maxWindowSize = 0;
    const currentCount = { a: 0, b: 0, c: 0 };

    for (let end = 0; end < n; end++) {
        currentCount[s[end]]++;

        // Ensure the window satisfies the condition
        while (
            totalCount['a'] - currentCount['a'] < k ||
            totalCount['b'] - currentCount['b'] < k ||
            totalCount['c'] - currentCount['c'] < k
        ) {
            currentCount[s[start]]--;
            start++;
        }

        // Update the maximum window size
        maxWindowSize = Math.max(maxWindowSize, end - start + 1);
    }

    // Step 3: Calculate the minimal minutes required
    return n - maxWindowSize;
};
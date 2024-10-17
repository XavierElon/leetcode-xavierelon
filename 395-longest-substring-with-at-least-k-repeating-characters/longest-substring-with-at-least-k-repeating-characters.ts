function longestSubstring(s: string, k: number): number {
    
    const helper = (start: number, end: number): number => {
        if (end - start < k) return 0

        const freq: Record<string, number> = {}

        for (let i = start; i < end; i++) {
            const char = s[i]
            freq[char] = (freq[char] || 0) + 1
        }

        for (let mid = start; mid < end; mid++) {
            const char = s[mid]
            if (freq[char] < k) {
                const left = helper(start, mid)
                let next = mid + 1
                while (next < end && s[next] === char) next++
                const right = helper(next, end)
                return Math.max(left, right)
            }
        }

        return end - start
    }

    return helper(0, s.length)
};
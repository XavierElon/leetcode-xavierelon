function largeGroupPositions(s: string): number[][] {
    const result: number[][] = []
    let i: number = 0

    while (i < s.length) {
        let j = i

        while (j < s.length && s[i] === s[j]) {
            j++
        }

        if (j - i >= 3) {
            result.push([i, j - 1])
        }

        i = j
    }

    return result
};
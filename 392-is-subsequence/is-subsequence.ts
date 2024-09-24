function isSubsequence(s: string, t: string): boolean {
    let i: number = 0, j = 0

    while (i < s.length && j < t.length) {
        if (s[i] === t[j]) {
            i++
        }
        j++
    }
    if (i === s.length) return true
    else return false
};
function checkString(s: string): boolean {
    let seenB: boolean = false

    for (let c of s) {
        if (c === 'b') {
            seenB = true
        } else if (c === 'a' && seenB) {
            return false
        }
    }
    return true
};
function countAsterisks(s: string): number {
    let insideBar: boolean = false
    let asteriskCount: number = 0

    for (const char of s) {
        if (char === '|') {
            insideBar = !insideBar
        } else if (char === '*' && !insideBar) {
            asteriskCount++
        }
    }

    return asteriskCount
};
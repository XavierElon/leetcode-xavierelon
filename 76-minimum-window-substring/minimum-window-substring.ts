function minWindow(s: string, t: string): string {
    if (t.length > s.length) return ""

    const tFreq: Record<string, number> = {}
    const windowFreq: Record<string, number> = {}

    for (const char of t) {
        tFreq[char] = (tFreq[char] || 0) + 1
    }

    let left: number = 0, right = 0
    let required = Object.keys(tFreq).length
    console.log(required)
    let formed: number = 0
    let minLen: number = Infinity
    let result: string = ""

    const isWindowValid = () => formed === required

    while (right < s.length) {
        const charRight = s[right]
        windowFreq[charRight] = (windowFreq[charRight] || 0) + 1

        if (tFreq[charRight] && windowFreq[charRight] === tFreq[charRight]) {
            formed++
        }

        while (isWindowValid() && left <= right) {
            if (right - left + 1 < minLen) {
                minLen = right - left + 1
                result = s.substring(left, right + 1)
            }

            const charLeft: string = s[left]
            windowFreq[charLeft]--
            if (tFreq[charLeft] && windowFreq[charLeft] < tFreq[charLeft]) {
                formed--
            }
            left++
        }
        right++
    }
    return result
};
function minWindow(s: string, t: string): string {
    if (t.length > s.length) return ""

    const tFreq: Map<string, number> = new Map()
    const windowFreq: Map<string, number> = new Map()

    for (const char of t) {
        tFreq.set(char, (tFreq.get(char) || 0) + 1)
    }

    let left: number = 0, right = 0, formed = 0
    let required: number = tFreq.size
    let minLength: number = Infinity
    let result: string = ""

    const isWindowValid = () => formed === required

    while (right < s.length) {
        const charRight = s[right]
        windowFreq.set(charRight, (windowFreq.get(charRight) || 0) + 1)

        if (tFreq.has(charRight) && windowFreq.get(charRight) === tFreq.get(charRight)) {
            formed++
        }

        while (isWindowValid() && left <= right) {
            if (right - left + 1 < minLength) {
                minLength = right - left + 1
                result = s.substring(left, right + 1)
            }

            const charLeft: string = s[left]
            windowFreq.set(charLeft, windowFreq.get(charLeft) - 1)
            if (tFreq.has(charLeft) && windowFreq.get(charLeft) < tFreq.get(charLeft)) {
                formed--
            }
            left++
        }
        right++
    }
    return result
};
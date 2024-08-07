function canBeValid(s: string, locked: string): boolean {
    if (s.length % 2 !== 0) return false

    let open = 0, flexible = 0

    for (let i = 0; i < s.length; i++) {
        if (locked[i] === '0') {
            flexible++;
        } else if (s[i] === '(') {
            open++
        } else {
            open--
        }
        if (open < 0) {
            if (flexible > 0) {
                flexible--
                open++
            } else {
                return false
            }
        }
    }

    let close: number = 0
    flexible = 0

    for (let i = s.length - 1; i >= 0; i--) {
        if (locked[i] === '0') {
            flexible++
        } else if (s[i] === ')') {
            close++
        } else {
            close--
        }
        if (close < 0) {
            if (flexible > 0) {
                flexible--
                close++
            } else {
                return false
            }
        }
    }
    return true
};
function isPalindrome(s: string): boolean {
    let left: number = 0
    let right: number = s.length - 1

    while (left < right) {
        while (left < right && !isAlphanumeric(s[left])) {
            left++
        }

        while (left < right && !isAlphanumeric(s[right])) {
            right--
        }

        if (left < right) {
            const charLeft = s[left].toLowerCase()
            const charRight = s[right].toLowerCase()

            if (charLeft !== charRight) {
                return false
            }

            left++
            right--
        }
    }

    return true
};

const isAlphanumeric = (char: string): boolean => {
    const code = char.charCodeAt(0)

    return (
        (code >= 48 && code <= 57) || 
        (code >= 65 && code <= 90) || 
        (code >= 97 && code <= 122)
    )
}
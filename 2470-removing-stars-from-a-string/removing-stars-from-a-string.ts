function removeStars(s: string): string {
    const stack: string[] = []

    for (const ch of s) {
        if (ch !== '*') {
            stack.push(ch)
        } else {
            stack.pop()
        }
    }

    return stack.join('')
};
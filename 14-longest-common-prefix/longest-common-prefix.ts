function longestCommonPrefix(strs: string[]): string {
    let prefix = strs[0]

    for (let i = 1; i < strs.length; i++) {
        const currentString = strs[i]

        while (currentString.indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1)
            if (prefix === '') return ''
        }
    }

    return prefix
};
/**
 * Encodes a list of strings to a single string.
 */
function encode(strs: string[]): string {
	let encodedString: string = ''

    for (const str of strs) {
        encodedString += `${str.length}#${str}`
    }

    return encodedString
};

/**
 * Decodes a single string to a list of strings.
 */
function decode(s: string): string[] {
	const decodedStrings: string[] = []
    let i = 0

    while (i < s.length) {
        let delimiterIndex = s.indexOf('#', i)
        if (delimiterIndex === -1)  {
            throw new Error('Invalid encoded string format')
        }

        const lengthStr = s.substring(i, delimiterIndex)
        const length = parseInt(lengthStr, 10)

        if (isNaN(length)) {
            throw new Error('Invalid length value in encoded string')
        }

        const start = delimiterIndex + 1
        const end = start + length
        const currentStr = s.substring(start, end)

        decodedStrings.push(currentStr)

        i = end
    }

    return decodedStrings
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */
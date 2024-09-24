function compress(chars: string[]): number {
    let write: number = 0
    let i: number = 0

    while (i < chars.length) {
        const currentChar: string = chars[i]
        let count: number = 0;

        while (i < chars.length && chars[i] === currentChar) {
            count++
            i++
        }

        chars[write] = currentChar
        write++

        if (count > 1) {
            const countStr = count.toString();
            for (const ch of countStr) {
                chars[write] = ch
                write++
            }
        }
    }

    return write
};
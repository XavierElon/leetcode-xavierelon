function minimizedStringLength(s: string): number {
    const uniqueChars = new Set([...s])
    return uniqueChars.size
};
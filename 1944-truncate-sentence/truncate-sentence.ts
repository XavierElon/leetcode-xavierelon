function truncateSentence(s: string, k: number): string {
    const words: string[] = s.split(' ')
    const truncatedWords: string[] = words.slice(0, k)
    return truncatedWords.join(' ')
};
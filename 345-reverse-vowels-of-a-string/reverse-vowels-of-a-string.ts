function reverseVowels(s: string): string {
    const vowels: Set<string> = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
    let arr: string[] = s.split('')
    let left: number = 0
    let right: number = s.length - 1

    while (left < right) {
        if (!vowels.has(arr[left])) left++;
        else if (!vowels.has(arr[right])) right--
        else {
            [arr[left], arr[right]] = [arr[right], arr[left]]
            right--
            left++
        }
    }
    return arr.join('')

};
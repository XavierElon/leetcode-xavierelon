function reverseVowels(s: string): string {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
    let arr = s.split('')
    let left: number = 0
    let right: number = arr.length - 1

    while (left < right) {
        if (!vowels.has(arr[left])) left++
        else if (!vowels.has(arr[right])) right--
        else {
            [arr[left], arr[right]] = [arr[right], arr[left]]
            left++
            right--
        }
    }
    return arr.join('')
};
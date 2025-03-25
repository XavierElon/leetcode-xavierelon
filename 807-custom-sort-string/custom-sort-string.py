class Solution:
    def customSortString(self, order: str, s: str) -> str:
        freq = Counter(s)
        res = []

        for char in order:
            res.append(char * freq[char])
            del freq[char]

        for char in freq:
            res.append(freq[char] * char)

        return ''.join(res)

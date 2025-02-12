class Solution:
    def customSortString(self, order: str, s: str) -> str:
        freq = Counter(s)
        res = []

        for char in order:
            if char in freq:
                res.append(char * freq[char])
                del freq[char]

        for char, count in freq.items():
            res.append(char * count)

        return "".join(res)
class Solution:
    def customSortString(self, order: str, s: str) -> str:
        freq = Counter(s)

        result = []

        for char in order:
            if char in freq:
                result.append(char * freq[char])
                del freq[char]

        for char, count in freq.items():
            result.append(char * count)

        return "".join(result)
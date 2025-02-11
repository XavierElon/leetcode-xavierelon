class Solution:
    def customSortString(self, order: str, s: str) -> str:
        freq = [0] * 26

        for char in s:
            freq[ord(char) - ord('a')] += 1

        result = []

        for char in order:
            index = ord(char) - ord('a')

            if freq[index] > 0:
                result.append(char * freq[index])
                freq[index] = 0

        for i in range(26):
            if freq[i] > 0:
                result.append(chr(i + ord('a')) * freq[i])

        return "".join(result)
class Solution:
    def validWordAbbreviation(self, word: str, abbr: str) -> bool:
        p1 = p2 = 0
        m, n = len(word), len(abbr)

        while p1 < m and p2 < n:
            if abbr[p2].isdigit():
                if abbr[p2] == '0':
                    return False

                shift = 0

                while p2 < n and abbr[p2].isdigit():
                    shift = shift * 10 + int(abbr[p2])
                    p2 += 1

                p1 += shift

            elif abbr[p2] != word[p1]:
                return False

            else:
                p1 += 1
                p2 += 1

        return p1 == m and p2 == n
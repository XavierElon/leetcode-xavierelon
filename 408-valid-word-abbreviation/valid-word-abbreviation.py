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

            elif word[p1] != abbr[p2]:
                return False

            else:
                p1 += 1
                p2 += 1
        
        print(f'p1 = {p1}')
        print(f'p2 = {p2}')
        print(f'm = {m}')
        print(f'n = {n}')

        return p1 == m and p2 == n
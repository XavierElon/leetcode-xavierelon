class Solution:
    def validWordAbbreviation(self, word: str, abbr: str) -> bool:
        p1 = p2 = 0

        while p1 < len(word) and p2 < len(abbr):
            if abbr[p2].isdigit():
                shift = 0
                if abbr[p2] == '0':
                    return False

                while p2 < len(abbr) and abbr[p2].isdigit():
                    shift = (shift * 10) + int(abbr[p2])
                    p2 += 1

                p1 += shift


            elif word[p1] != abbr[p2]:
                return False

            else:
                p1 += 1
                p2 += 1
            
        return p1 == len(word) and p2 == len(abbr)
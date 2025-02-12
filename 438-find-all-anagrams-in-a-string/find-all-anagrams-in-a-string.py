class Solution:
    def findAnagrams(self, s: str, p: str) -> List[int]:
        len_s, len_p = len(s), len(p)
        if len_s < len_p:
            return []
        
        result = []
        count_p = [0] * 26
        count_s = [0] * 26

        for i in range(len_p):
            count_p[ord(p[i]) - ord('a')] += 1
            count_s[ord(s[i]) - ord('a')] += 1

        if count_s == count_p:
            result.append(0)

        for i in range(len(p), len(s)):
            count_s[ord(s[i]) - ord('a')] += 1
            count_s[ord(s[i - len(p)]) - ord('a')] -= 1

            if count_s == count_p:
                result.append(i - len(p) + 1)

        return result
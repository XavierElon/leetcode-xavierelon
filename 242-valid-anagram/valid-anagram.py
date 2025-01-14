class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        table = [0] * 26

        for char in s:
            table[ord(char) - ord('a')] += 1

        for char in t:
            table[ord(char) - ord('a')] -= 1
            if table[ord(char) - ord('a')] < 0:
                return False
                
        return True
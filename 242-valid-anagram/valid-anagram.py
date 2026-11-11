class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        counts = [0] * 26
        base = ord('a')

        for cs, ct in zip(s, t):
            counts[ord(cs) - base] += 1
            counts[ord(ct) - base] -= 1
        
        return all(c == 0 for c in counts)

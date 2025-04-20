class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        
        diff = defaultdict(int)
        for cs, ct in zip(s, t):
            diff[cs] += 1
            diff[ct] -= 1

        return all(v == 0 for v in diff.values())
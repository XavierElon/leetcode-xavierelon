class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        m, n = len(word1), len(word2)
        res = []
      
        for i in range(max(m, n)):
            if i < m:
                res.append(word1[i])
            if i < n:
                res.append(word2[i])

        return "".join(res)
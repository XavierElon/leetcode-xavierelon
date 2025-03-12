class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        i = j = 0
        m, n = len(word1), len(word2)
        res = []
        count = 0

        while i < m and j < n:
            if count % 2 == 0:
                res.append(word1[i])
                i += 1
            else:
                res.append(word2[j]) 
                j += 1
            count += 1
        
        res.extend(word1[i:])
        res.extend(word2[j:])

        return "".join(res)
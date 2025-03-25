class Solution:
    def customSortString(self, order: str, s: str) -> str:
        freq_map = {}
        res = []

        for char in s:
            freq_map[char] = freq_map.get(char, 0) + 1

        for char in order:
            if char in freq_map:
                res.append(char * freq_map.get(char))
                del freq_map[char]
        
        for char in freq_map:
            res.append(char * freq_map[char])

        return ''.join(res)
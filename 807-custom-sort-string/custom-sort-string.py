class Solution:
    def customSortString(self, order: str, s: str) -> str:
        freq_map = defaultdict(int)
        
        for char in s:
            freq_map[char] += 1

        res = []

        for char in order:
            if char in freq_map:
                res.append(char * freq_map[char])
                del freq_map[char]

        for char in freq_map:
            res.append(char * freq_map[char])

        return ''.join(res)
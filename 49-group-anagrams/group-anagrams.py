class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        groups = defaultdict(list)

        for s in strs:
            counts = [0] * 26

            for ch in s:
                counts[ord(ch) - 97] += 1
            
            key = '#'.join(map(str, counts))
            groups[key].append(s)

        return list(groups.values())
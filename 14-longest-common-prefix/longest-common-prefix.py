class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        if not strs:
            return ""
        
        prefix = strs[0]

        for num in strs[1:]:
            while not num.startswith(prefix):
                prefix = prefix[:-1]
                if prefix == "":
                    return ""

        return prefix
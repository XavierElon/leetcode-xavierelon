class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        if not strs:
            return ''

        prefix = strs[0]

        for i in range(1, len(strs)):
            current_string = strs[i]

            while not current_string.startswith(prefix):
                prefix = prefix[:-1]
                if prefix == "":
                    return ""

        return prefix        
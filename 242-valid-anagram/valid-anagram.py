class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        freq_s_counter = Counter(s)
        freq_t_counter = Counter(t)

        return freq_s_counter == freq_t_counter
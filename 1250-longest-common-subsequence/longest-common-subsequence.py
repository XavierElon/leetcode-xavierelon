class Solution:
    def longestCommonSubsequence(self, text1: str, text2: str) -> int:
        prev_row = [0] * (len(text2) + 1)
        for i in range(len(text1) - 1, -1, -1):
            curr_row = [0] * (len(text2) + 1)
            for j in range(len(text2) - 1, -1, -1):
                if text1[i] == text2[j]:
                    curr_row[j] = 1 + prev_row[j + 1]

                else:
                    curr_row[j] = max(prev_row[j], curr_row[j+1])

            prev_row = curr_row
        return prev_row[0]


'''

i a e c
j
a 2 1 1 0
c 1 1 1 0
b 0 0 0 0
  0 0 0
'''
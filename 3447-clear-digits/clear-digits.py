class Solution:
    def clearDigits(self, s: str) -> str:
        answer_length = 0
        s = list(s)

        for char_index in range(len(s)):
            if s[char_index].isdigit():
                answer_length = max(answer_length - 1, 0)
            
            else:
                s[answer_length] = s[char_index]
                answer_length += 1

        s = s[:answer_length]

        return "".join(s)
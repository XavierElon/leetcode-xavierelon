class Solution:
    def maximumSwap(self, num: int) -> int:
        s = list(str(num))
        n = len(s)

        last_occurrence = {digit: i for i, digit in enumerate(s)}

        for i in range(n):
            current_digit_char = s[i]

            for char in '987654321':
                if char <= current_digit_char:
                    break
                if char in last_occurrence and last_occurrence[char] > i:
                    swap_idx = last_occurrence[char]
                    s[i], s[swap_idx] = s[swap_idx], s[i]

                    return int(''.join(s))

        return num
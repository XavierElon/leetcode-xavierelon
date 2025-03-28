class Solution:
    def maximumSwap(self, num: int) -> int:
        num_str = list(str(num))
        rightmost_index = [-1] * 10

        for i, digit in enumerate(num_str):
            rightmost_index[int(digit)] = i

        print(rightmost_index)

        for i, digit in enumerate(num_str):
            for j in range(9, int(digit), -1):
                if rightmost_index[j] > i:
                    num_str[i], num_str[rightmost_index[j]] = num_str[rightmost_index[j]], num_str[i]
                    return int("".join(num_str))

        return num
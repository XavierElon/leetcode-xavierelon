class Solution:
    def maximumSwap(self, num: int) -> int:
        num = [int(i) for i in str(num)]

        for i in range(len(num) - 1):
            m = max(num[i+1:])

            if num[i] < m:
                for j in range(len(num)-1, i, -1):
                    if num[j] == m:
                        break

                num[i], num[j] = num[j], num[i]
                break

        return int("".join([str(i) for i in num]))
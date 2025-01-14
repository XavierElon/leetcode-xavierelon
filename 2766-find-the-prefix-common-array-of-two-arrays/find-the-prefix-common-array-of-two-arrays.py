class Solution:
    def findThePrefixCommonArray(self, A: List[int], B: List[int]) -> List[int]:
        n = len(A)
        prefix_common_array = [0] * n

        for current_index in range(n):
            common_count = 0

            for a_index in range(current_index + 1):
                for b_index in range(current_index + 1):
                    if A[a_index] == B[b_index]:
                        common_count += 1
                        break

            prefix_common_array[current_index] = common_count

        return prefix_common_array
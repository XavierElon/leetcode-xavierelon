class SparseVector:
    def __init__(self, nums):
        # Convert dense vector to sparse representation (index, value) for non-zero elements
        self.index_to_num = [(i, num) for i, num in enumerate(nums) if num != 0]

    def binary_search(self, index_to_num, target_index):
        # Binary search to find value at target_index, return 0 if not found
        left = 0
        right = len(index_to_num) - 1
        while left <= right:
            mid = (right + left) // 2
            if index_to_num[mid][0] == target_index:
                return index_to_num[mid][1]
            if index_to_num[mid][0] < target_index:
                left = mid + 1
            else:
                right = mid - 1
        return 0

    def dotProduct(self, vec):
        # Calculate dot product using binary search on the larger vector
        sum = 0
        if len(self.index_to_num) < len(vec.index_to_num):
            for index, value in self.index_to_num:
                sum += value * self.binary_search(vec.index_to_num, index)
        else:
            for index, value in vec.index_to_num:
                sum += value * self.binary_search(self.index_to_num, index)
        return sum
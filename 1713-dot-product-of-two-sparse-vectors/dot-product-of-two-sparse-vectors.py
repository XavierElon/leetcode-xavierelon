class SparseVector:
    def __init__(self, nums):
        # Store only non-zero values with their indices
        self.is_sparse = True
        self.nonzeros = {}
        self.original = nums  # Keep original vector for dense-sparse operations
        
        # Count non-zeros to determine if this is actually sparse
        non_zero_count = 0
        for i, num in enumerate(nums):
            if num != 0:
                self.nonzeros[i] = num
                non_zero_count += 1
        
        # If more than half of elements are non-zero, it's not very sparse
        self.is_sparse = non_zero_count < len(nums) / 2
    
    def dotProduct(self, vec):
        # Case 1: Both vectors are sparse - use hashmap approach
        if self.is_sparse and vec.is_sparse:
            result = 0
            # Iterate through the smaller hash map for efficiency
            if len(self.nonzeros) <= len(vec.nonzeros):
                for index, val in self.nonzeros.items():
                    if index in vec.nonzeros:
                        result += val * vec.nonzeros[index]
            else:
                for index, val in vec.nonzeros.items():
                    if index in self.nonzeros:
                        result += val * self.nonzeros[index]
            return result
            
        # Case 2: Only one vector is sparse - use the sparse one to drive calculation
        elif self.is_sparse:
            # Current vector is sparse, other is dense
            result = 0
            for index, val in self.nonzeros.items():
                if index < len(vec.original):
                    result += val * vec.original[index]
            return result
        else:
            # Other vector is sparse, current one is dense
            result = 0
            for index, val in vec.nonzeros.items():
                if index < len(self.original):
                    result += self.original[index] * val
            return result
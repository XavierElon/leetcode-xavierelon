class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        sorted_array = self.build_sorted(nums1, nums2)
        total = len(nums1) + len(nums2)
        is_even = (total % 2) == 0

        if is_even:
            mid = total // 2
            return (sorted_array[mid-1] + sorted_array[mid]) / 2
        else:
            return sorted_array[total // 2]
    
    def build_sorted(self, nums1, nums2):
        sorted_array = []

        p1, p2 = 0, 0
        while p1 < len(nums1) or p2 < len(nums2):
            p1_val = float('inf') if p1 >= len(nums1) else nums1[p1]
            p2_val = float('inf') if p2 >= len(nums2) else nums2[p2]

            if p1_val < p2_val:
                sorted_array.append(p1_val)
                p1 += 1
            else:
                sorted_array.append(p2_val)
                p2 += 1
        return sorted_array
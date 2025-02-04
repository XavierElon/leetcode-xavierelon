# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
        arr=[]
        def Trav(x):
            if x==None:
                arr.append(0)
            if x.left:
                Trav(x.left)  
            if x:
                arr.append(x.val)
            if x.right:
                Trav(x.right)
        Trav(root)
        return arr[k-1]

          
            

       
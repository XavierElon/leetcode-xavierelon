class Solution:
    def beautifulSplits(self, nums: List[int]) -> int:
        ns = "".join((chr(48+n) for n in nums))  # list -> str
        bc = 0  # beautiful counter init
        for i in range(1, len(ns)-1):  # first split
            if ns[i:2*i] == ns[:i]:  # first satisfies
                bc += len(ns)-2*i  # second does not matter
                for j in range(i+1, 2*i):  # special case!!!
                    if ns[j:2*j-i] == ns[i:j]:
                        bc += 1
            else:  # first does not satisfy
                for j in range(i+1, len(ns)):
                    if ns[j:2*j-i] == ns[i:j]:
                        bc += 1
        return bc
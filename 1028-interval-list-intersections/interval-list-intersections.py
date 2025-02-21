class Solution:
    def intervalIntersection(self, firstList: List[List[int]], secondList: List[List[int]]) -> List[List[int]]:
        if not firstList or not secondList:
            return []

        p1 = p2 = 0

        res = []

        while p1 < len(firstList) and p2 < len(secondList):
            start1, end1 = firstList[p1]
            start2, end2 = secondList[p2]

            if start1 > end2:
                p2 += 1
            elif start2 > end1:
                p1 += 1
            else:
                res.append([max(start1, start2), min(end1, end2)])

                if end1 > end2:
                    p2 += 1
                else:
                    p1 += 1

        return res
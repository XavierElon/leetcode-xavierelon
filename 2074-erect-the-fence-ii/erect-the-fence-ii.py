class Solution:
    def outerTrees(self, trees: List[List[int]]) -> List[float]:
        def distance(p1, p2):
            return ((p1[0]-p2[0])**2 + (p1[1]-p2[1])**2)**0.5
        def average(p1, p2):
            return ((p1[0]+p2[0])/2, (p1[1]+p2[1])/2)
        def base_case(points):
            if not points:
                return (0, 0), 0
            if len(points) == 1:
                return points[0], 0
            if len(points) == 2:
                p1, p2 = points[0], points[1]
                return average(p1, p2), distance(p1, p2)/2
            if len(points) == 3:
                p1, p2, p3 = points[0], points[1], points[2]
                (x1, y1), (x2, y2), (x3, y3) = p1, p2, p3
                A, C = 2*(x1-x2), 2*(x2-x3)
                B, D = 2*(y1-y2), 2*(y2-y3)
                P = x1**2 + y1**2 - x2**2 - y2**2
                Q = x2**2 + y2**2 - x3**2 - y3**2
                x = (D*P-B*Q)/(A*D-B*C)
                y = (C*P-A*Q)/(B*C-A*D)
                return (x, y), distance(p1, (x, y))

        points = list(set((x, y) for x, y in trees)) # remove duplicates
        length = len(points)
		# We use indices to get points instead of passing a list
		# to avoid copying cost or dealing with backtracking
		# boundary is a list of points that must be on the boundary
		# Notice that boundary could be different for different i,
		# so it must be constructed everytime we add a new point
        def welzl(i, boundary):
            if i == length or len(boundary) == 3:
                return base_case(boundary)
            center, radius = welzl(i+1, boundary)
            if distance(points[i], center) <= radius:
                return center, radius
            return welzl(i+1, boundary+[points[i]])

        center, radius = welzl(0, [])
        return [center[0], center[1], radius]
class UnionFind:
    def __init__(self):
        self.parent = {}

    def find(self, x):
        # If x is not in parent, add it and make it its own parent
        if x not in self.parent:
            self.parent[x] = x
        
        # Path compression
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]

    def union(self, x, y):
        # Ensure both x and y are in the parent dictionary
        root_x = self.find(x)
        root_y = self.find(y)
        
        # If they are not already in the same set, union them
        if root_x != root_y:
            self.parent[root_x] = root_y

class Solution:
    def accountsMerge(self, accounts: List[List[str]]) -> List[List[str]]:
        uf = UnionFind()
        email_to_name = {}

        # First pass: find connections between accounts
        for index, acc in enumerate(accounts):
            name = acc[0]
            for email in acc[1:]:
                if email in email_to_name:
                    # Union the current account with the account that shares this email
                    uf.union(index, email_to_name[email])
                else:
                    # Map this email to the current account
                    email_to_name[email] = index

        # Group emails by their root account
        email_group = defaultdict(list)
        for email, index in email_to_name.items():
            leader = uf.find(index)
            email_group[leader].append(email)

        # Construct result
        res = []
        for i, emails in email_group.items():
            name = accounts[i][0]
            res.append([name] + sorted(emails))

        return res
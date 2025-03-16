class Solution:
    def accountsMerge(self, accounts: List[List[str]]) -> List[List[str]]:
        adj_list = defaultdict(list)

        for account in accounts:
            emails = account[1:]
            canonical = emails[0]
            for email in emails[1:]:
                adj_list[canonical].append(email)
                adj_list[email].append(canonical)

        visited = set()

        def dfs(email, email_list):
            visited.add(email)
            email_list.append(email)
            for neighbor in adj_list[email]:
                if neighbor not in visited:
                    dfs(neighbor, email_list)
        
        merged = []

        for account in accounts:
            emails = account[1:]
            if emails[0] in visited:
                continue
            email_list = []
            dfs(emails[0], email_list)
            merged.append([account[0]] + sorted(email_list))

        return merged
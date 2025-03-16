class Solution:
    def accountsMerge(self, accounts: List[List[str]]) -> List[List[str]]:
        adj_list = defaultdict(list)

        for account in accounts:
            emails = account[1:]
            canonical = emails[0]
            for email in emails[1:]:
                adj_list[email].append(canonical)
                adj_list[canonical].append(email)

        visited = set()

        def dfs(email, same_emails):
            visited.add(email)
            same_emails.append(email)
            for neighbor in adj_list[email]:
                if neighbor not in visited:
                    dfs(neighbor, same_emails)

        merged = []

        for account in accounts:
            emails = account[1:]
            if emails[0] in visited:
                continue
            same_emails = []
            dfs(emails[0], same_emails)
            merged.append([account[0]] + sorted(same_emails))

        return merged

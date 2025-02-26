class Solution:
    def dfs(self, adjs: dict[str, list[str]], visited: set[str], same_emails: list[str], curr_email: str) -> None:
        visited.add(curr_email)
        same_emails.append(curr_email)

        for adj in adjs[curr_email]:
            if adj not in visited:
                self.dfs(adjs, visited, same_emails, adj)

    def accountsMerge(self, accounts: list[list[str]]) -> list[list[str]]:
        # Build adjacency list
        adjs = {}
        for emails in accounts:
            first_email = emails[1]
            # Initialize adjacency list for each email if not present
            if first_email not in adjs:
                adjs[first_email] = []
            # Connect first email with subsequent emails
            for i in range(2, len(emails)):
                email = emails[i]
                if email not in adjs:
                    adjs[email] = []
                adjs[first_email].append(email)
                adjs[email].append(first_email)

        # Merge accounts using DFS
        result = []
        visited = set()
        for emails in accounts:
            first_email = emails[1]
            if first_email not in visited:
                same_emails = [emails[0]]  # Start with the name
                self.dfs(adjs, visited, same_emails, first_email)
                # Sort emails (excluding the name at index 0)
                same_emails[1:] = sorted(same_emails[1:])
                result.append(same_emails)

        return result
class TrieNode:
    def __init__(self):
        self.children = collections.defaultdict(TrieNode)
        self.is_word = False

class Trie:
    def __init__(self):
        self.root = TrieNode()
    
    def insert(self, word):
        node = self.root
        for c in word:
            node = node.children[c]
        node.is_word = True

class Solution:
    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:
        trie = Trie()
        for w in words:
            trie.insert(w)
            
        m, n = len(board), len(board[0])
        res = []
        for i in range(m):
            for j in range(n):
                paths = []
                path = ""
                self.dfs(board, i, j, trie.root, path, paths)
                res += paths
        return res
    
    def dfs(self, board, row, col, node, path, paths):
        # match words starting from node of the trie, board starting from (row, col)
        if node.is_word:
            paths.append(path)
			# set to False so not to repeat the same word
            node.is_word = False
        
        m, n = len(board), len(board[0])
		# similar to two pointers: here is to check if pointer for board reaches its end, or not a match
        if row < 0 or row >=m or col < 0 or col >= n or board[row][col] not in node.children:
            return 
        
		# This is similar to 2 pointers: now a match is found, move the pointer for trie and pointer for board
        tmp = board[row][col]
        board[row][col] = '#'
        dirs = [(1, 0), (-1, 0), (0, 1), (0, -1)]
        for d in dirs:
            r, c = row + d[0], col + d[1]
            self.dfs(board, r, c, node.children[tmp], path + tmp, paths)
        board[row][col] = tmp
        
        # pruning: if it is a leaf and a matched word is found for it already, pop it to decrease trie size
        if len(node.children[tmp].children) == 0:
            del node.children[tmp]
function matchString(s: string, sub: string, idx: number, map: Record<any, any>): boolean {
  for(let i = 0; i < sub.length; i++) {
    if(s[idx + i] === sub[i]) continue;
    if(map[s[idx + i]] && map[s[idx + i]][sub[i]]) continue;
    return false;
  }
  return true;
}

function matchReplacement(s: string, sub: string, mappings: string[][]): boolean {
  const map = {};
  for (let i = 0; i < mappings.length; i++) {
    const values = mappings[i];
    map[values[1]] === undefined
      ? map[values[1]] = { [values[0]]: true }
      : map[values[1]][values[0]] = true;
  }

  for(let i = 0; i < s.length; i++) {
    if(matchString(s, sub, i, map)) return true;
  }
  return false;
};
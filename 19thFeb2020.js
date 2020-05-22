function generateParenthesis(n) {
  let possibleCombos = []

  helper(n, n, '', possibleCombos)
  
  return possibleCombos
}

const helper = (opening, closing, str, ans) => {
  if (opening === 0 && closing === 0) {
    ans.push(str)
  } else {
    if (closing > 0 && opening < closing) {
  helper(opening, closing -1, str+ ")", ans)
    }
    if (opening > 0) {
      helper(opening -1, closing, str+"(", ans)
    }

    
  }

  
}

const groupAnagrams = (strs) => {
  const map = {}

  for (i = 0; i < strs.length; str++){
    let key = strs[i].split('').sort().join('')
    map[key] ? map[key].push(str[i]) : map[key] = [str[i]]
  }
  return Object.values(map)
}

const groupAnagrams = strs => {
    const map = {};
    strs.forEach(s => {
        const key = new Array(28).fill(0);
        for (c of s) key[c.charCodeAt(0) - 97]++;
        map[key] ? map[key].push(s) : map[key] = [s];
    })
    return Object.values(map);
};

var allPathsSourceTarget = function(graph) {
    let adj = {}
    let target = graph.length - 1

    // build adjacency list
    for (let i = 0; i < graph.length; i++) {
        adj[i] = graph[i]
    }
    
    let ans = []
    let dfs = (node, res = []) => {        
        if (node === target) {
            ans.push(res)
            return
        }
        
        for (let item of adj[node]) {
            dfs(item, res.concat(item))
        }
        return res
    }

    dfs(0, [0])

    return ans
};
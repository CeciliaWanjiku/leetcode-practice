//886. Possible Bipartition
const possiblePartitions = (n, dislikes) => {
  const groupList = new Array(n + 1).fill(0)
  const enemyList = new Array(n + 1).fill(0).map(() => new Array())
  
  for (let peeps of dislikes) {
    const p1 = peeps[0], p2 = peeps[1]
    enemyList[p1].push(p2)
    enemyList[p2].push(p2)
  }

  groupList[1] = 1

  const findGroup = (person) => {
    for (let i = 0; i < enemyList[person].length; i++){
      const enemy = enemyList[person][i]

      if (groupList[enemy] == groupList[person]) {
        return false
      }
      if (groupList[enemy] !== 0) {
        continue;
      }
      if (groupList[person] == 1) {
        groupList[enemy] = 2
      } else {
        groupList[person] = 1
      }
      if (!findGroup(enemy)) {
        return false
      }
    }
    return true
  }

  for (let i = 1; i <= n; i++){
    if (!findGroup(i)) {
      return false
    }
  }
  return true
}

var validTree = function(n, edges) {
   let map = new Array (n+1).fill(0).map(() => new Array())
   
   if(edges.length !== n-1){
       return false
   }
   
   for(let edge of edges){
       const edge1 = edge[0], edge2 = edge[1]
       map[edge1].push(edge2)
       map[edge2].push(edge1)
   }
    let seen = new Set()
    const dfs = (edge, parent) => {
        if(seen.has(edge)){
            return false
        }
        seen.add(edge)
        map[edge].forEach((neigh) =>{
            if(edge !== neigh){
               let result = dfs(neigh, edge)
               if(!result){
                   return false
               }
            }
            
            
        })
        return true
    }
    return dfs(0, -1) && seen.size == n
    
};

var countComponents = function(n, edges) {
    const adjList = new Array(n+1).fill(0).map(() => new Array())
    
    for(let edge of edges){
        const edge1 = edge[0], edge2 = edge[1]
        adjList[edge1].push(edge2)
        adjList[edge2].push(edge1)
    }
    
    let visited = new Set()
    const dfs = (node) => {
        if(!visited.has(node)){
            visited.add(node)
            adjList[node].forEach((neigh) => {
                if(!visited.has(neigh)){
                    dfs(neigh)
                }
            })
        }
    }
    let count = 0
    for(let i = 0; i<n; i++){
        if(!visited.has(i)){
            dfs(i)
            count++   
        }   
    }
    return count
};

//328. Odd Even Linked List
var oddEvenList = function(head) {
    if(!head){
        return null
    }
    let oddHead = head, evenHead = head.next
    let even = evenHead, odd = oddHead
    while(even && even.next){
        odd.next = even.next
        odd = odd.next
        even.next = odd.next
        even = even.next
    }
    odd.next = evenHead
    return oddHead
    
};
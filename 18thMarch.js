var countComponents = function(n, edges) {
   let map = {}
   let visited = {}
   let count = 0
   
   for(let i=0; i<n; i++){
       map[i] = []
   }
   
   for(let edge of edges){
       let key = edge[0]
       let val = edge[1]
       if(map[key]){
           map[key].push(val)
       }else {
           map[key] = [val]
       }
       if(map[val]){
           map[val].push(key)
       }else {
           map[val] = [key]
       }
   }
    console.log(map)
    const dfs = (v, map, visited) => {
        if(v in visited){
            return  
        }
        visited[v] = true  
        const neigh = map[v]
        console.log(neigh, v)
        for(let n = 0; n<neigh.length; n++){
            dfs(neigh[n], map, visited)

        }
}

for(let i = 0; i<n; i++){
    if(!visited[i]){
        count++
        dfs(i, map, visited)
    }
    
}

return count
}

//topological sort //course schedule
var canFinish = function(numCourses, prerequisites) {
    let indeg = new Array(numCourses).fill(0)
    let sorted = []
    let q = []
    let graph = {}
    
    for(let edge of prerequisites){
        const e = edge[0]
        const v = edge[1]
        
        if(graph[v]){
            graph[v].push(e)
        }else {
            graph[v] = [e]
        }
        indeg[e]++
    }
    
    for(let i = 0; i<indeg.length; i++){
        if(indeg[i] == 0){
            q.push(i)    
        }
    }
    
    console.log(indeg)
    console.log(q)
    
    while(q.length>0){
        let curr = q.shift()
        if(graph[curr]){
            for(let i of graph[curr]){
                indeg[i]--
                if(indeg[i]==0){
                    q.push(i)
                }
            }
        }
        sorted.push(curr)
    }
    console.log(">>",sorted)
    return numCourses === sorted.length
};

var canFinish = function(numCourses, prerequisites) {
  const graph = createGraph(numCourses, prerequisites);
  const completed = new Set();
  for (let i = 0; i < numCourses; i++) {
    if (!completed.has(i) && hasCycle(graph, i, completed)) {
      return false;
    }
  }
  return true;
};

function hasCycle(graph, u, completed, visited = new Set()) {
  if (completed.has(u)) {
    return false;
  }
  if (visited.has(u)) {
    return true;
  }
  visited.add(u);
  for (const v of graph[u]) {
    if (hasCycle(graph, v, completed, visited)) {
      return true;
    }
  }
  visited.delete(u);
  completed.add(u);
  return false;
}

function createGraph(numCourses, prerequisites) {
  const graph = new Array(numCourses).fill(null).map(() => []);
  for (const [u, v] of prerequisites) {
    graph[u].push(v);
  }
    console.log(graph)
  return graph;
}

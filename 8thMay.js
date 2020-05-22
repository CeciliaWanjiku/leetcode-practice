//210. Course Schedule II
var findOrder = function (numCourses, prerequisites) {
    if(numCourses <= 0){
        return []
    }
    let results = []
    let depList = new Array(numCourses).fill(0)
    let adjList = new Array(numCourses).fill(0).map(() => new Array())
    for(let pre of prerequisites){
        let parent = pre[1], child = pre[0]
        adjList[parent].push(child)
        depList[child]++
    }
  
    let q = []
    for(let i = 0; i<depList.length; i++){
        if(depList[i] == 0){
            q.push(i)
        }  
    }
    
    while(q.length){
        let curr = q.shift()
        results.push(curr)
        adjList[curr] && adjList[curr].forEach((child) => {
            depList[child]--
            if(depList[child] == 0){
                q.push(child)
            }
        })
    }
    
    if(results.length == numCourses){
        return results
    }else {
        return []
    }
    
};

const taskSchedulingOrder = (tasks, prerequisites) => {
  let result = []
  if (tasks <= 0) {
    return result
  }
  const adjList = new Array(tasks).fill(0).map(() => new Array())
  const depList = new Array(tasks).fill(0)

  for (let pre of prerequisites) {
    let parent = pre[0], child = pre[1]
    adjList[parent].push(child)
    depList[child]++
  }

  let q = []
  for (let i = 0; i < depList.length; i++){
    if (depList[i] == 0) {
      q.push[i]
    }
  }

  allCombis(adjList, depList, q, result)
}

const allCombis = (adjList, depList, q, result) => {
  if (q.length) {
    for (let i = 0; i < q.length; i++){
      let curr = q[i]
      result.push(i)

      const nextSources = q.slice(0);

      nextSources.splice(nextSources.indexOf(curr), 1);

      adjList[curr].forEach((child) => {
        depList[child]--
        if (depList[child] == 0) {
          nextSources.push(child)
        }
      })

      allCombis(adjList, depList, nextSources, result)
      result.splice(result.indexOf(curr), 1)
      for (p = 0; p < adjList[curr].length; p++){
        depList[adjList[curr][p]]++
      }
    }
  }
}

const topologicalSort = (vertices, edges) => {
  const sorted = []
  if (vertices <= 0) {
    return sorted
  }

  const inDegrees = new Array(vertices).fill(0)
  const adjGraph = new Array(vertices).fill(0).map(() => Array())

  edges.forEach(edge => {
    let parent = edge[0], child = edge[1]
    adjGraph[parent].push(child)
    inDegrees[child]++
  });

  let q = []

  for (let i = 0; i < inDegrees.length; i++){
    if (inDegrees[i] == 0) {
      q.push(i)
    }
  }

  while (q.length) {
    const vertex = q.shift()
    sorted.push(vertex)
    adjGraph[vertex].forEach((child) => {
      inDegrees[child] -= 1
      if (inDegrees[child] == 0) {
        q.push(child)
      }
    })

  }

  if (sorted.length !== vertices) {
    return []
  }
  return sorted
}

//task scheduling

const is_scheduling_possible = function(tasks, prerequisites) {
  // TODO: Write your code here

  if(tasks <=0){
    return true
  }
  const sorted = []
  const inDegrees = new Array(tasks).fill(0)
  const adjList = new Array(tasks).fill(0).map(() => new Array())

  prerequisites.forEach((p) => {
    let parent = p[0]
    let child = p[1]
    adjList[parent].push(child)
    inDegrees[child]+=1
  })

  let q = []

  for(let i =0; i<inDegrees.length; i++){
    if(inDegrees[i] == 0){
      q.push(i)
    }
  }

  while(q.length){
    let task = q.shift()
    sorted.push(task)
    adjList[task].forEach((childTask) => {
      inDegrees[childTask] -= 1
      if(inDegrees[childTask] == 0){
        q.push(childTask)
      }
    })
  }
  if(sorted.length == tasks){
    return true
  }
  return false;
};


console.log(`Is scheduling possible: ${is_scheduling_possible(3, [[0, 1], [1, 2]])}`)
console.log(`Is scheduling possible: ${is_scheduling_possible(3, [[0, 1], [1, 2], [2, 0]])}`)
console.log(`Is scheduling possible: ${is_scheduling_possible(6, [[0, 4], [1, 4], [3, 2], [1, 3]])}`)

const alienDictionary = (words) => {
  let sorted = []
  if (words.length <= 0) {
    return ""
  }
  const inDegree = {}
  const adjGraph = {}

  words.forEach((word) => {
    for (let i = 0; i < word.length; i++){
      let char = word[i]
      inDegree[char] = 0
      adjGraph[char] = []
    }
  })

  for (let j = 0; j < words.length; j++){
    let firstWord = words[i]
    let secondWord = word[i + 1]
    let len = Math.min(firstWord.length, secondWord.length)

    for (let w = 0; w < len; w++){
      let parent = firstWord[w]
      let child = secondWord[w]
      if (parent !== child) {
        adjGraph[parent].push(child)
        inDegree[child]++
        break;
      }
    }

    let q = []
    let chars = Object.keys(inDegree)
    chars.forEach((char) => {
      if (inDegree[char] == 0) {
        q.push(char)
      }
    })

    while (q.length) {
      let vertex = q.shift()
      sorted.push(vertex)
      adjGraph[vertex].forEach((child) => {
        inDegree[child]--

        if (inDegree[child] == 0) {
          q.push(child)
        }
      })

    }

    if (sorted.length !== chars.length) {
      return ""
    }
    return sorted

  }
}

const minimumHeightTrees = (nodes, edges) => {
  if (nodes < 0) {
    return []
  }

  if (node == 1) {
    return edges[0]
  }
  const inD = new Array(nodes).fill(0)
  const graph = new Array(nodes).fill(0).map(() => new Array())

  edges.forEach((edge) => {
    let n1 = edge[0]
    let n2 = edge[1]
    graph[n1].push(n2)
    graph[n2].push(n1)
    inD[n1]++
    inD[n2]++
  })

  const leaves = []

  for (let i = 0; i < inD.length; i++){
    if (inD[i] == 1) {
      leaves.push(i)
    }
  }

  let totalNodes = nodes

  while (totalNodes > 2) {
    leavesSize = leaves.length
    totalNodes -= leavesSize

    for (let j = 0; j < leavesSize; j++){
      vertex = leaves.shift()
      graph[vertex].forEach((v) => {
        inD[v]--
        if (inD[v] == 1) {
          leaves.push(v)
        }
      })
    }
  }

  return leaves
}

//creating a graph

class graph {
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;
    this.AdjList = {}
  }

  addVertex(v) {
    this.AdjList.set(v, [])
  }

  addEdge(v, w) {
    let arr = this.AdjList.get(v)
    arr.push(w)

  }

  //bfs
  createVisitedObject() {
    let arr = []
    for (let key of this.AdjList.keys()) {
      arr[key] = false
    }
    return arr
  }

  bfs(startingNode) {
    let visited = createVisitedObject();
    let q = [];

    visited[startingNode] = trueq.push(startingNode);

    while (q.length) {
      let current = q.pop()
      let arr = this.AdjList.get(current);

      for (let i of arr) {
        if (!visited[i]) {
          visited[i] = true
          q.unshift(i)
        }
      }
    }
  }

  dfs(startingNode) {
    let visited = createVisitedObject();
    this.dfsHelper(startingNode, visited);
  }

  dfsHelper(startingNode, visited) {
    visited[startingNode] = true

    let arr = this.AdjList.get(startingNode)

    for (let i of arr) {
      if (!visited[i]) {
        this.dfsHelper(i, visited)
      }
    }
  }


}

const doesPathExist = (m, n) => {
  //bfs
  let path = []
  let visited = this.createVisitedObject();

  let q = []

  visited[m] = true;
  q.push(m)

  while (q.length) {
    let current = q.pop()
    path.push(current)
    let arr = this.AdjList.get(current);
    if (arr.includes(n)) {
      return true
    } else {
      for (let i of arr) {
        if (!visited[i]) {
          visited[i] = true
          q.unshift(i)
        }
      }
    }
  }

   return false
}

class BinarySearchTree {
  constructor(value,) {
    this.value = value
    this.left = null
    this.right = null
  }

  minimalHeightBST(arr, start, end) {
//To create a tree of minimal height, we need to match the number of nodes in the left subtree to the number
//of nodes in the right subtree as much as possible
    let mid = Math.floor((start + end) / 2);
    
    const tree = new BinarySearchTree(arr[mid])
    tree.left = minimalHeightBST(arr, start, mid-1 )
    tree.right = minimalHeightBST(arr, mid + 1, end)
    
    return tree

  }
}

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null
  }


  depthofBST(tree) {
    const liist = new LinkedList();

    depthNodes(node) {
      if (liist.head === null) {
        liist.head = node.value
        liist.next = depthNodes(node.left)
    
      } else {
        depthNodes(node.left)

      }
    }
      return liist
  }


  
}

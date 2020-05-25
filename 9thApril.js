const circularArrayLoops = (arr) => {
  for (let i = 0; i < arr.length; i++){
    isFoward = arr[i] >= 0
    let slow = i
    let fast = i

    while (true) {
      slow = nextMove(arr, isFoward, slow)
      fast = nextMove(arr, isFoward, fast)

      if (fast !== -1) {
        fast = nextMove(arr, isFoward, fast)
        
      }

      if (slow == -1 || fast == -1 || slow == fast) {
        break
      }
      if (slow !== -1 && slow == fast) {
        return true
      }
    }
    return false
  }
}

const nextMove = (arr, isFoward, currIndex) => {
  let direction = arr[currIndex] >= 0

  if (isFoward !== direction) {
    return -1
  }

  nextIndex = (currIndex + arr[currIndex]) % arr.length

  if (nextIndex < 0) {
    nextIndex += arr.length
    
  }

  if (nextIndex == currIndex) {
    nextIndex = -1
  }
  return nextIndex
}

const splitWord = (str, dl) => {
  let words = []

  let word = ""

  for (let char of str) {
    if (char !== dl) {
      word+= char
    } else {
      if (word.length) {
        words.push(word)
        word = []
      }
    }
  }
  return words
}

console.log(splitWord("geeks;for;geeks", ";"))

import Heap from './collections/heap';

class MedianOfAstream {
  constructor() {
    this.maxHeap = new Heap([], null, ((a, b) => a - b))
    this.minHeap = new Heap([], null, ((a, b) => b - a))
    
  }

  insertNum(num) {
    if (this.maxHeap.length == 0 || this.maxHeap.peek() >= num) {
      this.maxHeap.push(num)
    } else {
      this.minHeap.push(num)
    }

    if (this.maxHeap.length > this.minHeap.length + 1) {
      this.minHeap.push(this.maxHeap.pop())
    } else if (this.maxHeap < this.minHeap.length) {
      this.maxHeap.push(this.minHeap.pop())
    }
  }

  findMedian() {
    if (this.minHeap.length === this.maxHeap.length) {
      let avg = this.minHeap.peek() + this.maxHeap.peek() / 2
      return avg
    } else {
      return this.maxHeap,peek()
    }
  }
}


class slidingWindowMedian {
  constructor() {
    this.maxHeap = new Heap([], null, ((a, b) => a - b))
    this.minHeap = new Heap([], null, ((a, b) => b - a))

  }

  find_sliding_window_median(nums, k) {
    const reult = new Array(nums.length - k + 1).fill(0.0);

    for (let i = 0; i < nums.length; i++){
      if (this.maxHeap.length == 0 || nums[i] <= this.maxHeap.peek()) {
        this.maxHeap.push(nums[i])
      } else {
        this.minHeap.push(nums[i])
      }

      this.rebalance_heaps()

      if (this.maxHeap.length == this.minHeap.length) {
        result[i-k+1] = this.maxHeap.peek() +this.minHeap.peek() / 2
      } else {
        result[i-k+1] = this.maxHeap.peek()
      }
    }

    rebalance_heaps() {
      if (this.maxHeap.length > this.minHeap + 1) {
        this.minHeap.push(this.maxHeap.pop())
      } else if (this.maxHeap.length < this.minHeap.length) {
        this.maxHeap.push(this.minHeap.pop())
      }
    }
  }

}

const reverse_sublist = (head, q, p) => {
  if (p == q) {
    return head
  }

  let curr = head
  let prev = null

  let i = 0

  while (curr && i < p - 1) {
    prev = curr
    curr = curr.next
    i++
  }

  const preP = prev
  const lastNode = curr

  i = 0

  while (curr && i < q - p + 1) {
    let temp = curr.next
    curr.next = prev
    prev = curr
    curr = temp
    i++
  }

  if (preP) {
    preP = prev
  } else {
    head = prev
  }

  lastNode.next = curr
  return head
}


//92. Reverse Linked List II
var reverseBetween = function(head, m, n) {
    if(m == n){
        return head
    }
    
    let prev = null
    let curr = head
    
    let i = 0
    while(curr && i< m-1){
        prev = curr
        curr = curr.next
        i++
    }
    console.log(prev, curr)
    let pre = prev
    let after = curr
    i = 0
    
    while(curr && i< n-m+1){
        let temp = curr.next
        curr.next = prev
        prev = curr
        curr = temp
        i++
    }
    if(pre){
        console.log(pre, prev)
        pre.next = prev
        
    }else {
        head = prev
    }
    after.next = curr
    return head  
};


const rotate = (head, rotations) => {
  if (!head || head.next || rotations <= 0) {
    return head
  }
  let last_node = head
  let len = 1

  while (last_node.next !== null) {
    last_node = last_node.next
    len++
  }

  last_node.next = head
  rotations %= len
  skipLength = len - rotations

}

var minDepth = function(root) {
    let height = 0
    if(!root){
        return 0
    }
    let q = [root]
    
    while(q.length){
        let len = q.length
        height++
        for(let i = 0; i<len; i++){
            let curr = q.shift()
            if(!curr.left && !curr.right){
                return height
            }
            if(curr.left){
                q.push(curr.left)
            }
            if(curr.right){
                q.push(curr.right)
            }
        }
    }
    return height
};


//116. Populating Next Right Pointers in Each Node
var connect = function(root) {
    if(!root) return root
    
    let q = [root]
    let prev = null
    
    while(q.length){
        let len = q.length
        for(let i = 0; i<len; i++){
            let curr = q.shift()
            if(prev){
                prev.next = curr
            }
            prev= curr
            
            if(curr.left){
                q.push(curr.left)
            }
            if(curr.right){
                q.push(curr.right)
            }
        }
        prev = null
    }
    return root

};

const pathWithSeq = (root, sequence) => {
  if (!root) {
    return false
  }
  let len = sequence.length

  const dfs = (node, index) => {
    if (!node) {
      return
    }

    if (index >= len || node.value !== sequence[index]) {
      return false
    }
    if (!node.left && !node.right && node.val == seq[index] && index == len - 1) {
      return true
    }
    return dfs(node.left, index+1) || dfs(node.right, index+1)
  }

  return dfs(root, 0)
}

//48. Rotate Image
var rotate = function(matrix) {
  let n = matrix.length
  console.log(matrix)
  for(let i = 0; i<matrix.length; i++){
      for(let j = i; j<matrix.length; j++){
          console.log(i, j)
          let temp = matrix[j][i]
          matrix[j][i] = matrix[i][j]
          matrix[i][j] = temp
          
      }
  }
  
  console.log(matrix)
  for(let i = 0; i<n; i++){
     matrix[i] =  matrix[i].reverse()
  }
  return matrix
  
};

//62. Unique Paths
var uniquePaths = function(m, n) {
  let grid = new Array(m).fill(0).map(() => new Array(n).fill(0))
  let paths = []
  
  const findPaths = (cell, path, grid) => {
      const [row, col] = cell
      if(row == m-1 && col == n-1){
          paths.push(path)
      }
      if(row < m && col < n){
          findPaths([row+1, col], path+"down ", grid)
          findPaths([row, col+1], path+"right ", grid)
      }
      
  }
  
  findPaths([0, 0], "", grid)
  console.log(paths)
  return paths.length   
};
//bottom up
var uniquePaths = function(m, n) {
  const dp = new Array(m).fill(0).map(() => new Array(n))
  
  for(let i = 0; i< m; i++){
      dp[i][0] = 1
  }
  for(let j = 0; j<n; j++){
      dp[0][j] = 1 
  }
     
  for(let row = 1; row<m; row++){
      for(let col = 1; col<n; col++){
          dp[row][col] = dp[row-1][col] + dp[row][col-1]
      }
  }
  return dp[m-1][n-1]
};

//70. Climbing Stairs
var climbStairs = function(n) {
  const dp = []
  dp[0] = 1
  dp[1] = 1
  
  for(let i = 2; i<=n; i++){
      dp[i] = dp[i-1] + dp[i-2]
  }
  return dp[n]
};
//implementing a priority queue

class item {
  constructor(item) {
    this.item = item
    this.priority = priority
  }
}



// implementng a queue


//reversing a queue
const reverseQueue = (queue) => {
  const newQueue = []
  for (let i = 0; i < queue.length; i--) {
    newQueue.push(queue[i - 1])
    i--
  }
  return newQueue;
} 

//console.log(reverseQueue([1, 2, 3, 4]))


//Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.
// For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.
// ou can modify the input array in-place.

const missingPositiveInteger = (arr) => {
  const sortedArr =arr.sort()
  for (let i = 0; i < sortedArr.length; i++) {
    if (Math.abs(sortedArr[i] - sortedArr[i + 1]) > 1) {
      sortedArr[i + 1] = sortedArr[i] + 1
      if (sortedArr[i + 1] = 0) {
        i++
      } else {
          return sortedArr[i+1]
      }
    
      
    } else {
      i++
    }

  }
  return sortedArr
  
} 
//console.log(missingPositiveInteger([3, 4, 6]))

//count the number of ways to traverse a matrix
const traversalCount = (n, m) => {
  //using recursion
  // if (m === 1 || n === 1) {
  //   return 1
  // } else {
  //   return traversalCount(m-1, n) + traversalCount(m, n-1)
  // }

  //using dp
  const dp = [m + 1][n + 1]
  for (let i = 1; i < m; i++) {
    for (let j = 1; j <= n; j++) {
      if (m === 1 || n === 1) {
        return 1
      } else {
        dp[i][i] = dp[i-1][j] + dp[i][j-1]
      }
      
    }


  }
  return dp[m][n];
  
}

//console.log(traversalCount(5, 5))

const 
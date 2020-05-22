const longestCommonSubstr = (str1, str2) => {
 
  const dp = new Array(str1.length).fill(0).map(() => new Array(str2.length))

  const recurse = (str1, str2, index1, index2, count) => {
    if (index1 == str1.length || index2 == str2.length) {
    return count
    }
    if (index1 >= str1.length || index2 >= str2.length) {
      return 
    }
    if (!dp[index1][index2]) {
      let way3 = count
        if (str1[index1] == str2[index2]) {
          way3 = recurse(str1, str2, index1+1, index2+1, count+1)
    }
    let way1 = recurse(str1, str2, index1, index2 + 1, 0)
    let way2 = recurse(str1, str2, index1 + 1, index2, 0)
    
      dp[index1][index2] = Math.max(way1, way2, way3)
      
      return dp[index1][index2]
      
    }

  }

  recurse(str1, str2, 0, 0, 0)

}

const bottomUp = (str1, str2) => {
  const dp = new Array(str1.length + 1).fill(0).map(() => new Array(str2.length + 1).fill(0))
  let maxLength = 0
  for (let i = 1; i <= str1.length; i++){
    for (let j = 1; j <= str2.length; j++){
      if (str1[i] == str2[j]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
        maxLength = Math.max(maxLength, dp[i][j])
      }
    }
  }
  return maxLength
}

// 0(N) sol

const optimalBottomUp = (str1, str2) => {
  const dp = new Array(2).fill(0).map(() => new Array(str2.length + 1).fill(0))
  let maxLength = 0
  for (let i = 1; i <= str1.length; i++){
    for (let j = 1; j <= str2.length; j++){
      if (str1[i] == str2[j]) {
        dp[i % 2][j] = dp[(i - 1) % 2][j - 1] + 1
        maxLength = Math.max(maxLength,dp[i % 2][j] )
      }
    }
  }
  return maxLength
}


const longestIncreasingSub = (str) => {
  if (!str.length) {
    return 0
  }
  let count = 0

  const recur = (str, index1, index2) => {
    if (index1 >= str.length || index2 >= str.length) {
      return 0
    }
    let ways2 = 0

    if (str[index2] > str[index1]) {
      ways2 = 1+ recur(str, index1+1, index2+1)
    }
    let ways1 = recur(str, index1, index2 + 1)
    
    return Math.max(ways1, ways2)

  }
  recur(str, -1, 0)

} 

const LIS = (nums) => {
  const dp = new Array(nums.length).fill(1)
  let maxLength = 1
  for (let i = 1; i < nums.length; i++){
    for (let j = 0; j < i; j++){
      if (nums[i] > nums[j] && dp[i] <= dp[j]) {
        dp[i] = dp[j] + 1
        maxLength = Math.max(maxLength, dp[i])
      }
    }
  }
  return maxLength

}
const maxSumIS = (nums) => {
  if (!nums.length) {
    return 0
  }

  const dp = new Array(nums.length).fill(0)
  dp[0] = nums[0]
  let maxSum = 0
  for (let i = 1; i < nums.length; i++){
    for (let j = 0; j < i; j++){
      if (nums[i] > nums[j] && dp[i] < dp[j]+ nums[i]) {
        dp[i] = dp[j] + nums[i]
        maxSum = Math.max(dp[i], maxSum)
      }
    }
  }
  return maxSum
}

const minDeletionsToSort = (nums) => {
  if (!nums.length) {
    return 0
  }

  const LIS = (nums) => {
    const dp = new Array(nums.length).fill(1)
    let maxLength = 0

    for (let i = 1; i < nums.length; i++){
      for (let j = 0; j < i; j++){
        if (nums[i] > nums[j] && dp[i] <= dp[j]) {
          dp[i] = dp[j] + 1
          maxLength = Math.max(maxLength, dp[i])
        }
      }
    }

    return maxLength
  }
  return nums.length - LIS(nums)
}

const seqPatternMatching = (str, pat) => {

  const recur = (str, pat, strIndex, patIndex) => {
    if (patIndex == pat.length) {
      return 1
    }
    if (strIndex == str.length) {
      return 0
    }
    let c1 = 0;
    if (str[strIndex] == pat[patIndex]) {
      c1 = recur(str, pat, strIndex+1, patIndex=1)
    }
    let c2 = recur(str, pat, strIndex + 1, patIndex)
    return c1 + c2
  }
  return recur(str, pat, 0,0)
}

const longestBitonicSub = (arr) => {
  let maxLength = 0
  for (let i = 0; i < arr.length; i++) {
    let len1 = findLDSInc(arr, 1, -1)
    let len2 = findLDSDec(arr, 1, -1)
    maxLength = Math.max(maxLength, len1 + len2)
  }
  return maxLength
}
  const findLDSInc = (arr, currIndex, prevIndex) => {
    if (currIndex >= arr.length) {
      return 0
    }
    let c1 = 0
    if (prevIndex == -1 || arr[currIndex] < arr[prevIndex]) {
      c1 = 1+ findLDSInc(arr, currIndex+1, currIndex)
    }
    let c2 = findLDSInc(arr, currIndex + 1, prevIndex)
    return Math.max(c1, c2)
  }

const findLDSDec = (arr, currIndex, prevIndex) => {
  if (currIndex < 0) {
      return 0
  }
  let c1 = 0
  if (prevIndex == -1 || arr[currIndex] < arr[prevIndex]) {
    c1 = 1+ findLDSDec(arr, currIndex-1, currIndex)
  }
  let c2 = findLDSDec(arr, currIndex - 1, prevIndex)
  return Math.max(c1, c2)
}
  
const editDistance = (str1, str2) => {

  const recurse = (str1, str2, index1, index2) => {
    if (index1 == str1.length) {
      return str2.length-index2
    }
    if (index2 == str2.length) {
      return str1.length-index1
    }

    if (str1[index1] == str2[index2]) {
      return recurse(str1, str2, index1+1, index2+1)
    }

    let c1 = 1+ recurse(str1, str2, index1 + 1, index2)
    let c2 = 1+ recurse(str1, str2, index1, index2 + 1)
    let c3 = 1 + recurse(str1, str2, index1 + 1, index2 + 1)
    return Math.min(c1,c2,c3)
  }
  recurse(str1, str2, 0,0)
}

const fib = (n) => {
  if (n == 0) {
    return 0
  }
  if (n == 1) {
    return 1
  }
  return(fib(n-1) + fib(n-2))
}
const calcFib = (n) => {
  if (n < 2) {
    return n
  }
  let no1 = 0, no2 = 1, temp = 0
  for (let i = 0; i <= n; i++){
    temp = no1 + no2
    n01 = no2
    no2 = temp
  }
  return n2
}

const stairs = (n) => {
  if (n == 0) {
    return 1
  }
  if (n == 1) {
    return 1
  }
  if (n == 2) {
    return 2
  }
  let n1 = 0
  let n2 = 1
  let n3 = 2
  let temp = 0
  for (let i = 3; i <= n; i++){
    temp = n1 + n2 + n3
    n1 = n2
    n2 = n3
    n3 = temp
    
  }
  return n3
}

const noOfFactors = (num) => {
  if (num <= 1) {
    return 1
  }
  if (num == 2) {
    return 1
  }
  if (nums == 3) {
    return 2
  }
  return noOfFactors(n-1) +noOfFactors(n-2)
}

const minJumps = (jumps) => {

  const recursive = (jumps, index) => {
    if (index == jumps.length - 1) {
      return 0
    }

    if (jumps[index] == 0) {
      return Number.MAX_VALUE
    }

    let totalJumps = 0

    let start = index + 1, end = index + jumps[index]

    while (start < jumps.length && start <= end) {
      const minJumps = recursive(jumps, start++)
      if (minJumps !== Number.MAX_VALUE) {
        totalJumps = Math.min(totalJumps, minJumps+1)
      }
      
    }
    return totalJumps
  }
  recursive(jumps, 0)
}

const bottomUpJumps = (jumps) => {
  const dp = new Array(jumps.length).fill(0)
  for (let i = 1; i < jumps.length; i++) dp[i] = Number.MAX_VALUE;

  for (let start = 0; start < jumps.length; start++){
    for (let end = start + 1; end <= start + jumps[start] && end < jumps.length; end++){
      dp[end] = Math.min(dp[end], dp[start]+1)
    }
  }
  return dp[jumps.length-1]
}

const minCostStairs = (n, fees) => {
  const dp = new Array(n).fill(0)
  dp[0] = 0
  dp[1] = fees[1]
  dp[2] = Math.min(dp[0] + dp[2], fees[3])

  for (let i = 2; i <= n; i++){
    dp[i+1] = Math.min(fees[i] + dp[i], fees[i-1]+ dp[i-1],fees[i-2]+ dp[i-2], fees[i-3]+ dp[i-3])
  }
  

}



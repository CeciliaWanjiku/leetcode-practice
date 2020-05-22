//0-1 Knapsack maximum profit

//top down memoization

const maxProfit = (weights, profits, capacity) => {
  if (!weights.length || !profits.length || capacity) {
      return 0
  }
  
  const dp = []

  const recurse = (weights, profits, capacity, index) => {
    if (index >= profits.length || capacity <= 0) {
      return 0
    }
    let profit1; let profit2

    dp[index] = dp[index] || []

    if (!dp[index][capacity]) {
      if (weights[index] <= capacity) {
        profit1 = profit[index] + recurse(weights, profits, capacity-weights[index], index+1)
      }
    }
    profit2 = recurse(weights, profits, capacity, index + 1)
    
    dp[index][capacity] = Math.max(profit1,profit2)

    
  }
  return recurse(profits, weights,capacity, 0)
}

const maximumProfit = (weights, profits, capacity) => {
  const dp = []

  for (let i = 0; i < weights.length; i++){
    for (let c = 0; c <= capacity.length; c++){
      if (!dp[i][c]) {

        let profit1 = dp[i - 1][c]
        let profit2 = 0
        if (weights[i] <= capacity) {
          profit2 = dp[i-1][c-weights[i]]
        }
         dp[i][c] = Math.max(profit1, profit2)
      }
    }
  }
  return dp[weights.length-1][capacity]
}

const equalSubsetSum = (nums) => {
  const dp = new Array(nums.length).fill(0).map(() => new Array(nums.length))

  const recur = (nums, sum, index) => {
    if (sum == 0) {
      return true
    }
    if (index >= nums.length) {
      return false
    }

    if (!dp[index][sum]) {
      if (num[index] < sum) {
        if (recur(nums, sum - nums[i], index + 1)) {
          dp[index][sum] = true
        } else {
          dp[index][sum] = recur(nums, sum, index+1)
        }
      }
    }
    return dp[index][sum]

  }
  recur(nums, sum/2, 0)
}

const bottomUpSum = (nums) => {
  const dp = new Array.fill(nums.length).fill(0).map(() => new Array(sum))
  
  for (let i = 0; i < nums.length; i++){
    for (let sum = 0; sum <= sum; sum++){
      if (!dp[i][sum]) {
        if (nums[i] <= sum) {
          dp[i][sum] = dp[i-1][sum-nums[i]]
        } else {
          dp[i-1][s]
        }
      }
    }
  }
}

const subsetSum = (nums, target) => {

  const dp = []

  const recurse = (nums, sum, target, index) => {

    if (sum == 0) {
      return true
    }
    if(index >= nums.length)

    dp[index] = dp[index] || []

    if (!dp[index][sum]) {
      if (nums[index] <= sum) {
        if(recurse(nums, sum-nums[index], target, index+1))
        dp[index][sum] = true
      } else {
        dp[index][sum] = recurse(nums, sum, target, index+1)
      }
    }
    return dp[index][sum]
  }

  recurse(nums, target, target, 0)
}

const bottomUpSubsetSum = (nums, target) => {
  const dp = new Array(nums.length).fill(0).map(() => new Array(target + 1))
  
  for (let i = 0; i < nums.length; i++){
    for (let sum = 0; sum <= target; sum++){
      if (dp[i - 1][sum]) {
        dp[i][sum] = dp[i-1][sum]
      } else if (nums[i <= sum]) {
        dp[i][sum] = nums[i] + dp[i-1][sum-nums[i]]
      }
    }
  }

  return dp[nums.length-1][target]
}

const countSubsets = (nums, sum) => {
  const dp = new Array(nums.length).fill(0).map(() => new Array(sum + 1).fill(0))
  
  const dfs = (nums, sum, index) => {
    if (sum == 0) {
      return 1
    }

    if (nums.length == 0 || index >= nums.length) {
      return 0
    }

    if (dp[index][sum]) {
      let sum1 = 0

      if (nums[index] <= sum) {
        sum1 = dfs(nums, sum-nums[index], index+1)
      }
      const sum2 = dfs(nums, sum, index + 1)
      
      dp[i][sum] = sum1 + sum2
      return dp[i][sum]
    }
  }
  return dfs(nums, sum, 0)
}

//find sum by excluding no then find sum including num and add the tw0
const countSub = (nums, sum) => {
  const dp = new Array(nums.length).fill(0).map(() => new Array(sum + 1).fill(0))

  for (let i = 0; i < n; i++) {
    dp[i][0] = 1;
  }

  for (let s = 1; s <= sum; s++){
    dp[0][s] = nums[0 == s? 1 : 0]
  }
  
  for (let i = 1; i < nums.length; i++){
    for (let s = 1; s <= sum; s++){
      let sum1 = dp[i - 1][s]
      let sum2 = 0
      if (nums[i] <= s) {
        sum2 = nums[i] + dp[i-1][s-nums[i]]
      }
      dp[i][s] = sum1+sum2
    }
  }

}

//unbounded knapsack

const maximusProfit = (profits, weights, capacity) => {
  const dp = new Array(profits.length).fill(0).map(() => new Array(capacity + 1).fill(0))
  
  const recursion = (profits, weights, capacity, index) => {
    if (capacity == 0 || index >= profits.length) {
      return 0
    }
    let profit1 = 0

    if (!dp[index][capacity]) {
      if (weights[index] <= capacity) {
        profit1 = profits[i] + recursion(profits, weights, capacity - weights[index], index)
      }
      const profit2 = recursion(profits, weights, capacity, index + 1)
      
      dp[index][capacity] = Math.max(profit1, profit2)
    }
  }
}

const rodCutting = (lengths, prices, rodLength) => {
  const dp = new Array(lengths.length).fill(0).map(() => new Array(rodLength + 1).fill(0))
  

  const dfs = (lengths, prices, rodLength, index) => {
    if (index >= lengths.length || rodLength == 0) {
      return 0
    }

    if (!dp[index][rodLength]) {
      const prof1 = 0
      if (rodLength >= lengths[index]) {
        prof1 = prices[index] + dfs(lengths, prices, rodLength-lengths[index], index)
      }
      const prof2 = dfs(lengths, prices, rodLength, index+1)
      
    }
    return dp[index][rodLength]
  }
} 

const solveRodCutting = function(lengths, prices, n) {
  // base checks
  if (n <= 0 || prices.length === 0 || prices.length != lengths.length) return 0;

  const lengthCount = lengths.length;
  const dp = Array(lengthCount)
    .fill(0)
    .map(() => Array(n + 1).fill(0));

  // process all rod lengths for all prices
  for (let i = 0; i < lengthCount; i++) {
    for (let len = 1; len <= n; len++) {
      let p1 = 0,
        p2 = 0;
      if (lengths[i] <= len) p1 = prices[i] + dp[i][len - lengths[i]];
      if (i > 0) p2 = dp[i - 1][len];
      dp[i][len] = Math.max(p1, p2);
    }
  }

  // maximum price will be at the bottom-right corner.
  return dp[lengthCount - 1][n];
};

const makeChange = (denom, total) => {
  const dp = []

  const waysChange = (denom, total, index) => {
    if (total === 0) {
      return 1
    }
    if (index >= denom.length) {
      return
    }


    dp[index] = dp[index] || []

    if (!dp[index][total]) {
      let ways1 = 0
      if (denom[index] <= total) {
        ways1 = waysChange(denom, total-denom[index],index)
      }
      const ways2 = waysChange(denom, total, index + 1)
      dp[index][total] = ways1+ways2
      return dp[index[total]]
      
    }
    return waysChange(denom, total, 0)

    
  }
}

const makeChangeBottomUp = (denom, total) => {
  const dp = new Array(denom.length).fill(0).map(() => new Array(total + 1).fill(0))

  for (let i = 0; i < denom.length; i++){
    dp[i][0] = 1
  }
  
  for (let i = 0; i < denom.length; i++){
    for (let tot = 1; tot < total.length; tot++){
      if (!dp[i][tot]) {
        const ways1 = 0
        if (i > 0) {
          dp[i][tot] = dp[i - 1][tot]
          if (tot >= denom[i]) {
            dp[i][tot] += dp[i][t-denom[i]]
          }
        }
      }
    }
  }
  return dp[denom.length-1][total]
}

const makeMinChange = (denom, total) => {

  const recurse = (denom, total, index) => {
    if (total == 0) {
      return 0
    }
    if (denom.length == 0 || index >= denom.length) {
      return Infinity
    }
    dp[index] = dp[index] || []
    if (!dp[index][total]) {
      let ways1 = Infinity
      if (denom[index] <= total) {
        let res = recurse(denom, total - denom[index].index)
        if (res !== Infinity) {
          ways1 = res + 1
        }
      }
      const ways2 = recurse(denom, total, index + 1)
      dp[index][total] = Math.min(ways1, ways2)
      return dp[index][total]
    }
  }
  const result = recurse(denom, total, 0)
  if (result == Infinity) {
    return -1
  } else {
    return result
  }
}

const noOFWays = (n) => {
  const dp = []

  const recurse = (n) => {

    if (n == 0) {
      return 1
    }
    if (n == 1) {
      return 1
    }
    if (n == 2) {
      return 2
    }

    dp[n] = recurse(n - 1) + recurse(n - 2) + recurse(n - 3)
    return dp[n]

  }
}


const longestCommonSubstr = (s1, s2) => {
  const maxlength = Math.min(s1.length, s2.length)

  const dp = []

  const recur = (s1, s2, i1, i2, count) => {
    if (i1 === s1.length || i2 == s2.length) {
      return count
    }
    dp[i1] = dp[i1] || []
    dp[i1][i2] = dp[i1][i2] || []

    if (s1[i1] == s2[i2]) {
      count = recur(s1, s2, i1+1, i2+1, count+1)
    }

    const c1 = recur(s1, s2, i1, i2 + 1, 0)
    const c2 = recur(s1, s2, i1 + 1, i2, 0)
    
    return Math.max(count, c1, c2)
  }
  return recur(s1, s2, 0, 0, 0)
}


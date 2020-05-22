let solveKnapsack = function (profits, weight, capacity) {
  
  function recurse(profits, weight, capacity, index) {
    if (capacity <= 0 || index >= profits.length) {
      return 0
    }

    let firstProfit = 0
    //Including item at index
    if (weight[index] <= capacity) {
      firstProfit = profits[index] + recurse(profits, capacity-weight[index], index++)
    }
    // excluding item at index
    let secondProfit = recurse(profits, weight, capacity, index + 1)
    
    return Math.max(firstProfit, secondProfit)
  }

  return recurse(profits, weight, capacity, 0)
}

//using dp

const solve = (profits, weight, capacity) => {
  let dp = []

  const recurse = (profits, weight, capacity, index) => {
    if (capacity <= 0 || index >= profits.length) {
      return 0
    }
    if (dp[index][capacity]) {
      return dp[index][capacity]
    }

    let firstProfit = 0
    if (weight[index] <= capacity) {
      firstProfit = profits[index] + recurse(profits, weight, capacity-weight[index] , index++)
    }

    const secondProfit = recurse(profits, weight, capacity, index + 1)
    
    dp[index][capacity] = Math.max(firstProfit, secondProfit)
    return dp[index][capacity]
  }

  return recurse(profits, weight, capacity, 0)

}

//bottom up dp

const knapsack = (profits, weight, capacity) => {

  if (capacity <= 0 || weight.length !== profits.length) {
    return 0
  }
  const dp = new Array(profits.length).fill(0).map(() => new Array(capacity + 1).fill(0))

  for (let i = 0; i < profits.length; i++){
    dp[i][0] = 0
  }

  for (let c = 0; c <= capacity; c++){
    if (weight[0] <= c) {
      dp[0][c] = profits[0]
    }
  }

  for (let i = 1; i < profits.length; i++){
    for (let c = 1; c <= capacity; c++){
      let firstProfit = 0
      let secondProfit = 0

      if (weight[i] <= c) {
        firstProfit = profits[i] + dp[i-1][c-weight[i]]
      }
      secondProfit = dp[i - 1][c]
      
      dp[i][c] = Math.max(firstProfit, secondProfit)
    }
  }

  return dp[n - 1][capacity]
  
  let selectedWeights = ''

  let totalProfit = dp[weight.length - 1][capacity]
  let remainingCapacity = capacity
  for (let i = weight.length - 1; i > 0; i--){
    if (totalProfit !== dp[i - 1][remainingCapacity]) {
      selectedWeights += weight[i]
      remainingCapacity -= weight[i]
      totalProfit -= profits[i]
    }
  }
  
}

//Equal Subset Sum Partition 

let canPartition = function (nums) {
  let sum = 0

  for (let i = 0; i < nums.length; i++){
    sum+= nums[i]
  }
  if (sum % 2 !== 0) {
    return false
  }
  recurse(num, sum / 2, 0)
  
  const recurse = (num, sum, index) => {
    if (sum === 0) {
      return true
    }
    if (num.length == 0 || index >= num.length) {
      return false
    }

    if (num[index] <= sum) {
      if (recurse(num, sum - num[index], index += 1)) {
        return true
      }
    }

    return recurse(num, sum, index=1)
  }
}


const Partition = (nums) => {
  let sum = 0
  for (let i = 0; i < nums.length; i++){
    sum+= nums[i]
  }

  recurse(nums, sum / 2, 0)
  
  let dp = []
  const recurse = (nums, sum, index) => {
    if (sum == 0) {
      return true
    }
    if (index >= nums.length) {
      return false
    }

    dp[index] = dp[index] || []

    if (dp[index][sum]) {
      if (nums[index <= sum]) {
        if (recurse(nums, sum - nums[index], index++)) {
          dp[index][sum] = true
        }
      }
    }

    dp[index][sum] = recurse(nums, sum, index + 1)
    
    return dp[index][sum]
  }
}

//using bottom up

const PartitionDp = (num)  => {
  const n = nums.length

  let sum = 0

  for (let i = 0; i < n; i++){
    sum += nums[i]
  }
  if(sum %2 !== 0){
    return false
  }

  sum = sum / 2
  
  const dp = new Array(n).fill(0).map(() => new Array(sum + 1).fill(false))
  
  for (let i = 0; i < n; i++){
    dp[i][0] = true
  }

  for (let s = 1; s <= sum; s++){
    dp[0][s] = nums[0] == s
  }

  for (let i = 0; i < n; i++){
    for (let s = 1; s <= sum; s++){
      if (dp[i - 1][s]) {
        dp[i][s] = dp[i-1][s]
      } else {
        dp[i][s] = dp[i-1][s-nums[i]]
      }
    }
  }

  return dp[n-1][sum]
}

//Subset Sum

const subsetSum = (nums) => {

  const dp = []

  const recurse = (nums, sum, index) => {
    if (sum == 0) {
      return true
    }

    if (num[index <= sum]) {
      if (recurse(nums, sum - nums[i], index++)) {
        dp[index][sum] = true
      }
    } else {
      dp[index][sum] = recurse(nums, sum, index++)
    }
  }
}

const bottomUpSubsetSum = (nums) => {
  const dp = new Array(nums.length).fill(0).map(() => new Array(sum + 1).fill(0))
  
  for (let i = 0; i < nums.length; i++){
    dp[i][0] = true
  }
  for (let i = 0; i <= sum; i++){
    dp[0][i] = sum === num[i]
  }

  for (let i = 1; i < nums.length; i++){
    for (let s = 1; s <= sum; s++){
      if (dp[i-1][s]) {
        dp[i][s] = dp[i-1][s]
      } else {
        dp[i][s] = dp[i-nums[i]]
      }
        
    }
  }
}

//198. House Robber
 const robb = (nums, i, dp) => {
        if(i<0){
            return 0
        }
        if(dp[i] >= 0){
            return dp[i]
        }
        dp[i] = Math.max(robb(nums, i-2, dp) +nums[i], robb(nums, i-1,dp))
        return dp[i]
    }
var rob = function(nums) {
    let dp = new Array(nums.length+1).fill(-1)
    return robb(nums, nums.length-1,dp)    
}


//213. House Robber II
var rob = function(nums) { 
    var robing = function(nums) {
        let dp = []
        dp[0] = nums[0]
        dp[1] = Math.max(nums[0], nums[1])

        for(let i = 2; i< nums.length; i++){
            dp[i] = Math.max(dp[i-2] + nums[i], dp[i-1])
        }
        return dp[nums.length-1]
    
    };
    if(nums.length == 0){
        return 0
    }
    if(nums.length == 1){
        return nums[0]
    }
    if(nums.length == 2){
        return Math.max(nums[0], nums[1])
    }
    return Math.max(robing(nums.slice(1)), robing(nums.slice(0, nums.length-1)))
    
    
};

var minCost = function(costs) {
    if(costs.length == 0){
        return 0
    }
    
    for(let n = costs.length-2; n>=0; n--){
        costs[n][0] += Math.min(costs[n+1][1], costs[n+1][2])
        costs[n][1] += Math.min(costs[n+1][0], costs[n+1][2])
        costs[n][2] += Math.min(costs[n+1][1], costs[n+1][0])
    }
    
    return Math.min(costs[0][0], costs[0][1], costs[0][2])
    
};
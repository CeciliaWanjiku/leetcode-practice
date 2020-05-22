const solveKnapsack = (profits, weights, capacity) => {
  const len = profits.length;

  if (capacity <= 0 || len == 0 || weights.length == 0) {
    
    const dp = new Array(len).fill(0).map(() => new Array(capacity.length +1).fill(0))
  }

  for (let i = 0; i < len; i++){
    dp[i][0] = 0
  }

  for (let j = 0; j < capacity.length; j++){
    if (weights[0][j] <= c) {
      dp[0][c] = profits[0]
    }
  }

  for (let row = 1; row < len; row++){
    for (let col = 1; col < capacity.length; col++){
      let profit1 = 0, profit2 = 0
      if (weights[row] <= col) {
        profit1 = profits[row] + dp[row-1][col - weights[row]]
      }
      profit2 = dp[row - 1][col]
      
      dp[row][col] = Math.max(profit1, profit2)

    }
  }

  return dp[row-1][col]
}
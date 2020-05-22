//Knapsack problem

const solveKnapsack = (profits, weights, capacity) => {

  const recurse = (profits, weights, capacity, currIndex) => {

    let profit = 0

    if (weights[currIndex] <= capacity) {
      profit = profits[currIndex] + recurse(profit, weights, capacity - weights[currIndex], currIndex + 1)
    }

    const maxProfit = recurse(profits, weights, capacity, currIndex + 1)
    return Math.max(profit, maxProfit)
  }
  return recurse(profits,weights,capacity, 0)
}
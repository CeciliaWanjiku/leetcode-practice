//84. Largest Rectangle in Histogram
var largestRectangleArea = function(heights) {
    let maxArea = 0
    for(let i = 0; i<heights.length; i++){
        let minHeight = Number.MAX_VALUE
        for(let j = i; j<heights.length; j++){
            minHeight = Math.min(minHeight, heights[j])
            maxArea = Math.max(maxArea, minHeight*(j-i+1))
        }
    }
    return maxArea  
};

//140. Word Break II
var wordBreak = function(s, wordDict) {
    let memo = {};
    // returns list of sentence combinations given a index
    var recur = function(i) {
        if (memo[i]) return memo[i]
        if (i == s.length) {
            return [""];
        }

        let list = [];

        for (let end=i+1;end<=s.length;end++) {
            if (wordDict.includes(s.substring(i,end))) {
                let word = s.substring(i, end);
                let rest = recur(end);
                for (let comb of rest) {
                    list.push(word + (comb==""?"":" ") + comb);
                }
            }
        }
        memo[i] = list;
        return list;
    }
    return recur(0);
};

//128. Longest Consecutive Sequence
var longestConsecutive = function(nums) {
    let set = new Set()
    for(let num of nums){
        set.add(num)
    }
    
    let longestStreak = 0
    
    for(let i = 0; i<nums.length; i++){
        if(!set.has(nums[i]-1)){
            let currNum = nums[i]
            let currStreak = 1
            
            while(set.has(currNum+1)){
                currNum+=1
                currStreak+=1
            }
            longestStreak = Math.max(longestStreak, currStreak)
        }   
    }
    return longestStreak  
};


// 0/1 Knapsack weights
const maxProfit = (weights, profits, capacity) => {
    if(!weights.length || profits.length){
        return 0
    }

    const recurse = (weights, profits, capacity, index) => {
        if(index == profits.length){
            return
        }
        let included, excluded
        if(capacity > weights[index]){
            included = profits[index] + recurse(weights, profits, capacity-weights[index], index+1)
        }
        excluded = recurse(weights, profits, capacity, index+1)

        return Math.max(included, excluded)
    }
    
    return recurse(weights, profits, capacity, 0)
}


const BottomUpMaxProfit = (weights, profits, capacity) => {
    const dp = new Array(profits.length).fill(0).map(() => new Array(capacity+1).fill(0))

    for(let i = 0; i<dp.length; i++){
        dp[0][i] = 0
    }
    for(let j = 0; j<=capacity; j++){
        if(weights[0] <= j){
            dp[0][j] = profits[0]
        }
    }

    for(let i = 1; i<=profits.length; i++){
        for(let j = 1; j<=capacity; i++){
            let profit1 = 0, profit2 = 0
            if(capacity >= weights[i]){
                profit1 = profits[i] + dp[i][j-weights[i]]
            }
            profit2= dp[i-1][j]
            dp[i][j] = Math.max([profit1, profit2])
    }

    return dp[profits.length][capacity]
}
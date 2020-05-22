// 121. Best Time to Buy and Sell Stock
var maxProfit = function (prices) {
    let bestProfit = 0
    for(let i = 0; i<prices.length-1; i++){
        for(let j = i+1; j<prices.length; j++){
            let currProfit = prices[j] - prices[i]
            bestProfit = Math.max(currProfit, bestProfit)
        }   
    }
    return bestProfit 
};

//Kadanes Algorithm
var maxProfit = function(prices) {
    let bestProfit = 0, currProfit = 0
    
    const maxSubArray = (nums) => {
        if(nums.length <1){
            return 0
        }
        let max = 0, curr = 0
        for(let i = 0; i<nums.length; i++){
            max = Math.max(max, curr+ nums[i])
            curr = Math.max(0, curr+nums[i])
        }
        return max
    }
    if(prices.length < 2){
        return 0
    }
    let diff = new Array(prices.length-1)
    for(let i = 1; i<prices.length; i++){
        diff[i-1] = prices[i] - prices[i-1]
    }
    console.log(diff)
    return maxSubArray(diff)
};
// 122. Best Time to Buy and Sell Stock II
const maxSubarray = (nums) => {
    if(nums.length < 1){
        return 0
    }
    let max = 0, curr = 0
    
    for(let i = 0; i<nums.length; i++){
        console.log("...", max)
        max = Math.max(max, curr+nums[i])
        curr = Math.max(curr, curr+nums[i]) 
    }
    return max
}

var maxProfit = function(prices) {
    let diff = new Array(prices.length-1)
    for(let j = 1; j<prices.length; j++){
        diff[j-1] = prices[j] - prices[j-1]
    }
    console.log(diff)
    return maxSubarray(diff)
};
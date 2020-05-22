//89. Gray Code
var grayCode = function (n) {
    let res = []
    for(let i = 0; i<=n+1; i++){
        res.push(i ^ (i>>1))    
    }
    return res
    
};

var grayCode = function(n) {
    let res = []
    
    const helper = (n) => {
        if(n == 0){
            return ["0"]
        }
        if(n == 1){
            return ["0", "1"]
        }
        let arr = helper(n-1)
        let str1 = [], str2 = []
        for(let i = 0; i<arr.length; i++){
            str1.push("0" + arr[i])
        }
        arr.reverse()
        for(let i = 0; i<arr.length; i++){
            str2.push("1" + arr[i])
        }
        return str1.concat(str2)
        
        
    }
    res = helper(n)
    return res.map((item) => parseInt(item, 2))
};

//717. 1-bit and 2-bit Characters
var isOneBitCharacter = function(bits) {
    let count = 0
    for(let i = bits.length-2; i >= 0; i--){
        if(bits[i] == 1){
            count++
        }else {
            break;
        }
    }
    return count % 2 == 0
    
};

// 416. Partition Equal Subset Sum
const summation = (arr) => {
    let s = 0
    for(let i = 0; i<arr.length; i++){
        s+=arr[i]
    }
    return s
}
var canPartition = function(nums) {
    const summ = summation(nums)
    if(summ % 2 !== 0){
        return false
    }
    
    const dp = new Array(nums.length).fill(0).map(() => new Array(summ/2).fill(0))
    
    const dfs = (nums, sum, index) => {
        if(sum == 0){
            return true
        }
        if(index >= nums.length){
            return false
        }
        if(!dp[index][sum]){
            if(nums[index] <= sum){
                if(dfs(nums, sum-nums[index], index+1)){
                    dp[index][sum] = true
                    return true
                    
                }
            }
            
        }
       dp[index][sum] = dfs(nums, sum, index+1)
        return dp[index][sum]
    }
    
    return dfs(nums,summ/2, 0)
    
};

//bottom up

const summation = (arr) => {
    let s = 0
    for(let i = 0; i<arr.length; i++){
        s+=arr[i]
    }
    return s
}
var canPartition = function(nums) {
    const summ = summation(nums)
    if(summ % 2 !== 0){
        return false
    }
    
    const dp = new Array(nums.length).fill(0).map(() => new Array((summ/2) + 1).fill(0))
    
    for(let j = 0; j<nums.length; j++){
        dp[j][0] = true
    }
    
    for(let s = 0; s<=summ/2; s++){
            dp[0][s] = nums[0] == s    
        }
    
    for(let i = 1; i<nums.length; i++){
        for(let s = 1; s<=summ/2; s++){
            if(dp[i-1][s]){
                dp[i][s] = dp[i-1][s]
            }else if(s >= nums[i]){
                dp[i][s] = dp[i-1][s-nums[i]]
            }
            
        }
        
    }
    return dp[nums.length-1][summ/2]
    
};
//518. Coin Change 2
var change = function(amount, coins) {
    let ways = 0
    
    const recur = (coins, amount, index) =>{
        if(amount == 0){
            ways+=1
            return
        }
        if(index >= coins.length){
            return
        }
        if(amount >= coins[index]){
            recur(coins, amount-coins[index], index)
        }
        recur(coins, amount, index+1)
    }
    recur(coins, amount, 0)
    return ways
};

// top down
var change = function(amount, coins) {
    
    let dp = new Array(coins.length).fill(0).map(() => new Array(amount+1).fill(0))
    
    const recur = (coins, amount, index) =>{
        if(amount == 0){
            return 1
        }
        if(index >= coins.length){
            return 0
        }
        if(!dp[index][amount]){
            let ways1 = 0
            if(amount >= coins[index]){
                ways1 = recur(coins, amount-coins[index], index)
            }
            const ways2 = recur(coins, amount, index+1)
            dp[index][amount] = ways1 + ways2
            return dp[index][amount]
        }else {
            return dp[index][amount]
        }
    }
    return recur(coins, amount, 0)
};

//5. Longest Palindromic Substring
const expandCenter = (str, left, right) => {
    let l = left, r = right
    
    while(l>=0 && r< str.length && str[l] == str[r]){
        l--
        r++
    }
    return r-l-1
}
var longestPalindrome = function(s) {
    if(!s || !s.length){
        return ""
    }
    let start = 0, end = 0
    
    for(let i = 0; i<s.length; i++){
        let len1 = expandCenter(s,i, i)
        let len2 = expandCenter(s, i, i+1)
        let len = Math.max(len1, len2)
        
        if(len > end-start){
            start = i - Math.floor((len-1)/2)
            end = i + Math.floor(len/2)
            console.log("...", start, end)
        }
    }
    return s.substring(start, end+1)
    
};

var countSubstrings = function(s) {
    let count = 0;
    for(let i = 0; i < s.length; i += 1){
        helper(s, i, i) 
        helper(s, i, i+1) 
    }
    return count
    
    function helper(s, low, high){
        while(low>=0 && high<=s.length && s[low]===s[high]){
            count += 1
            low -= 1
            high += 1
        }
    }
};
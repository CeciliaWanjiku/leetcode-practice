
//983. Minimum Cost For Tickets
var mincostTickets = function (days, costs) {
    const lastDay = days[days.length-1]
    const dp = new Array(lastDay+1).fill(0)
    const travelDays = new Array(lastDay+1).fill(false)
    
    for(let i = 0; i<days.length; i++){
        let day = days[i]
        travelDays[day] = true
    }
    
    
    for(let j= 1; j<dp.length; j++){
        if(travelDays[j] == false){
            dp[j] = dp[j-1]
        }else{
            let OneDayCost = dp[j-1] + costs[0]
            let sevenDayCost = dp[Math.max(0, j-7)] + costs[1]
            let ThirtyDayCost = dp[Math.max(0, j-30)] + costs[2]
            
            dp[j] = Math.min(OneDayCost, Math.min(sevenDayCost,ThirtyDayCost))
        }
    }
    return dp[lastDay]
};

//322. Coin Change
var coinChange = function(coins, amount) {
    const dp = new Array(coins.length).fill(0).map(() => new Array(amount+1).fill(Number.MAX_VALUE))
    
    for(let i = 0; i<coins.length; i++){
        dp[i][0] = 0
    }
    
    for(let i = 0; i<coins.length; i++){
        for(let j = 1; j<=amount; j++){
            if(i>0){
                dp[i][j] = dp[i-1][j]
            }
            if(j >= coins[i]){
                dp[i][j] = Math.min(dp[i][j], 1+ dp[i][j-coins[i]])
            }
        }
    }
    if(dp[coins.length-1][amount] == Number.MAX_VALUE){
        return -1
    }
    return dp[coins.length-1][amount]
    
};

var minFallingPathSum = function(A) {
    const dp = new Array(A.length).fill(0).map(() => new Array(A[0].length).fill(0))
    
    for(let i = 0; i<A.length; i++){
        dp[0][i] = A[0][i]
    }
    
    for(let i = 1; i<A.length; i++){
        for(let j = 0; j<A[0].length; j++){
            if(j == 0){
                dp[i][j] = A[i][j] + Math.min(dp[i-1][j], dp[i-1][j+1])
            }else if( j == A[0].length-1){
                dp[i][j] = A[i][j] + Math.min(dp[i-1][j], dp[i-1][j-1])
            }else{
                dp[i][j] = A[i][j] + Math.min(dp[i-1][j], dp[i-1][j-1],dp[i-1][j+1] )
            }
        }
    }
    console.log(dp)
    return Math.min(...dp[dp.length-1])
    
};
var mincostTickets = function(days, costs) {
    console.log(costs)
  let dp = []
  dp[0] = 0
    dp[1] = 1
  for (let i = 1; i <= days[days.length-1]; i++){
    dp[i] = Math.min(
      (dp[i - 1] || 0) + costs[0],
      (dp[i - 7] || 0) + costs[1],
      (dp[i - 30] || 0) + costs[2]
      
    )
    
  }
console.log(days[days.length -1])
  return dp[days[days.length -1]]   
};


var minPathSum = function(grid) {
    let cost = new Array(grid.length).fill(new Array(grid[0].length))
    let len = grid.length;
    let row  = grid[0].length;
    
    for(let i = 0; i<len; i++){
        for(let j = 0; j<grid[i].length; j++){
            if(i+1 > len && j+1 > row){
                cost[i][j] = grid[i][j]
            } else if (i+i > len){
                cost[i][j] = grid[i][j] + cost[i][j+1]
            }else if(j+i > row){
                     cost[i][j] = grid[i][j] + cost[i+1][j]    
                     }else {
                         cost[i][j] = grid[j][j] + Math.min(cost[i+1][j], cost[i][j+1])      
                     }
    }
    console.log(cost)
    return cost[0][0]
}
};

var reverseWords = function(s) {
    let a = s.split(' ').filter(i => i.length > 0)
    console.log(a);
    let firstIndex = 0;
    let lastIndex = a.length - 1;
    while(firstIndex < lastIndex) {
        [a[firstIndex], a[lastIndex]] = [a[lastIndex], a[firstIndex]];
        firstIndex++;
        lastIndex--
    }
    return a.join(' ').trim();
};

var romanToInt = function(s) {
    let sum = 0
    let romanNumerals = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    
    for(let i = 0; i<=s.length-1; i++){
        if(romanNumerals[s[i+1]]>romanNumerals[s[i]]){
            sum -= romanNumerals[s[i]]   
        } else {
            sum += romanNumerals[s[i]]
        }
        
    }
    return sum //+ romanNumerals[s[s.length-1]]
    
};


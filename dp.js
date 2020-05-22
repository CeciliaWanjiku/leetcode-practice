const valuesAndWeights = (weight, value, w) => {
  console.log(weight)
  console.log(value)
  const dp = new Array(weight.length)
  for (let i = 0; i < 50; i++){
    dp[i] = new Array(value.length)
  }

  dp[0][0] = 0
  for (let i = 1; i <= value.length; i++){
    for (let j = 1; j <= w; j++){
       dp[i][j] = Math.max(dp[i-1][j], )

    }
  }

}
valuesAndWeights([60, 100, 120], [10,20,30], 50)

var strStr = function(haystack, needle) {
//     let kmpTable = []
//     let i = 0
//     let j = i+1
    
//     kmpTable[0] = 0
    
//     if((haystack.length <1 && needle.length<1) || needle.length<1){
//         return 0
//     }
    
//     while(i < needle.length && j< needle.length){
//         if(needle[i] == needle[j]){
//             kmpTable[j] = i+1
//             i++
//             j++
//         }else {
//             kmpTable[j] = 0
//             j++
//         }  
//     }
//     let n = 0
//     let startIndex;
//     console.log("....", kmpTable)
//     for(let h = 0; h<haystack.length && n<=needle.length-1; h++){
//         if(haystack[h] == needle[n]){
//             console.log("here",h, n)
//             startIndex = h
//             n+=1
//             console.log("<<<", n)
//         }else {
//             n = kmpTable[n]
//             console.log(">>>>>",n, h)
//         }
//     }
//     console.log("**",n)
//     if(n == needle.length){
//         console.log("?????", startIndex, n)
//         return startIndex-n+1
//     }
//     return -1 
//     let n = needle.length
//     let h= haystack.length
//     let startIndex =0
    
//     while(startIndex <=h){
//         console.log(haystack.substring(startIndex, startIndex+n), needle)
//         if(haystack.substring(startIndex, startIndex+n) == needle){
//             console.log("here")
//             return startIndex
//         }
//         startIndex++  
//     }
//     return -1
    
    
};
 
var setZeroes = function(matrix) {
    if(!matrix){
        return
    }
    for(let i = 0; i<matrix.length; i++){
        for(let j = 0; j<matrix[0].length; j++){
            if(matrix[i][j] == 0){
                matrix[0][j] = 0
                matrix[i][0] = 0
            }
        }
    }
    
    for(let row = 1; row<matrix.length; row++){
        for(let col = 1; col<matrix[0].length; col++){
            if(matrix[row][0] == 0){
                matrix[row][col] = 0
            }
            if(matrix[0][col] == 0){
                matrix[row][col] = 0
            }
            
        }
    }
    for(let i = 0; i<matrix.length; i++){
        for(let j = 0; j<matrix[0].length; j++){
            if(matrix[0][0] == 0){
                matrix[0][j] = 0
                matrix[i][0] = 0 
            }  
        }
    }
    
    
    console.log(matrix)
    
};

var minFallingPathSum = function(A) {
    let paths = []
    const m = A.length
    const n = A[0].length
    const dp = []
    
    const makePaths = (A, cell, path) => {
        const [row, col] = cell
        const m = A.length
        const n = A[0].length
        if(row == n){
            return path.reduce((acc, curr) => acc + curr, 0)
        }

        if(row >= m || col>=n || row< 0 || col< 0){
            return Number.MAX_VALUE
        }
        
        dp[row] = dp[row] || []
        if (dp[row][col]) return dp[row][col]
        
        dp[row][col] = Math.min(
            makePaths(A, [row+1, col], path.concat(A[row][col])),
            makePaths(A, [row+1, col+1], path.concat(A[row][col])),
            makePaths(A, [row+1, col-1], path.concat(A[row][col]))
        )
        return dp[row][col]
    }
    let minSum = Number.MAX_VALUE
    for(let i = 0; i<n; i++){
        const temp = makePaths(A, [0,i], [], 0)
        if (temp < minSum) {
            minSum = temp
        }
    }
    
    console.log('>>> ', dp)
    
    return minSum
};
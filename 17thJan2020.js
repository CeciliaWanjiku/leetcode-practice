// const coinChange = (amount, coins) => {
//   for each(coin in coins) {
    

//   }
  
// }

// class coinTree {
//   constructor(value) {
//     this.val = value
//     this.right = right
//     this.left = left
//   }
// }

var rotate = function (nums, k) {
 const rotationCount = k> nums ? k % nums : k
    for(i = 0; i < rotationCount; i++) {
      nums.unshift(nums.pop());
    }
  return nums
};

//console.log(rotate([1, 2, 3, 4, 5,], 22));
//console.log(rotate([1, 2, 3, 4, 5,], 3));


var minPathSum = function(grid) {
    const len = grid.length
  let minSum =[]
   if (len > 1) {
    minSum[0][0] = grid[0][0]
    
    for(let i=1; i<len; i++) {
        for(let j=1; j<grid[i].length; i++) {
            minSum[i][j] = Math.min(grid[i][j-1], grid[i-1][j]) + minSum[i][j]
        }
    }
    return Math.min(minSum[len-1][len-1])
    }
    
    
};
 const grid = [
  [1,3,1],
  [1,5,1],
  [4,2,1]
 ]

//  console.log(minPathSum(grid))


//  var minSteps = function(n) {
//     let dp = Array(n).fill([])
//         dp[0] = 0
//         dp[1] = 0
//     for(let i=2; i<=5; i++) {
//         dp[i] = i
//     }
//     for(let i =6; i<n; i++){
//         if(i % 2 === 0) {
//           dp[i] = dp[i/2] +2        
//         } else if(i % 3 === 0) {
//             dp[i] = dp[i/3] + 3
//         }else {
//             dp[i] = i
//         }
        
//     }
//     //console.log(">>>>>>>>", dp)
//     return dp[n]
    
//  };

// const perfectSquare = (num) => {
   
//   for (let i = 0; i < num; i++){
//     if()
    
//   }
//  }


//  var minSteps = function(n) {
//     if(n === 1) {
//         return 0;
//     }
//     let memo = {};
//     const copyPaste = (notepad, clipboard) => {
//         if(n === notepad) {
//             return 0
//         }
//         if(notepad >= n) {
//             return n
//         }
//         if(!memo[[notepad, clipboard]]) {
//             let choicePaste = 1 + copyPaste(notepad+clipboard, clipboard);
//             let choiceCopy  = 2 + copyPaste(notepad *2,notepad);
//             memo[[notepad, clipboard]] = Math.min(choicePaste, choiceCopy); 
//         }
//         return memo[[notepad, clipboard]]

//     }
//  return 1 + copyPaste(1,1);
  
// };

var factorial = function(n) {
    var result = 1;
    for(var i = 1; i<=n; i++){
        result =result * i;
    }


    return result;
};
console.log(factorial(10))
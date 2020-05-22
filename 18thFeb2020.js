// var orangesRotting = function(grid) {
//   let rotten = []
//   let rowLength = grid.length;
//   let colLength = grid[0].length
//   let fresh = 0
//   let minutes = 0

//   for (let i = 0; i < rowLength; i++){
//     for (let j = 0; j < colLength; j++) {
//       if (grid[i][j] === 2) {
//         rotten.push([i,j])
//       }
//       if (grid[i][j] === 1) {
//         fresh++
//       }
//     }
//   }
//   while (rotten.length !== 0 && fresh !== 0) {
//     current = rotten.shift()

//     const [row, col] = current

//     if (row + 1 < rowLength && grid[row + 1][col] === 1) {
//       console.log(">>>>", grid[row + 1][col])
//       grid[row+1][col] = 2
//       fresh--
//       rotten.push([row+1, col])
//     }
//     if (col + 1 < colLength && grid[row][col +1] === 1) {
//       grid[row][col+1] = 2
//       fresh--
//       rotten.push([row, col+1])
      
//     }
      
//     if (row - 1 >= 0 && row - 1 < rowLength && grid[row - 1][col] === 1) {
//       grid[row - 1][col] = 2
//       fresh--
//       rotten.push([row-1, col])
//     }
//     if (col - 1 >=0 && col - 1 < colLength && grid[row][col - 1] === 1) {
//       grid[row][col - 1] = 2
//       fresh--
//     }
//     minutes++
//   }
//   if (fresh === 0) {
//     return minutes
//   } else {
//     return -1
//   }    
// };

// orangesRotting([[2,1,1],[1,1,0],[0,1,1]])



const binaryToBase10 = (num) => {
        let base10 = 0
        const reversed = (""+num).split('').reverse()
        for (let char of reversed) {
            const indexOfChar = reversed.indexOf(char)
            if (char === '1') {
                base10 +=  2**indexOfChar
            }
        }
        return base10
}
    
console.log(binaryToBase10(100010))
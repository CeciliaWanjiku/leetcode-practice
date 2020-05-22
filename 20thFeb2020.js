/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let count = 0
    let solved = []
    let queenCount = n
    
    const board = new Array(n).fill(new Array(n).fill("."))
    
    const findEmpty = (board) =>{
        for(let r = 0; r<board.length; r++){
            for(let c = 0; c<board[r].length; c++){
                if(board[r][c] === "."){
                    return [r,c]
                }
            }
        }
    }
    
    const isValid = (cell,matrix) => {
        const [row, col] = cell
        for (let i = 0; i < n; i++){
            if(i< n && matrix[row][i] !== "."){
                return false
            }
        }
        for(let j=0; j<n; j++){
            if(matrix[j][col] !== "."){
                return false
            }
        }
        
        for(let d = 0; d<n; d++){
            if(d>n && matrix[row-d][col-d] !== "."){
                return false
            }
        }
        
        for(let y = 0; y<n; y++){
            if(col+y< n && row+y <n && matrix[row+y][col+y] !== "."){
                return false
            }    
        }
      for(let x = 0; x<n; x++){
            if(col+x< n && row+x <n && row-x>0 && matrix[row-x][col+x] !== "."){
                return false
            }    
      }
      for(let z = 0; z<n; z++){
            if(col+z< n && row+z <n && col-z>0 && matrix[row+z][col-z] !== "."){
                return false
            }    
        }
        return true
    }
    
    const placeQueen = (cell, board) => {
      const [row, col] = cell
      board[row][col] = "Q"
    }
    const removeQueen = (cell, board) => {
        const [row, col] = cell
        board[row][col] = "."
    }
    
  const solve = (board, n) => {
      if(n === 0){
          return
      }
      for(let i = 0; i<board.length; i++){
        for (let j = 0; j < board[i].length; j++){
            
            if (true) {
              placeQueen([i, j], board)
            } else {
              continue;
            }
             console.log(board)
            // if(solve(board, n-1)){
            //   solved.push(board)
            //   console.log(board)
            //   }else {
            //     removeQueen([i,j], board)
            //   }
               }
           }
            return false
      }
  solve(board,n)
     if(solved.length === n){
         return solved
     }else {
         return -1
         
     } 
};

console.log(solveNQueens(4))



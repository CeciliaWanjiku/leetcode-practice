const alphabetCount = {}

const decode = (nums) => {

}


//sudoku
const printGrid = (arr) => {

  
}

const isSafe = (board, row, col, num) => {
  //checks if to see the number doesn't exist on the row
  for (let i = 0; i < board.length; i++){
    if (board[row][i] === num) {
      return false
    }
    return true
  }
  //checks to see the no is not in the column
  for (let j = 0; j < board.length; j++) {
    if (board[j][col] === num) {
      return false
    }
    return true

  }
//checks to see number is not in the square box
  let sqrt = Math.sqrt(board.length);
  let boxRowStart = row - row % sqrt;
  let boxColStart = col - col % sqrt;

  for (let i = boxRowStart; i < boxRowStart + sqrt; i++) {
    for (let j = boxColStart; j < boxColStart + sqrt; j++) {
      if (board[i][j] = num) {
        return false
      }
      return true;

    }
  }
}
const solvinSudoku = (board, val) => {
  let val = board.length
  let isEmpty = true;
  for (let i = 0; i < val; i++){
    for (let j = 0; j < val; j++){
      if (board[i][j] = 0) {
        row = i
        col = j
        isEmpty =false
      }
    }

  }
  if (isEmpty) {
    return true;
  }

  for (k = 1; k <= val; k++) {
    if (isSafe(board, row, col, k)) {
      board[row][col] = k
      if (solvinSudoku(board, val)) {
        return true
      } else {
        board[row][col] = 0
      }
    }
  }
  return false;

}
const isUnique = (arr) => {
  const newSet = new Set(arr)
  if (newSet.size === arr.length) {
    return true
  }
  return false
}
const isValidSudoku = (board) => {
  for (let i = 0; i < board.length; i++) {
    if (isUnique(board[i])) {
      i++
    }
    return "invalid Sudoku"

  }
  for (let j = 0; j < board.length; j++){
    const col = 
  }
}
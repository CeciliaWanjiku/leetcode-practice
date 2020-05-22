// 213. House Robber II
var rob = function (nums) {
  const dp = new Array(nums.length).fill(0)
  const recursive = (nums, index) => {
    if (index >= nums.length) {
      return 0
    }
    if (!dp[index]) {
      const include = nums[index] + recursive(nums, index + 2)
      const skip = recursive(nums, index + 1)

      dp[index] = Math.max(include, skip)
    }
    return dp[index]
  }

  let startAt0 = recursive(nums.slice(0, nums.length - 1), 0)
  let startAt1 = recursive(nums.slice(1), 0)
  console.log(startAt0, startAt1)

  return Math.max(startAt0, startAt1)
}

var rob = function (root) {
  function helper (node) {
    if (!node) return [0, 0]
    const [lr, ln] = helper(node.left)
    const [rr, rn] = helper(node.right)
    return [node.val + ln + rn, Math.max(lr + rr, ln + rn, lr + rn, ln + rr)]
  }

  return Math.max(...helper(root))
}

// 794. Valid Tic-Tac-Toe State
const win = (board, player) => {
  for (let i = 0; i < 3; i++) {
    if (
      player == board[0][i] &&
      player == board[1][i] &&
      player == board[2][i]
    ) {
      return true
    }
    if (
      player == board[i][0] &&
      player == board[i][1] &&
      player == board[i][2]
    ) {
      return true
    }
    if (
      player == board[0][0] &&
      player == board[1][1] &&
      player == board[2][2]
    ) {
      return true
    }
    if (
      player == board[0][2] &&
      player == board[1][1] &&
      player == board[2][0]
    ) {
      return true
    }
  }
  return false
}
var validTicTacToe = function (board) {
  let xCount = 0

  let oCount = 0

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] == 'X') {
        xCount++
      }
      if (board[i][j] == 'O') {
        oCount++
      }
    }
  }

  if (oCount !== xCount && oCount !== xCount - 1) {
    return false
  }
  if (win(board, 'X') && oCount !== xCount - 1) {
    return false
  }
  if (win(board, 'O') && oCount !== xCount) {
    return false
  }

  return true
}

// 348. Design Tic-Tac-Toe
class TicTacToe {
  constructor (n) {
    this.len = n
    this.rows = new Array(n).fill(0)
    this.cols = new Array(n).fill(0)
    this.diag1 = 0
    this.diag2 = 0
  }

  move (row, col, player) {
    let i
    if (player == 1) {
      i = 1
    } else {
      i = -1
    }
    this.rows[row] += i
    this.cols[col] += i

    if (row == col) {
      diag1 += i
    }
    if (col == this.len - row - 1) {
      diag2 += 1
    }

    if (
      Math.abs(this.rows[row]) == this.len ||
      Math.abs(this.cols[col] == this.len) ||
      Math.abs(this.diag1 == this.len) ||
      Math.abs(this.diag2 == this.len)
    ) {
      return player
    }
    return 0
  }
}

//longest palindo=romic subsequence

const lps = (str) => {

    const recurse = (str, start, end) => {
        if (start == end) {
            return 1
        }

        if (start > end) {
            return 0
        }
        if (str[start] == str[end]) {
            return 2 + recurse(str, start+1, end-1)
        }
        let skipStart = recurse(str, start + 1, end)
        let skipEnd = recurse(str, start, end -1)
        return Math.max(skipEnd, skipStart)
    }

    recurse(str, 0, str.length-1)

}

const bottomUplps = (str) => {
    const dp = new Array(str.length).fill(0).map(() => new Array(n).fill(0))

    const recurse = (str, start, end) => {
        if (start == end) {
            return 1
        }
        if (start > end) {
            return 0
        }

        if (!dp[start][end]) {
            let len2 = 0; len3 = 0
            if (str[start] == str[end]) {
              dp[start][end] = 2 + recurse(str, start+1, end-1)
            } else {
                len2 = recurse(str, start + 1, end)
                len3 = recurse(str, start, end - 1)
                dp[start][end] = Math.max(len2, len3)  
            }    
        }

        return dp[start][end]
    }
    recurse(str, 0, str.length-1)

}

const bottomuplps = (str) => {
    const dp = new Array(str.length).fill(0).map(() => new Array(str.length).fill(0))

    for (let i = 0; i < str.length; i++){
        dp[i][i] = 1
    }

    for (let start = str.length - 1; start > 0; start--){
        for (let end = start + 1; end < str.length; end++){
            if (str[start] == str[end]) {
                dp[start][end] = 2 + dp[start+1][end-1]
            } else {
                dp[start][end] = Math.max(dp[start+1][end], dp[start][end-1])
            }
        }
    }
    return dp[0][str.length-1]
}

//longest palindromic substring
const lpsLength = (str) => {

    const recurse = (str, start, end) => {

        if (start == end) {
            return 1
        }
        if (start > end) {
            return 0
        }

        if (str[start] == str[end]) {
            const remaining = end - start - 1
            if (remaining == recurse(str, start + 1, end - 1)) {
                return 2+ remaining
            }
        }
        let skipStart = recurse(str, start + 1, end)
        let skipEnd = recurse(str, start, end - 1)
        
        return(Math.max(skipStart, skipEnd))
    }

    return recurse(str, 0, str.length-1)
}

const lpsLengthtopdown = (str) => {

    const dp = new Array(str.length).fill(0).map(() => new Array(str.length). fill(0))

    const recurse = (str, start, end) => {

        if (start == end) {
            return 1
        }
        if (start > end) {
            return 0
        }

        if (!dp[start][end]) {
            if (str[start] == str[end]) {
            const remaining = end - start - 1
            if (remaining == recurse(str, start + 1, end - 1)) {
               dp[start][end] =  2+ remaining
            }
        }
        let skipStart = recurse(str, start + 1, end)
        let skipEnd = recurse(str, start, end - 1)
        
        dp[start][end] = Math.max(skipStart, skipEnd)
            
        } 

        return dp[start][end]
    }

    return recurse(str, 0, str.length-1)
}

const lpslengthbottomup = (str) => {
    const dp = new Array(str.length).fill(0).map(() => new Array(str.length).fill(false))

    for (let i = 0; i < str.length; i++){
        dp[i][i] = true
    }
    let maxLength = 0

    for (let start = str.length - 1; start > 0; start--){
        for (let end = start + 1; end < str.length; end++){
            if (str[start] == str[end]) {
                if (end - start - 1 == 1 || dp[start + 1][end - 1]) {
                    dp[start][end] = true
                    maxLength = Math.max(maxLength, end-start-1)
                }
            }
        }
    }
    return maxLength
}

//count of palindromic substrings

const countOfPalindromicSubstrings = (str) => {
    const dp = new Array(str.length).fill(0).map(() => new Array(str.length).fill(false))

    let count = 0

    for (let i = 0; i < str.length; i++){
        dp[i][i] = true
        count++
    }

    for (let start = str.length - 1; start > 0; start--){
        for (let end = start + 1; end < str.length; end++){
            if (str[start] == str[end]) {
                if (end - start - 1 || dp[start + 1][end - 1]) {
                    dp[start][end] = true
                    count++
                }
            }
        }
    }
    return count

}

//1236. Web Crawler
const getHostName = (url) => {
    let arr = url.split('/')
    return arr[2]
}
var crawl = function(startUrl, htmlParser) {
    let q = []
    let seen = []

    q.push(startUrl)
    seen.push(startUrl)
    while(q.length){
        let curr = q.shift()
        htmlParser.getUrls(curr).forEach((url) => {
            if(!seen.includes(url) && getHostName(url) == getHostName(curr)){
                seen.push(url)
                q.push(url)
            }
            
            
        })
    }
    return seen
    
};

//37. Sudoku Solver
const findEmpty = (board) => {
    for(let i = 0; i<board.length; i++){
        for(let j = 0; j<board[i].length; j++){
            if(board[i][j] == '.'){
                return [i, j]
            }
        }
    }
    return false
    
}

const canPlace = (board, cell, num) => {
    const[row, col] = cell
    //if row has num
    for(let i = 0; i<board[row].length; i++){
        if(board[row][i] == num){
            return false
        }
    }
    for(let j = 0; j<board[col].length; j++){
        if(board[j][col] == num){
            return false
        }
    }
    let currRowBox = Math.floor(row/3)
    let currColBox = Math.floor(col/3)
    let boxRowStart = currRowBox*3, boxColStart = currColBox*3
    for(let i = boxRowStart; i<boxRowStart+3; i++){
        for(let j = boxColStart; j<boxColStart+3; j++){
            if(board[i][j] == num){
                return false
            }
            
        }
    }
    return true
    
}
var solveSudoku = function(board) {
    if(!findEmpty(board)){
        return true
    }
    
    const [row, col] = findEmpty(board)
    
    
     for(let num = 1; num<=9; num++){
            if(canPlace(board,[row, col],num)){
                board[row][col] = ""+num
                 if(solveSudoku(board)){
                    return true
                    }
                board[row][col] = '.'
            }
            
        }
    return false
    
};


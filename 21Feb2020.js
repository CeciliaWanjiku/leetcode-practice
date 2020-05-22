// /**
//  * Initialize your data structure here.
//  * @param {number} n
//  */
// let rows;
// let cols;
// let diagonal1;
// let diagonal2;
// let size;

// var TicTacToe = function(n) {
//   rows = new Array(n).fill(0)
//   cols = new Array(n).fill(0)
//   diagonal1 = 0
//   diagonal2 = 0
//   size = n


    
// };

// /**
//  * Player {player} makes a move at ({row}, {col}).
//         @param row The row of the board.
//         @param col The column of the board.
//         @param player The player, can be either 1 or 2.
//         @return The current winning condition, can be either:
//                 0: No one wins.
//                 1: Player 1 wins.
//                 2: Player 2 wins. 
//  * @param {number} row 
//  * @param {number} col 
//  * @param {number} player
//  * @return {number}
//  */
// TicTacToe.prototype.move = function(row, col, player) {
//     if(rows[row] + player === size * player){
//         rows[row] += player
//         return player  
//     }
//     if(cols[col] + player === size * player){
//         cols[col] += player
//         return player  
//     }
//     if(row == col){
//         if(diagonal1 + player === size*player){
//             return player
//         }
      
//     }
//     if(row +col - size == -1){
//         if(diagonal2 + player === size*player){
//             return player
//         }
        
//     }
    
//     return 0
    
    
    
// };

// /** 
//  * Your TicTacToe object will be instantiated and called as such:
//  * var obj = new TicTacToe(n)
//  * var param_1 = obj.move(row,col,player)
//  */


//  /**
//  * @param {character[][]} grid
//  * @return {number}
//  */
var numIslands = function(grid) {
    let count = 0
    let len = grid.length
    
    const sinkIsland = (cell, grid) => {
        const [row, col] = cell
        if(row< 0 || col< 0 || row == len || col == len || grid[row][col] == "0"){
            return
        } else {
            console.log(row, col, grid[row][col])
            grid[row][col] = "0"
            sinkIsland([row+1, col], grid)
            sinkIsland([row-1, col], grid)
            sinkIsland([row, col+1], grid)
            sinkIsland([row, col-1], grid)        
        }
     }
  for (let i = 0; i < grid.length; i++){
          console.log(grid[i])
          for (let j = 0; j < grid[i].length; j++){
              if(grid[i][j] === "1"){
                  count++
                  sinkIsland([i,j], grid)  
              }
              
          }
    }
    
    return count
       
}
    
console.log(numIslands(
  [
    [11110],
    [11010],
    [11000],
    [00000],
  ]));

const grep = (items, callback) => {
  let filtered = []

  for (let i = 0; i < items.length; i++){
    var meetsCond = callback(items[i])

    if (cons) {
      filtered.push(items[i])
    }
  }

  return filtered;
    
}
  
var copyRandomList = function(head) {
    let visited = new Map();
    
    let helper = (node) => {
        if (!node) return null;
        if (visited.has(node)) return visited.get(node);
        
        let newNode = new Node(node.val);
        visited.set(node, newNode);
        newNode.next = helper(node.next);
        newNode.random = helper(node.random);
        return newNode;
    }
    return helper(head);
    
   
};

class PriorityQueue {
  constructor() {
    this.heap = [null]
  }

  insert(value, priority) {
    const newNode = new Node(val, priority)

    this.heap.push(newNode);
    let currentIndex = this.heap.length - 1
    let parentIndex = Math.floor(currentIndex / 2)
    
    while (
      this.heap[parentIndex] && newNode.priority > this.heap[parentIndex].priority
    ) {
      const parent = this.heap[parentIndex]
      this.heap[parent] = newNode
      this.heap[currentIndex] = parent
      currentIndex = parentIndex
      parentIndex = Math.floor(currentIndex/2)
    }
  }

  remove() {
    if (this.heap.length < 3) {
      const lastItem = this.heap.pop()
      this.heap[0] = null
      return lastItem
    }
    const toRemove = this.heap[1]
  }
}
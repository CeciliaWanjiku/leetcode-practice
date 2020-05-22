// var totalNQueens = function(n) {
//   let matrix = new Array(n).fill(new Array(n).fill(false))
//   console.log(matrix);
//   let total = 0
//     let count = 0
    
//   const isNotUnderAttack = (cell, row, col) => {
//     for(let r of row){
//         if(r !== false){
//             return false
//         }
        
//     }
//     for(let c of col){
//         if(c !== false){
//             return false
//         }
//     }

//     for (let i = 0; i < row.length; i++){
//       for (let j = 0; j < col.length; j++){
//         matrix[j]
//       }
//     }
    
    
        
//     }
    
//   const placeQueen = (value, row, col) => {
//     matrix[row][col] = value
//       count++
//   }
    
//     const removeQueen = (row, col) => {
//         matrix[row][col] === false
        
//     }
    
//   for (let i = 0; i<matrix.length; i++){
//         for(let j = 0; j<matrix[i].length; j++){
//             if(isNotUnderAttack(matrix[i][j], matrix[i], matrix[j])){
//                 placeQueen("Q", i, j)
//             }
//             if(count < n || count > n){
//             removeQueen(i,j)
            
//            }
//         }
        
//     }
//   total++
//   //console.log(matrix)
//   matrix = new Array(n).fill(new Array(9).fill(false))

//   return total 
// };

// totalNQueens(4)



class BinarySearchTree {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }

  minimalHeightBST(arr) {
    if (arr.length < 1) {
      return 
    }
    let mid = Math.floor((arr.length - 1) / 2);
    const tree = new BinarySearchTree(arr[mid])
    tree.left = this.minimalHeightBST(arr.slice(0, mid))
    tree.right = this.minimalHeightBST(arr.slice(mid+1))
    return tree

  }
}
let BST = new BinarySearchTree()

const t = BST.minimalHeightBST([1, 2, 3, 4, 5, 6, 7, 8, 9])
console.log(",,,,,,,,,,,",t)

// console.log(minimalHeightBST([1,2,3,4,5]))
  

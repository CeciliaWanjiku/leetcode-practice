// const minDepth = (root) => {
//   if (!root) {
//     return 0
//   } else {
//     let height = 0
//     let queue = []
//     queue.push(root)

//     while (queue.length > 0) {
//       let firstItem = queue.shift()
//       if (firstItem === null) {
//         height++
//         return height
//       } else {
//         queue.push(root.left, root.right) 
//       } 
//     }
//   }

// }

const rotOranges = (matrix) => {
  for (let i = 0; i < matrix.length; i++){
    let row  = matrix[i]
    for (let j = 0; j < row.length; j++){

      if (matrix[i][j + 1] && matrix[i][j] === 2 && matrix[i][j + 1] === 1) {
        matrix[i][j+1] = 2  
      }
      if( matrix[i + 1] &&matrix[i][j] === 2 && matrix[i + 1][j] === 1) {
        matrix[i + 1][j] = 2
      }
      if ( matrix[i][j - 1] &&matrix[i][j] === 2 && matrix[i][j - 1] === 1) {
        matrix[i][j - 1] = 2
      }
      if( matrix[i - 1] && matrix[i][j] === 2 && matrix[i -1][j] === 1) {
        matrix[i - 1][j] = 2
      }
    }

  }

}

const rottenOranges = (matrix) => {
  let count = 0;
  let oldMatrix = Object.assign([], matrix);

  while (JSON.stringify(matrix).includes('1')) {
    console.log(oldMatrix);
    oldMatrix = Object.assign([], matrix);
    rotOranges(matrix);
    console.log(matrix);
    if (JSON.stringify(oldMatrix) === JSON.stringify(matrix)) {
      break;
    }
    count++;
  }

  // for (let i = 0; i < matrix.length; i++){
  //   for (let j = 0; j < matrix[i].length; j++){
  //     if (matrix[i][j] === 1) {
  //       count++;
  //       rotOranges(matrix)
  //     }   
  //   }
    
  //   oldMatrix = Object.assign([], matrix);
  //   if (JSON.stringify(oldMatrix) === JSON.stringify(matrix)) {
  //     break;
  //   }
  // }
  if (JSON.stringify(matrix).includes('1')) {
    return -1;
  }
  return count;
}


const matrix = [
[2, 1, 0, 2, 1],
[1, 0, 1, 2, 1],
  [1, 0, 0, 2, 1]
];

console.log(rottenOranges(matrix));

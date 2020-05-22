// function findDuplicates(arr1, arr2) {
//   let countObj = {}
//   let newArr = []
//   console.log("countObj", countObj)
//   for(let i = 0; i<arr1.length; i++){
//     countObj[arr1[i]] = countObj[arr1[i]] ? countObj[arr1[i]] + 1 : 1;
//   }
//   for (let j = 0; j < arr2.length; j++){
//     countObj[arr2[j]] = countObj[arr2[j]] ? countObj[arr2[j]] + 1 : 1;
//   }
  
//   for( var val in countObj) {
//     if(countObj[val] > 1)
//       newArr.push(parseInt(val))
      
//   }  
//   return newArr
// }

// console.log(findDuplicates([1, 2, 3, 5, 6, 7], [3, 6, 7, 8, 20]));

// //print a string in reverse order

// const printStringInReverse = (str) => {
//   if (!str) {
//     return;
//   }
//   const reverseChar = (firstIndex, lastIndex) => {
//     [firstIndex, lastIndex] = [lastIndex, firstIndex]
//   }
//   for (let i = 0; i < str.length; i++){
//     while (i !== i - 1) {
//       reverseChar(i, i-1)
//     }
    
//   }
// }
// console.log(printStringInReverse("qwerty"))


// // bst
// var lowestCommonAncestor = function(root, p, q) {
//     let current = root
//      while(true){
//          if(current.val > p.val && current.val> q.val){
//              current = current.left
//          } else if(current.val < p.val && current.val< q.val){
//               current = current.right     
//          }else {
//          return current
//           }
            
//      } 
    
// };

// //binary tree
// var lowestCommonAncestor = function(root, p, q) {
//     if(!root){
//         return root
//     }
//     if(root === p || root === q){
//         return root
//     }
//     let left;
//     let right;
    
//     if(root.left){
//         left = lowestCommonAncestor(root.left, p,q)
        
//     }
//     if(root.right){
//         right = lowestCommonAncestor(root.right, p,q)
//     }
    
//     if(left && !right){
//         return left
//     }
    
//     if(!left && right){
//         return right
//     }
    
//     if (!left && !right) {
//         return null
//     }
    
//     return root
    
// };

// var PascalsTriangle = function (numRows) {
//   let triangle = new Array(numRows);
//   for (let i = 0; i < numRows; i++) {
//     let row = new Array(i + 1)
//     row[0] = 1
//     row[row.length - 1] = 1
//     for (let j = 1; j < row.length - 1; j++) {
//       row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j]
//     }
//     triangle[i] = row
//   }
//   return triangle
    
// }


var kth = (n, k) => {
  let arr = new Array(n).fill(new Array);
  arr[0] = ['0']
  console.log(arr)

  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arr[i - 1].length; j++) {
      if (arr[i-1][j] === '0') {
        arr[i].push("01")
      } else if (arr[i-1][j] === '1') {
        arr[i].push("10")
      }
    }
  }
  console.log(">>>", arr[3])
  return arr;   
};

console.log(kth(3,3))


var isValid = function(s) {
    let stack = []
    const parens = {
        ")":"(",
        "}":"{",
        "]": "["
    }
    for(let char of s) {
        if(stack.length === 0) {
            stack.push(char)
        } else {
            if(stack[stack.length-1] === parens[char] ) {
               stack.pop()
            } else {
                stack.push(char)
            }
        }
    }
    return stack.length === 0
    
};
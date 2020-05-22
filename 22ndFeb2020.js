// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {number[]}
//  */
// var inorderTraversal = function(root) {
//     let arr = []
//     let stack = []
//     let curr = root;
    
// //     const helper = (root, arr) => {
// //         if(root === null){
// //             return
// //         }
// //         helper(root.left, arr)  
// //         arr.push(root.val)
// //         helper(root.right, arr)
// //     }
    
// //     helper(root, arr)
// //     return arr
    
//     while(curr!== null || stack.length >= 1){
//         while(curr !== null){
//             stack.push(curr)
//             curr = curr.left
//         }
//         curr = stack.pop()
//         arr.push(curr.val)
//         curr = curr.right
//     }

//     return arr
    
// };
// //Verify Preorder Sequence in Binary Search Tree
// var verifyPreorder = function(preorder) {
//     var root = Number.MIN_SAFE_INTEGER;
//     var stack = [];
//     for(num of preorder){
//         if(num < root)
//             return false;
//         var n = stack.length;
//         while(n>0 && stack[n-1] < num){
//             root = stack.pop();
//             n = stack.length;
//         }
//         stack.push(num);
//     }
//     return true;
// };

// var countNodes = function(root) {
//     let count = 0
//     let left = 0
//     let right = 0
//     if(!root) {
//         return count
//     }
//     left = countNodes(root.left) 
//     right = countNodes(root.right)
    
//     count = 1+ left + right
    
//     return count
    
// };

// //N-ary Tree Postorder Traversal
// var postorder = function(root) {
//     let arr = []
//     let stack  = []
    
// //     const helper = (root, arr) => {
// //         for(let child of root.children){
// //             helper(child, arr)
// //             arr.push(child.val)
// //         }
// //         return arr
// //     }
// //     return(helper(root, arr))
//     stack.push(root)
//     while(root && stack.length >=1){
//         let node = stack.pop()
//         for(child of node.children){
//             if(child !== null) {
//                 stack.push(child)    
//             }
            
//         }
//         arr.unshift(node.val)
//     }
//     return arr
    
// };

var postorderTraversal = function(root) {
    let arr = []
    let stack = []
    stack.push(root)
    while(root && stack.length >= 1){
        let node = stack.pop()
        while(node.left !== null){
            stack.push(node.left) 
        }
        while(node.right !== null){
            stack.push(node.left)    
        }
        console.log(stack) 
        arr.unshift(node.val)
        console.log(arr)
    }
//     const helper = (root, arr) => {
//         if(root.left !== null){
//             helper(root.left, arr)
//             arr.push(root.val)
            
//         }
        
//         if(root.right !== null){
//             helper(root.right, arr)
//             arr.push(root.val)
            
//         }
        
//         console.log(arr)
//         return arr
//     }
//     return helper(root, arr)
    return arr
    
};

console.log(postorderTraversal([1, null, 2, 3]))

var isSymmetric = function(root) {
//     if(!root){
//         return true
//     }
//     const isMirror = (t1, t2) =>{
//         if(t1 == null && t2 == null){
//             return true
//         }
//         if(t1 == null || t2 == null){
//             return false
//         }
//          return (t1.val == t2.val) &&
//              isMirror(t1.right, t2.left) &&
//              isMirror(t1.left, t2.right)
        
//     }
//     return isMirror(root,root)
    let q = []
    q.push(root)
    q.push(root)
    
    while(q.length >=1){
        let firstVal = q.shift()
        let secVal = q.shift()
        if(firstVal == null && secVal == null){
            return true
        }
        if(firstVal == null || secVal == null){
            return false
        }
        if(firstVal.val !== secVal.val){
            return false
        }
        q.push(firstVal.left)
        q.push(secVal.right)
        q.push(firstVal.right)
        q.push(secVal.left)
        
        
    }
    return true
    
};

const isPalindrome = (word) => {
    let arr = word.split('')
    
    let firstIndex = 0
    let lastIndex = arr.length -1
    
    const sliceFirst = (word) => {
        word = word.slice(firstIndex)
        return word
    }
    const lastChar = (word) => {
        word = word.slice(0, lastindex)
        return word
    }
    
    if(arr.length == 1){
        return true
    }
    if(arr[firstIndex] == arr[lastIndex]){
        arr = sliceFirst(arr)
        arr = lastChar(arr)
        
    } else {
        return false
    }
    return isPalindrome(arr)
    
}
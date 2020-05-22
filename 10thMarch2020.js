const inorder = (root, arr) => {
    if(!root){
        return null
    }
    inorder(root.left, arr)
    arr.push(root.val)
    inorder(root.right, arr)
}
 
var findTarget = function(root, k) {
    if(!root){
        return false
    }
    let arr = []
    inorder(root, arr)
    
    let i = 0
    let j = arr.length-1
    while(i<j){
        let sum = arr[i] + arr[j]
        if(sum == k){
            return true
        }
        if(sum<k){
            i++
        }else{
            j--
        }
    }
    return false
    


};

var findTarget = function(root, k) {
    if (root === null) { return root; }
    let result = {};
    let found = false;
    const inorder = head => {
        if (head === null) return;
        inorder(head.left);
        if (result[k - head.val] === undefined) {
            result[head.val] = head.val;
        } else {
            found = true;
            return;
        }
        inorder(head.right);
    }
    inorder(root);
    console.log(result)

    return found;

};

var findTarget = function(root, k) {
    if (root === null) { 
        return null; 
    }
    let set = new Set()
    
    let q = [] 
    let found = false
    q.push(root)
    while(q.length>0){
        let curr = q.shift()
        if(!set.has(k-curr.val)){
            set.add(curr.val)
            if(curr.left){
                q.push(curr.left)   
            }
            if(curr.right){
                q.push(curr.right)   
            }
        }else {
            found = true
            return found
        }
    }
    return found

};


var invertTree = function(root) {
    
    if(!root){
        return null
    }
    
    let t = root.left    
    root.left = root.right
    root.right = t
    
    // invertTree(root.left)
    invertTree(root.right)

    return root
    
};

var invertTree = function(root) {
    if(!root){
        return null
    }
    
    
    let left = invertTree(root.left)
    let right = invertTree(root.right)
    
    root.left = right
    root.right = left
    
    return root
 
};

const levelOrderTraversal = (root) => {
  let levels = []

  let level = 0
  let q = []
  q.push(root)

  while (q.length > 0) {
    let levellen = q.length
    for (let i = 0; i < levellen; i++){
      let curr = q.shift()
      if (levels[level] === undefined) {
        levels[level] = [curr.val]
      } else {
        levels[level].push(curr.val)
      }
      if (curr.left) {
        q.push(curr.left)
      }
      if (curr.right) {
        q.push(curr.right)
      }

    }
    level++
  }
  return arr
}

var levelOrder = function(root) {
    let levels = []
    
    const helper = (root, level, arr) => {
        if(!root){
            return null
        }
        if(arr[level] === undefined){
            arr[level] = [root.val]
        }else{
            arr[level].push(root.val)
        }
        helper(root.left, level+1, arr)
        helper(root.right, level+1, arr)
    }
    
    helper(root, 0, levels)
    return levels
    
};

const arrAvg = arr => arr.reduce((a,b) => a + b, 0) / arr.length
var averageOfLevels = function(root) {
    if(!root){
        return
    }
    let levels = []
    
    let level = 0
    let q = []
    q.push(root)
    
    while(q.length > 0){
        const qlen = q.length
        for(let i = 0; i<qlen; i++){
            let curr = q.shift()
            if(levels[level]){
                levels[level].push(curr.val)
            }else {
                levels[level] = [curr.val]
            }
            if(curr.left){
                q.push(curr.left)
            }
            if(curr.right){
                q.push(curr.right)
            }
        }
        level++
    }
    let sum = []
    for(let val of levels){ 
        sum.push(arrAvg(val))
    }
    
    return sum
    
};
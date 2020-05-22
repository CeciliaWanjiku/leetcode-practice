const isLeaf = (node) => {
    if(!node.left && !node.right){
        return true
    }
    return false
}
const addLeaves = (res, root) => {
    if(isLeaf(root)){
        res.push(root.val)
    }else {
        if(root.left){
            addLeaves(res, root.left)
        }
        if(root.right){
            addLeaves(res, root.right)
        }
    }
}

var boundaryOfBinaryTree = function(root) {
    if(!root){
        return []
    }
    let res = []
    if(!isLeaf(root)){
        res.push(root.val)
    }
    let t = root.left
    while(t){
        if(!isLeaf(t)){
            res.push(t.val)
        }
        if(t.left){
            t = t.left
        }else {
            t = t.right
        }
    }
    addLeaves(res, root)
    
    let stack = []
    
    t = root.right
    while(t){
        if(!isLeaf(t)){
            stack.push(t.val)
        }
        if(t.right){
            t = t.right
        }else{
            t = t.left
        }
    }
    while(stack.length){
        res.push(stack.pop())
    }
    return res
};

var findTilt = function(root) {
    let tilt = 0
    
    const dfs = (root) => {
        if(!root){
            return 0
        }
        let left = dfs(root.left)
        let right = dfs(root.right)
        
        tilt += Math.abs(left-right)
        
        return left+right+root.val
    }
    dfs(root)
    return tilt
};

const rodCutting = (lengths, prices, n) => {

  const dp = new Array(lengths.length).fill(0).map(() => new Array(n +1).fill(0))

  if (n <= 0 || prices.length == 0 || lengths == 0) {
    return 0
  }

  let maxLength = 0
  
  for (let i = 0; i < lengths.length; i++){
    for (let len = 0; len <= n; len++){
      let firstProfit = 0, secondProfit = 0
      if (lengths[i] <= len) {
        firstProfit = prices[i] + dp[i][len-lengths[i]]
      }
      if (i > 0) {
        secondProfit = dp[i-1][len]
      }
      dp[i][len] = Math.max(firstProfit, secondProfit)

    }
  }

  return dp[lengths.length-1][n]
}

const longestPalindromicSubsequence = (str) => {
  let dp = []

  const recursive = (str, startIndex, endIndex) => {
    if (startIndex > endIndex) {
      return 0
    }
    if (startIndex == endIndex) {
      return 1
    }
    dp[startIndex] = dp[startIndex] || []

    if (!dp[startIndex][endIndex]) {
      if (str[startIndex] == str[endIndex]) {
        dp[startIndex][endIndex] = 2 + recursive(str, startIndex+1, endIndex-1)
      } else {
        let case1 = recursive(str, startIndex + 1, endIndex)
        let case2 = recursive(str, startIndex, endIndex - 1)
        dp[startIndex][endIndex] = Math.max(case1, case2)
      }
    }
    return dp[startIndex][endIndex]
  }

  return recursive(str, 0, str.length-1)
}
// 105. Construct Binary Tree from Preorder and Inorder Traversal
var buildTree = function(preorder, inorder) {
    let preIdx = 0
    let map = {}
    
    for(let i = 0; i<inorder.length; i++){
        let val = inorder[i]
        map[val] = i
    }
    
    const dfs = (left, right) => {
        if(right == left){
            return null
        }
        let rootVal = preorder[preIdx]
        
        let root = new TreeNode(rootVal)
        let index = map[rootVal]
        preIdx++
        
        root.left = dfs(left, index)
        root.right = dfs(index+1, right)
        return root
    }
    
    return dfs(0, inorder.length)       
};
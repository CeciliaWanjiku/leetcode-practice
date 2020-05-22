var serialize = function(root) {
    if(!root){
        return "X" + ","
    }
    let left = serialize(root.left)
    let right = serialize(root.right)
    
    return root.val + "," + left + right
    
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    
    let q = []
    q.push(data.split(","))
    return deserializeHelper(q)
    
};

var deserializeHelper = function(q) {
    let curr = q.shift()
    
    if(curr){
        let newNode = new TreeNode(curr)
        newNode.left =deserializeHelper(q) 
        newNode.right = deserializeHelper(q)
        return newNode
    }else{
        return null
    }
    
}
//298. Binary Tree Longest Consecutive Sequence
var longestConsecutive = function(root) {
    let longest = 0
    
    const dfs =(node, parent, length) => {
        if(node == null){
            return
        }
        if(parent && node.val == parent.val +1){
            length = length+1
        }else {
            length = 1
        }
        longest = Math.max(longest, length)
        
        dfs(node.left,node, length)
        dfs(node.right,node, length)
    }
    
    dfs(root, null, 0)
    
    return longest
};

var longestConsecutive = function(root) {
    let longest = 0
    
    const dfs =(node) => {
        if(!node){
            return 0
        }
        let left =1+ dfs(node.left)
        let right = 1+ dfs(node.right)
        
        if(node.left && node.val+1 !==node.left.val){
            left = 1
        }
        if(node.right && node.val+1 !==node.right.val){
            right = 1
        }
        
        let length = Math.max(longest, left, right)
        return length

    }
    
    dfs(root)
    
    return longest
};

// 28. Longest Consecutive Sequence
var longestConsecutive = function(nums) {
    let set = new Set()
    
    for(let num of nums){
        set.add(num)
    }
    
    longestStreak = 0
    //ensure the num is not part of a longer sequence
    for(let num of set){
        if(!set.has(num-1)){
            let currNum = num
            let currStreak = 1
            
            while(set.has(currNum+1)){
                currNum += 1
                currStreak +=1
            }
            longestStreak = Math.max(longestStreak, currStreak)
        }
    }
    
    return longestStreak    
};

//654. Maximum Binary Tree

var constructMaximumBinaryTree = function(nums) {
    
    const max = (nums, left, right) => {
        let m = left
        for(let i = left; i<right; i++){
            if(nums[m] < nums[i]){
                m = i
            }
        }
        return m
    }
    
    const construct = (nums, left, right) => {
        if(left == right){
            return null
        }
        let maxIndex = max(nums, left, right)
        
        let root = new TreeNode(nums[maxIndex])
        root.left = construct(nums, left, maxIndex)
        root.right = construct(nums, maxIndex+1, right)
        return root
    }
    
    return construct(nums, 0, nums.length)
    
};

var merge = function(nums1, m, nums2, n) {
    let i = m-1, j = n-1, p = m+n-1
    if(m == 1){
        return nums1
    }
     if(n == 1){
        return nums2
    }
 
    
    while(i>= 0 && j >= 0){
        if(nums1[i] < nums2[j]){
            nums1[p] = nums2[j]
            j--
        }else {
            nums1[p] = nums1[i]
            i--
        }
        p--
    }
    
    
};
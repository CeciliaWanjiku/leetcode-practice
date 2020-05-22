//sliding window
var lengthOfLongestSubstring = function (s) {
    if(s.length <=0){
        return 0
    }
    let seen = new Set()
    let ans = 0
    let i= 0
    let j = 0
    let n = s.length
    
    while(i<n && j<n){
        if(!seen.has(s[j])){
            seen.add(s[j])
            j++
            ans = Math.max(ans, j-i)
        }else {
            seen.delete(s[i])
            i++
        }
    }
    return ans
    
};

var isBalanced = function(root) {
    if(!root){
        return true
    }
    
    const height = (root) => {
        if(!root){
            return 0
        }
        let left = 1+ height(root.left)
        let right = 1+ height(root.right)
        
        return Math.max(left, right)
    }
    let left = height(root.left)
    let right = height(root. right)
    
    if(Math.abs(left-right) >1){
        return false
    }
    return isBalanced(root.left) && isBalanced(root.right)

};

// balanced binary tree
var isBalanced = function(root) {
    if(!root){
        return true
    }
    
    const height = (root) => {
        if(!root){
            return 0
        }
        let left = 1+ height(root.left)
        let right = 1+ height(root.right)
        if(Math.abs(left - right) >1){
            return Number.MAX_VALUE
        }
        return Math.max(left, right)
    }
    let diff = height(root)
    if(diff == Number.MAX_VALUE){
        return false
    }
    return true

};

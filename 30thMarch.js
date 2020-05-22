//298. Binary Tree Longest Consecutive Sequence
var longestConsecutive = function (root) {
    let longest = 0
    
    const dfs =(node, parent, length) => {
        if(node == null){
            return
        }
        if(parent !== null && node.val == parent.val +1){
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


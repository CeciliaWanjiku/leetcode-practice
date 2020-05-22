var constructFromPrePost = function(pre, post) {
    let n = pre.length
    let i = 0
    let j = 0
    
    let stack = []
    //let node = new TreeNode(0)
    stack.push(new TreeNode(0))
    
    while(j<post.length) {
        let len = stack.length
        if(stack[len-1].val == post[j]){
            let child = stack.pop()
            let parent = stack.pop()
            
            if(!parent.left){
                parent.left = child
            }else {
                parent.right = child
            }
            stack.push(parent)
            j++
        }else {
            stack.push(new TreeNode(pre[i++]))
        }
        
        
    }
    return stack.pop().left
};

var closestValue = function(root, target) {
    let closestValue = Number.MAX_VALUE
    let smallestDiff = Number.MAX_VALUE
    
    let q = []
    q.push(root)
    
    while(q.length > 0){
        let curr = q.shift()
        let diff = Math.abs(curr.val-target)
        if(diff < smallestDiff){
            closestValue = curr.val
        }
        smallestDiff = Math.min(smallestDiff, diff)
        
        if(curr.left){
            q.push(curr.left)
        }
        if(curr.right){
            q.push(curr.right)
        }
        
    }
    return closestValue
    
    
};

var searchBST = function(root, val) {
    let node = null
    
    if(!root){
        return node
    }
    
    let q = []
    q.push(root)
    
    while(q.length > 0){
        let curr = q.shift()
        if(curr.val == val){
            node = curr
            return node
        }else {
            if(val <curr.val){
                if(curr.left){
                    q.push(curr.left)
                }
            }else {
                if(curr.right){
                    q.push(curr.right)
                }
            }
        }
    }
    return node
    
    
};

var insertIntoBST = function(root, val) {
    if(!root){
        return new TreeNode(val)
    }
    let q = []
    
    q.push(root)
    while(q.length > 0){
        let curr = q.shift()
        
        if(val< curr.val){
            if(!curr.left){
                curr.left = new TreeNode(val)
            }else {
                q.push(curr.left)
            }
        }else {
            if(!curr.right){
                curr.right = new TreeNode(val)
            }else {
                q.push(curr.right)
            }
        }
    }
    return root
    
};
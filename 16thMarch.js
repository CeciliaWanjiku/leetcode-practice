var minDepth = function(root) {
    let count = 0
    
    let q = []
    
    q.push(root)
    if(!root){
        return count
    }
    
    while(q.length>0){
        let n = q.length
         count++
        for(let i =0; i<n; i++){
            let curr = q.shift()
            if(!curr.left && !curr.right){
                return count
            }
            if(curr.left){
                q.push(curr.left)
            }
            if(curr.right){
                q.push(curr.right)
            }
        }
    }
     return count
    
};

var mergeTrees = function(t1, t2) {
    let tree = null
    
    if(!t1 && !t2){
        return null
    }
    if(!t1 && t2){
        return t2
    }
    if(t1 && !t2){
        return t1
    }
    //t1.val +=t2.val
    t1.left = mergeTrees(t1.left, t2.left)
    t1.right = mergeTrees(t1.right, t2.right)

    if(t1.val && t2.val){
        t1.val = t1.val + t2.val
    }
    if(!t1.val && t2.val){
       t1.val = t2.val
    }
    if(t1.val && !t2.val){
      t1.val = t1.val
    }
    
    
    return t1
};
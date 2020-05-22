//199. Binary Tree Right Side View
var rightSideView = function (root) {
    let arr = []
    if(!root){
        return arr
    }
    let q = [root]
        while(q.length){
            let len = q.length
            let level = q.slice()
            for(let i = 0; i<len; i++){
                let curr = q.shift()
                if(curr.left){
                q.push(curr.left)
                }
                if(curr.right){
                q.push(curr.right)
                }
                if(level[len-1] == curr){
                    arr.push(curr.val)
                }
                
            }
        }
    
    console.log(arr)
    return arr
};
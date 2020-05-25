
var zigzagLevelOrder = function(root) {
    if(!root){
        return []
    }
    let result = []
    let level = 0
    let direction = false
    let q = []
    q.push(root)
    while(q.length){
        let len = q.length
        if(direction){
            console.log(direction)
            for(let i = 0; i<len; i++){
                let curr = q.shift()
                if(!result[level]){
                    result[level] = []
                }
                result[level].unshift(curr.val)
                
                if(curr.left){
                q.push(curr.left)
                }
                if(curr.right){
                    q.push(curr.right)
                }
            }
            direction = false
        }else {
            for(let i = 0; i<len; i++){
                let curr = q.shift()
                if(!result[level]){
                    result[level] = []
                }
                result[level].push(curr.val)
                 if(curr.left){
                q.push(curr.left)
            }
            if(curr.right){
                q.push(curr.right)
            }
            }
            direction = true
            
        } 
        level+=1
        
    }
    console.log(result)
    return result
    
};

//133. Clone Graph
var cloneGraph = function(node) {
    let map = new Map()
    
    const copy = (node) => {
        if(!node){
            return null
        }
        
        if(map.get(node) !== null){
            return map.get(node)
        }
        
        let root = new Node(node.val, [])
        console.log("..",map.get(node), root )
        map.set(node, root)
        
       node.neighbors.forEach((child) => {  
            root.neighbors.push(copy(child))
        })
        return root
    }
    
    return copy(node)
    
};
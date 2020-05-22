var minCostClimbingStairs = function(cost) {
    let len = cost.length
    
    let dp = []
    dp[0] = cost[0]
    dp[1] = cost[1]

    for(let i = 2; i<len; i++){
        dp[i] = Math.min(dp[i-1] +cost[i], dp[i-2] +cost[i] ) 
    }
    return Math.min(dp[len-1],dp[len-2])
};

class BSTIterator {
    constructor(root) {
        this.stack = [];
        this.addChildren(root);
    }
    
    hasNext() {
        return this.stack.length > 0;
    }
    
    next() {
    	const node = this.stack.pop();
      this.addChildren(node.right);
      return node.val;
    }
    
    addChildren(node) {
        while(node) {
            this.stack.push(node);
            node = node.left;
        }
    }
}

var circularArrayLoop = (nums) => {
    let i = 0
    let len = nums.length
    let visited = new Set ()
    
    const dfs = (nos, index) => {
        let lastIndex = nos.length-1
        if(!nos.length){
            return false
        }
        if(visited.has(index)){
            return true
        }
        visited.add(index)
        let no = index + nos[index]
        console.log(">>>>",no, index, nos[index])
        if(no<0){
            return false
        }
        if(no>lastIndex){
            console.log("here", no, lastIndex)
            let rem = no-lastIndex
            index = 0+rem
           return dfs(nos, index)
        }
        console.log("here")
        return dfs(nos, i+nos[index])
        
    }
    
   return dfs(nums, i)
    
};
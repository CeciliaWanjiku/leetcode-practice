//785. Is Graph Bipartite?

var isBipartite = function (graph) {
    let len = graph.length
    let color = new Array(len).fill(-1)
    
    let stack = []
    for(let i = 0; i<len; i++){
        if(color[i] == -1){
            stack.push(i)
            color[i] = 0
            
            while(stack.length){
                let curr = stack.pop()
                
                for(let neigh of graph[curr]){
                    if(color[neigh] == -1){
                        color[neigh] = color[curr] ^ 1
                    }else if(color[neigh] == curr[curr]){
                        return false
                    }
                }
            }
        }
    }
    return true 
};

//474. Ones and Zeroes
var findMaxForm = function(strs, m, n) {
    let maxLen = 0
    const countZerosOnes = (str) => {
        let c = new Array(2).fill(0)
        for(let i = 0; i<str.length; i++){
            if(str[i] == 0){
                c[0]++
            }else{
                c[1]++
            }
        }
        console.log(c)
        return c
    } 
    const dp = new Array(strs.length).fill(0).map(() => new Array(m+1).fill(0).map(() => new Array(n+1)))

    const calculate = (strs, index, zeros, ones) => {
        if(index == strs.length){
            return 0
        }
        let count = countZerosOnes(strs[index])
        let taken  = -1
        if(!dp[index][zeros][ones]){
            if(zeros -count[0] >=0 && ones-count[1] >=0){
            taken = 1+ calculate(strs, index+1, zeros-count[0], ones-count[1])
            }
            let notTaken = calculate(strs, index+1, zeros, ones)
            dp[index][zeros][ones] =  Math.max(taken, notTaken)
        }
        return dp[index][zeros][ones]
        
        
    }
    
    return calculate(strs, 0, m, n)

};

//1049. Last Stone Weight II
var lastStoneWeightII = function(stones) {
    
    const calculate = (stones, index, sum1, sum2) => {
        if(index==stones.length){
            return Math.abs(sum1-sum2)
        }
        
        const diff1 = calculate(stones, index+1, sum1+stones[index], sum2)
        const diff2 = calculate(stones, index+1, sum1, sum2+stones[index])
        
        return Math.min(diff1, diff2)
        
    }
    
    return calculate(stones, 0, 0, 0)

};

// 226. Invert Binary Tree
var invertTree = function(root) {
    if(!root){
        return root
    }
    const invert = (root) => {
        if(!root){
            return null
        }
        let left = invert(root.left)
        let right = invert(root.right)
        
        root.left = right
        root.right = left
        return root
    }
    
    invert(root)
    return root
    
};
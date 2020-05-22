var maxProduct = function(root) {
    let allSum = []
    
    const treeSum = (subroot) => {
        if(!subroot){
            return 0
        }
        let left = treeSum(subroot.left)
        let right = treeSum(subroot.right)
        let toSum = left+right+subroot.val
        allSum.push(toSum)
        return toSum    
    }
    
    let totalSum = treeSum(root)
    let bestSum = 0
    for(let sum of allSum){
        let currSum = sum * (totalSum - sum)
        bestSum = Math.max(currSum, bestSum)
    }
    return bestSum
    
};

// Dijkstra's algorithm in Javascript

function djikstraAlgorithm(startNode){
    let distances = {}
    

}


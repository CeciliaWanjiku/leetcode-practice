const sum = (arr) => {
    let total = 0
    for(let num of arr){
        total += parseInt(num,2)
    }
    return total
}
var sumRootToLeaf = function(root) {
    let paths = []
    let sumOf = 0
    if(!root){
        return sum
    }
    
    const formPaths = (root, path) => {
        if(!root){
            return
        }
        path = path+root.val
        if(!root.left && !root.right){
            console.log("whaaa")
            paths.push(path) 
            return     
        }
        
        formPaths(root.left, path)
        formPaths(root.right, path)
        
           
    }
    formPaths(root, '')
    console.log(paths)
    return sum(paths)
    
};

var maxProfit = function(prices) {
    let bestProfit = Number.MIN_VALUE
    let currProfit = 0
    for(let i = 1; i<prices.length; i++){
        currProfit = Math.max(currProfit, currProfit + prices[i]- prices[i-1])
        bestProfit = Math.max(bestProfit, currProfit)   
    }
    return bestProfit
    
};
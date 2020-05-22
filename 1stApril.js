//543. Diameter of Binary Tree
var diameterOfBinaryTree = function (root) {
    let maxDepth = 0
    if(!root){
        return 0
    }
    const calculate = (node) => {
        if(!node){
            return 0
        }
        let left = calculate(node.left)
        let right = calculate(node.right)

        let height = 1 + Math.max(left, right)
        maxDepth = Math.max(left + right, maxDepth)
        return height
    }
    
    calculate(root)
    return maxDepth
    
    
};

const comparator = (a, b) => {
        const s1 = ""+a+b
        const s2 = ""+b+a
        
        return s2-s1
    }
//179. Largest Number
var largestNumber = function(nums) {
    let str = ""
    nums.sort(comparator)
    for(let num of nums) {
        str += num
    }
    if(str == 0){
        return "0"
    }
    return str
};




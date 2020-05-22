//32. Longest Valid Parentheses
var longestValidParentheses = function (s) {
    let count = 0
    let stack = []
    stack.push(-1)
    
    for(let i = 0; i<s.length; i++){
        if(s[i] == '('){
            stack.push(i)
        }else {
            stack.pop()
            if(!stack.length){
                stack.push(i)
            }else {
                count = Math.max(count, i - stack[stack.length-1])
            }
        }
    }
    return count
};

var longestValidParentheses = function(s) {
    let left = 0
    let right = 0
    let maxLength = 0
    
    for(let i = 0; i<s.length; i++) {
        if(s[i] == '(') {
            left++
        }else {
            right++
        }
        
        if(left == right){
            maxLength = Math.max(maxLength, 2*right)
        } else if( right>=left){
            left = right = 0
        }
    }
    left = right = 0
    
    for(let i = s.length-1; i>=0; i--) {
        if(s[i] == "(") {
            left++
        }else {
            right++
        }
        
        if(left == right){
            maxLength = Math.max(maxLength, 2*left)
        }else if(left >= right){
            left = right = 0
        }
    }
    return maxLength
};

var combinationSum = function(candidates, target) {
    
    const formCombinations = (c, p,t, paths) => {
        if(t == 0){
                paths.push(p)
                return
            }
        
        
        for(let i = c; i<candidates.length; i++){
            if(t >= candidates[i]){
                formCombinations(i, [...p, candidates[i]], t-candidates[i], paths)  
            }
            
        }
    }
    
    let combis = []
    
    formCombinations(0, [], target, combis)
    
    return combis
};
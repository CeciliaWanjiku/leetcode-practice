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
//Letter Combinations of a Phone Number
var letterCombinations = function(digits) {
    if(digits.length === 0){
        return []
    }
   const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };
    let paths = []
    
    const formCombinations = (ind, path) => {
        if(ind == digits.length){
            paths.push(path)
            return
        }
        for(let l of map[digits[ind]]){
           formCombinations(ind+1, paths+l)
       }   
    }
        formCombinations(0, "")
    
    return paths
    
};

var letterCombinations = function(digits) {
    let paths = []
    
    if(!digits.length){
        return paths
    }
    
    let phone = {'2': ['a', 'b', 'c'],
                 '3': ['d', 'e', 'f'],
                 '4': ['g', 'h', 'i'],
                 '5': ['j', 'k', 'l'],
                 '6': ['m', 'n', 'o'],
                 '7': ['p', 'q', 'r', 's'],
                 '8': ['t', 'u', 'v'],
                 '9': ['w', 'x', 'y', 'z']}
    
    const dfs = (path, numbers, index) => {
        if(numbers.length == path.length){
            paths.push(path)
            return
        }
        for(let i = index; i<numbers.length; i++){
            let chars = phone[numbers[i]]
            for(let j = 0; j<chars.length; j++){
                dfs(path+chars[j], numbers, i+1)
            }
        }
    }
    
    dfs("", digits, 0)
    
    return paths
 
};

var isValid = function(s) {
    const parens = {
        ")": "(",
        "]" : "[",
        "}": "{"
    }
    
    let stack = []
    for(let i = 0; i<s.length; i++){
        if(stack.length == 0){
            stack.push(s[i])
        }
        
        else {
            if(stack[stack.length-1] == parens[s[i]]){
            stack.pop()
            console.log(stack)
        }else {
            stack.push(s[i])
        }
            
        }
       
    }
    if(stack.length){
        return false
    }
    return true
    
};

var getIntersectionNode = function(headA, headB) {
    let lenA = 0
    let lenB = 0
    let startA = headA
    let startB  = headB
    if(!headA || !headB){
        return
    }
    while(headA){
        lenA++
        headA = headA.next
    }
     while(headB){
        lenB++
        headB = headB.next
    }
    if(lenA > lenB){
        let diff = lenA-lenB
        while(diff>0){
            startA = startA.next
            diff--
        }
    }else {
        let diff = lenB-lenA
        while(diff>0){
            startB = startB.next
            diff--
        }
        
    }
    
    while(startA || startB){
        if(startA == startB){
            return startA     
        }else if(startA.next == startB.next){
            console.log(lenA, lenB)  
            return startB.next
        }else{
            startA = startA.next
            startB = startB.next
        }
    }
    
};

var subsets = function(nums) {
    let result = []
    
    const permutate = (path, index, n) => {
        result.push(path)
        
        for(let i = index; i<n.length; i++){
            permutate(path.concat(n[i]), i+1, n)      
        }      
    }
    
    permutate([], 0, nums)
    return result
    
};
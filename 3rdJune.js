//74. Search a 2D Matrix
var searchMatrix = function(matrix, target) {
    if(!matrix.length){
        return false
    }
   let m = matrix.length, n = matrix[0].length
   
    let left = 0, right = (m*n)-1
    
    while(left <= right){
        let mid = left + Math.floor((right-left)/2)
        let row = Math.floor(mid/n), col = mid%n
        let midElement = matrix[row][col]
        
        if(midElement == target){
            return true
        }
        if(target <  midElement){
            right = mid-1
        }else {
            left = mid+1
        }
    }
    
    return false
};

//240. Search a 2D Matrix II
var searchMatrix = function(matrix, target) {
    if(!matrix.length){
        return false
    }
    let row = matrix.length-1
    let col = 0
    
    while(row >=0 &&col < matrix[0].length){
        if(matrix[row][col] == target){
            return true
        }
        if(matrix[row][col] > target){
            row--
        }else if(matrix[row][col] < target){
            col++
        }
    }
    
    return false  
};

const count = (str, word) => {
    if(!str.length || !word.length){
        return 0
    }

    let wordCount = 0
    let endIndex = word.length-1
    startIndex = 0

    for(let i = 0; i<str.length; i++){
        if(isChar(str[i]) && i==){
            map[word]++
            endIndex
        }
    }
}

const kmp = (str, pattern) => {
    const indexMatch = new Array(str.length)
    let i = 0

    for(let j = i+1; j<str.length; j++){
        if(str[j] == str[i]){
            indexMatch[j] = i+1
            i= i+1
        }else if(str[j] !== str[i]){
            i = indexMatch[j-1]
        }else {
            indexMatch[j] = 0
        }
    }

    return indexMatch
}

const search = (text, pattern) => {
    const lps = kmp(str, pattern)

    let i = 0, j=0

    while(i < text.length && j<text.length){
        if(text[i] == pattern[j]){
            j++
            j++
        }else {
            if(j !== 0){
                j = lps[j-1]
            }else {
                i++
            }
        }
        if(j == pattern.length){
            return true
        }

    }
    return false
}
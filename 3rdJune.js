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
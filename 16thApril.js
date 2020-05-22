//dutchFlag
var sortColors = function (nums) {
    let start = 0
    let end = nums.length -1
    let curr = start
    
    while(curr <= end){
        if(nums[curr] == 0){
            [nums[start], nums[curr]] = [nums[curr], nums[start]]
            start++
            curr++
        }else if(nums[curr] == 2){
            [nums[curr], nums[end]] = [nums[end], nums[curr]]
            end--
        }else {
            curr++
        }
    }
    
};

//33. Search in Rotated Sorted Array
var search = function(nums, target) {
    let start = 0, end = nums.length-1
    
    while(start<=end){
        let mid = start + Math.floor((end - start)/2)
        if(nums[mid] == target){
            return mid
        }else if( nums[mid] >= nums[start]){
            if(target >= nums[start] && target < nums[mid]){
                end = mid-1
            }else {
                start = mid+1
            }
        }else {
            if(target <=nums[end] && target > nums[mid]){
                start = mid +1
            }else {
                end = mid -1
            }
        }
    }
    return -1
    
};





